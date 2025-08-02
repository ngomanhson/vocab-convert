"use client";

import TextInputForm from "@/components/TextInputForm";
import WordListArea from "@/components/WordListArea";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [rawText, setRawText] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [outputText, setOutputText] = useState("");

  const extractWordsFromText = (text: string): string[] => {
    const lines = text.split("\n").map(line => line.trim()).filter(line => line !== "");
    const uniqueWords: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/^[\/\-\[\(]/.test(line)) continue;
      if (uniqueWords.includes(line)) continue;

      const nextLine = lines[i + 1] || "";
      if (nextLine.startsWith("/") || nextLine.includes("-") || !nextLine) {
        uniqueWords.push(line);
      }
    }

    return [...new Set(uniqueWords)];
  };

  const shuffleArray = (arr: string[]): string[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleInputChange = (text: string) => {
    setRawText(text);
    const extracted = extractWordsFromText(text);
    setWords(extracted);
  };

  const handleShuffle = () => {
    setShuffledWords(shuffleArray(words));
  };

  const compiledText = useMemo(() => {
    const list = shuffledWords.length > 0 ? shuffledWords : words;
    return list.map((word, idx) => `${idx + 1}. ${word}:`).join("   \n");
  }, [shuffledWords, words]);

  useEffect(() => {
    setOutputText(compiledText);
  }, [compiledText]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto my-5">
        <TextInputForm value={rawText} onChange={handleInputChange} />
        {outputText && (
          <WordListArea
            value={outputText}
            onChange={setOutputText}
            onShuffle={handleShuffle}
          />
        )}
      </div>
    </div>
  );
}

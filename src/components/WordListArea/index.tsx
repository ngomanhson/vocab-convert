interface WordListAreaProps {
    value: string;
    onChange: (text: string) => void;
    onShuffle: () => void;
}

export default function WordListArea({ value, onChange, onShuffle }: WordListAreaProps) {
    return (
        <>
            <button
                onClick={onShuffle}
                type="button"
                className="flex items-center gap-x-2 px-3 py-1.5 mb-3 text-sm font-medium text-gray-400 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
            >
                <span className="block">Shuffle</span>
            </button>
            <textarea
                rows={40}
                className="block w-full px-3 py-2 rounded-lg text-sm text-gray-400 outline-0 bg-white/10 backdrop-blur-sm border border-white/10 leading-loose"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}

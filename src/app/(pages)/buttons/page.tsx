"use client"

import Button from "@/components/common/Button";
import { HeartIcon, ArrowDownIcon } from "@/components/Icons";
import { useState } from "react";

export default function ButtonsPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitDemo = () => {
        setIsLoading(true)

        const timeout = setTimeout(() => {
            setIsLoading(false)
            clearTimeout(timeout)
        }, 1000);


    }

    const variants: Array<"primary" | "secondary" | "ghost"> = ["primary", "secondary", "ghost"]
    const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg"]

    return (
        <div className="bg-white p-8 space-y-10 h-screen">
            <h1 className="text-2xl font-bold text-gray-800">Button Template</h1>

            {/* -------- Variants & Sizes -------- */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Variants & Sizes</h2>
                {variants.map((variant) => (
                    <div key={variant} className="flex gap-4 mb-4 items-center">
                        {sizes.map((size) => (
                            <Button key={size} variant={variant} size={size}>
                                {variant} {size}
                            </Button>
                        ))}
                    </div>
                ))}
            </section>

            {/* -------- With Icon -------- */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">With Icon</h2>
                <div className="flex gap-4 flex-wrap items-center">
                    <Button variant="primary" size="sm" leftIcon={<HeartIcon />}>
                        Like
                    </Button>
                    <Button variant="secondary" size="md" leftIcon={<ArrowDownIcon />}>
                        Download
                    </Button>
                    <Button variant="ghost" size="lg" leftIcon={<HeartIcon />}>
                        Favorite
                    </Button>
                </div>
            </section>

            {/* -------- Disabled -------- */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Disabled</h2>
                <div className="flex gap-4 flex-wrap items-center">
                    <Button variant="ghost" size="sm" disabled>
                        Disabled
                    </Button>
                    <Button variant="primary" size="md" disabled>
                        Disabled
                    </Button>
                    <Button variant="secondary" size="lg" leftIcon={<HeartIcon />} disabled>
                        Disabled with Icon
                    </Button>
                </div>
            </section>

            {/* -------- Loading -------- */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Loading</h2>
                <div className="flex gap-4 flex-wrap items-center">
                    <Button variant="primary" size="sm" isLoading>
                        Submit
                    </Button>
                    <Button variant="secondary" size="md" isLoading leftIcon={<ArrowDownIcon />}>
                        Uploading
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        leftIcon={<ArrowDownIcon />}
                        isLoading={isLoading}
                        onClick={handleSubmitDemo}
                    >
                        Download
                    </Button>
                </div>
            </section>
        </div>
    )
}

import React from "react"
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
    children: React.ReactNode;
    variant: ButtonVariant;
    size: ButtonSize;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
}

export default function Button({ children, variant = "ghost", size = "lg", leftIcon, rightIcon }: ButtonProps) {
    const variantClassNames: Record<ButtonVariant, string> = {
        "primary": "bg-orange-400 text-white",
        "secondary": "bg-black text-white",
        "ghost": "bg-transparent text-black border border-current",
    }

    const sizeClassNames: Record<ButtonSize, string> = {
        "sm": "text-sm",
        "md": "text-base",
        "lg": "text-lg",
    }

    return (
        <button className={
            twMerge("flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md bg-gray-200 font-medium border border-transparent",
                variantClassNames[variant],
                sizeClassNames[size],
            )}>
            {leftIcon}
            {children}
        </button>
    );
}
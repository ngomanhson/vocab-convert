import React, { cloneElement, ComponentProps, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentProps<"button"> {
    children: React.ReactNode;
    variant: ButtonVariant;
    size: ButtonSize;
    leftIcon?: React.ReactElement<HTMLAttributes<HTMLElement>, string>;
    isLoading?: boolean;
}

export default function Button({ children, variant = "ghost", size = "lg", leftIcon, className, isLoading = false, ...buttonProps }: ButtonProps) {
    const variantClassNames: Record<ButtonVariant, string> = {
        "primary": "bg-orange-400 text-white",
        "secondary": "bg-black text-white",
        "ghost": "bg-transparent text-black border border-current",
    }

    const iconVariantClassNames: Record<ButtonVariant, string> = {
        "primary": "text-white stroke-current",
        "secondary": "text-white stroke-current",
        "ghost": "stroke-current",
    }

    const sizeClassNames: Record<ButtonSize, string> = {
        "sm": "text-sm",
        "md": "text-base",
        "lg": "text-lg",
    }

    const iconSizeClassNames: Record<ButtonSize, string> = {
        "sm": "size-4",
        "md": "size-5",
        "lg": "size-6",
    }

    const loadingSizeClassNames: Record<ButtonSize, string> = {
        "sm": "size-4",
        "md": "size-5",
        "lg": "size-6",
    }

    const { className: leftIconClassName, ...leftIconProps } = leftIcon?.props || {}

    const leftIconClone = leftIcon ? cloneElement(leftIcon, {
        className: twMerge(iconSizeClassNames[size], iconVariantClassNames[variant]),
        ...leftIconProps
    }) : null;


    const loading = <div className={twMerge("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-5 border-2 border-current border-t-transparent border-b-transparent rounded-full animate-spin [&~*]:opacity-0 [&~*]:invisible", loadingSizeClassNames[size])}></div>

    return (
        <button
            className={
                twMerge("flex items-center gap-2 relative py-2 px-4 cursor-pointer rounded-md bg-gray-200 font-medium border border-transparent disabled:cursor-not-allowed disabled:pointer-events-none disabled:select-none disabled:opacity-50",
                    variantClassNames[variant],
                    sizeClassNames[size],
                    leftIconClassName,
                    className,
                )}
            {...buttonProps}
            disabled={buttonProps.disabled || isLoading}
        >
            {isLoading && loading}
            {leftIconClone}
            {isLoading ? <div> {children}</div> : children}
        </button>
    );
}
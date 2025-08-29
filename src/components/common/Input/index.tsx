import { cloneIconElement } from "@/utils/helper";
import { ComponentProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputSize = "sm" | "md" | "lg";

export interface InputProps extends ComponentProps<"input"> {
    inputSize?: InputSize;
    leftIcon?: React.ReactElement<HTMLAttributes<HTMLElement>, string>;
    rightIcon?: React.ReactElement<HTMLAttributes<HTMLElement>, string>;
    error?: string;
}

export default function Input({ inputSize = "md", leftIcon, rightIcon, error, ...inputProps }: InputProps) {
    const isDisabled = inputProps.disabled;
    const sizeClassNames: Record<InputSize, string> = {
        "sm": "px-2 py-1 text-sm",
        "md": "px-3 py-2 text-base",
        "lg": "px-4 py-3 text-lg",
    }

    const iconSizeClassNames: Record<InputSize, string> = {
        "sm": "size-5",
        "md": "size-6",
        "lg": "size-7",
    }

    const paddingContainIcon: Record<InputSize, { left: string, right: string }> = {
        sm: { left: "pl-8", right: "pr-8" },
        md: { left: "pl-9", right: "pr-9" },
        lg: { left: "pl-10", right: "pr-10" },
    }

    const leftIconClone = cloneIconElement(leftIcon, iconSizeClassNames[inputSize]);
    const rightIconClone = cloneIconElement(rightIcon, iconSizeClassNames[inputSize]);
    return (
        <div>
            <div className="relative h-fit">
                {leftIcon && (
                    <div className={twMerge(
                        "absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-disabled:opacity-50",
                        iconSizeClassNames[inputSize],
                        isDisabled && "opacity-50",
                        error && "text-red-500",
                    )}>
                        {leftIconClone}
                    </div>
                )}

                <input
                    className={
                        twMerge("w-full text-gray-700 border border-gray-300 rounded-md outline-0 disabled:opacity-50 focus:border-blue-700",
                            sizeClassNames[inputSize],
                            leftIcon && paddingContainIcon[inputSize].left,
                            rightIcon && paddingContainIcon[inputSize].right,
                            error && "border-red-500 focus:border-red-500"
                        )}
                    {...inputProps}

                />
                {rightIcon && (
                    <div className={twMerge("absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                        iconSizeClassNames[inputSize],
                        isDisabled && "opacity-50",
                        error && "text-red-500"
                    )}>
                        {rightIconClone}
                    </div>
                )}
            </div>

            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    )
}

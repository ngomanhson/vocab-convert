import { cloneElement, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const cloneIconElement = (
    icon: React.ReactElement<HTMLAttributes<HTMLElement>, string | React.JSXElementConstructor<unknown>> | undefined,
    sizeClassName: string
) => {
    if (!icon) return null;
    return cloneElement(icon, {
        className: twMerge(sizeClassName, icon.props.className),
        ...icon.props
    });
}
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button ({ children, asChild, ...props }: ButtonProps ) {

    const Tag = asChild ? Slot : 'span';

    return (
        <Tag {...props}
            className={clsx(
                "bg-purple-500 hover:bg-purple-600 px-4 py-5 font-medium text-gray-200 uppercase rounded w-full focus:ring"
        )}>
            {children}
        </Tag>
    )
}
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button ({ children, asChild }: ButtonProps ) {

    const Tag = asChild ? Slot : 'span';

    return (
        <Tag 
            className={clsx(
                "bg-purple-500 hover:bg-purple-600 px-4 py-5 font-medium text-gray-200 uppercase rounded w-full focus:ring"
        )}>
            {children}
        </Tag>
    )
}
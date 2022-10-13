import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading ({ size = 'md', children, asChild, className}: HeadingProps ) {

    const Tag = asChild ? Slot : 'h2';

    return (
        <Tag 
        className={clsx (
            "text-gray-200 font-medium", 
            {
                'text-xl': size === 'xs',
                'text-2xl': size === 'sm',
                'text-3xl': size === 'md',
                'text-4xl': size === 'lg',
                'text-5xl': size === 'xl',
            },
            className,
        )}>
            {children}
        </Tag>
    )
}
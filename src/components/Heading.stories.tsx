import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from "./Heading"; 

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "Heading",
        size: "md",
    },
    argTypes: {
        size: {
          options: ['xs', 'sm', 'md', 'lg', 'xl'],
          control: { type: 'inline-radio' },
        },
    },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true,
            },
        },
    }
}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading</h1>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
}
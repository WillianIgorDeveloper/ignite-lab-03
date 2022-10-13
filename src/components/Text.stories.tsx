import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from "./Text"; 

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Text",
        size: "md",
    },
    argTypes: {
        size: {
          options: ['xs', 'sm', 'md', 'lg'],
          control: { type: 'inline-radio' },
        },
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true,
            },
        },
    }
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text</p>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    }
}
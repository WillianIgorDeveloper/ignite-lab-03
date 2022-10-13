import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react'
import { Input, InputRootProps } from "./Input"; 

export default {
    title: "Components/Input",
    component: Input.Root,
    args: {
        children: [
                <Input.Icon>
                    <EnvelopeSimple />
                </Input.Icon>,
                <Input.Input placeholder="Input area" />
        ]
    },
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}

export const WithoutIcon: StoryObj<InputRootProps> = {
    args: {
        children: (
            <Input.Input placeholder="Input area" />
        )
    }
}
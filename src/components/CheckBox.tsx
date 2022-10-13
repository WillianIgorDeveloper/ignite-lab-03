import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckBoxProps {}

export function CheckBox ({}: CheckBoxProps ) {

    return (
        <CheckboxPrimitive.Root className='w-6 h-6 bg-gray-600 rounded p-[2px]'>
            <CheckboxPrimitive.Indicator asChild >
                <Check weight='bold' className='h-5 w-5 text-gray-200' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}
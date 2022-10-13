import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputRootProps {
    children: ReactNode;
}

function InputRoot ({ children }: InputRootProps) {
    return (
        <div
            className={clsx(
                "rounded bg-gray-700 px-4 py-3 focus-within:ring w-full flex items-center gap-3",
            )}
        >
            {children}
        </div>
    )
}

InputRoot.displayname = "Input.Root"

export interface InputIconProps {
    children: ReactNode;
}

function InputIcon ({ children }: InputIconProps) {
    return (
        <Slot className='w-6 y-6 text-gray-600'>
            {children}
        </Slot>
    )
}

InputIcon.displayname = "Input.Icon"

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

function InputInput (props: InputInputProps) {

    return (
        <input  
        className="bg-transparent flex-1 text-gray-200 placeholder:text-gray-600 text-sm outline-none"
            {...props}
        />
    )
}

InputInput.displayname = "Input.Input"

export const Input = {
    Root: InputRoot,
    Input: InputInput,
    Icon: InputIcon,
}
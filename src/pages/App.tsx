import { EnvelopeSimple, LockKey } from 'phosphor-react'

import { Button } from "../components/Button"
import { CheckBox } from "../components/CheckBox"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"
import { Text } from "../components/Text" 

export function App () {
  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col items-center justify-center">
      <header className='flex flex-col items-center'>
        <img src="icon.svg" className='w-[100px] h-[100px]' />
        <Heading className='mt-6 mb-4' size='xl'>Ignite Lab | Yellow Moon</Heading>
        <Text size='lg' className='text-gray-300'>Faça login e começe a usar!</Text>
      </header>
      <form className='mt-6 mb-4 flex flex-col gap-4 w-full max-w-sm'>
        <label htmlFor="eMail" className='flex flex-col gap-2'>
          <Text size='lg'>Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <EnvelopeSimple />
            </Input.Icon>
            <Input.Input id='eMail' type="email" placeholder='email@exemple.com' />
          </Input.Root>
        </label>
        <label htmlFor="Password" className='flex flex-col gap-2'>
          <Text size='lg'>Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <LockKey />
            </Input.Icon>
            <Input.Input id='Password' type="password" placeholder='*********' />
          </Input.Root>
        </label>
        <label htmlFor="Check" className='flex items-center gap-2'>
          <CheckBox id='Check' />
          <Text size='sm' className='text-gray-300'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" asChild={true} ><button>Entrar na Plataforma</button></Button>
      </form>
      <footer className='flex flex-col gap-3 items-center'>
        <Text className='text-gray-300 font-regular text-sm underline hover:text-gray-200'><a href="">Esqueceu sua senha?</a></Text>
        <Text className='text-gray-300 font-regular text-sm underline hover:text-gray-200'><a href="">Não possui uma conta? Crie uma agora!</a></Text>
      </footer>
    </div>
  )
}
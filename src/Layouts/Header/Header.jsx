import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../../UI/Sperfil/Logo'
import React from 'react'

export const Header = () => {
  return (
    <header className =" bg-gray-900 text-white w-screen h-30 justify-around items-center flex ">
        <Logo />
        <Navbar />
    </header>
  )
}

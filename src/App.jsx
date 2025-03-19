
import React from 'react'
import { Header } from './Layouts/Header/Header'
import {Routes, Route} from 'react-router-dom'
import './Global.css'
import { Container } from './Pages/Container/Container'
import { Home } from './Pages/Sections/Home'
import { Footer } from './Layouts/Footer/Footer'
import { Experience } from './Pages/Sections/Experience'
import { Technologias } from './Pages/Sections/Tecnologias'

export const App = () => {
  return (
    <>
      <Header />
        <Container>
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/Experience" element= {<Experience />} />
            <Route path="/Technologias" element= {<Technologias />} />
        </Routes>
        </Container>
      <Footer/>
    </>
  )
}


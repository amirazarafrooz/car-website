import { useState } from 'react'
import { Header } from './components'
import { Footer } from './components'
import { Home } from './components/Home'
import { About } from './components/About'
import { Products } from './components/Products'
import { Contact } from './components/Contact'
import {Productdetails} from './components/Productdetails'
import {NotFound} from './components/NotFound'
import "../src/CSS/App.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"






function App() {

  return (
    <div>

    
      <BrowserRouter>
        <Header/>
        <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<Productdetails />} />
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
                
        </Routes>
      
      </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default App

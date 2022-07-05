import React from 'react'
import './routeStyle.css'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './routeComponents/Home'
import Categorias from './routeComponents/Categorias'
import Contato from './routeComponents/Contato'

function Routex() {
    return (
        <div>
            <ul>
                <li>
                    <Link  to='/' style={{color:'white'}}>Home</Link>
                </li>
                <li>
                    <Link to='/Contato' style={{color:'white'}}>Contato</Link>
                </li>
                <li>
                    <Link to='/Categorias' style={{color:'white'}}>Categorias</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/Contato" element={<Contato/>}></Route>
                <Route exact path="/Categorias" element={<Categorias/>}></Route> 
            </Routes>
            <footer>
                <h2>Static Footer</h2>
            </footer>
        </div>       
    )
}

export default Routex;

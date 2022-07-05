import './header.css'
import whatslogo from './whatslogo.svg'
import React from 'react'

function Header() {
    return (
        <header>
            <section className="whatsapp-logo">
                <img alt="whatsapp logo" src={whatslogo}></img>
            </section>
            <ul>
                <li>WHATSAPP WEB</li>
                <li>RECURSOS</li>
                <li>DOWNLOAD</li>
                <li>SEGURANÇA</li>
                <li>CENTRAL DE AJUDA</li>
                <li class="language-selection">
                    <i class="fa-solid fa-globe"></i>
                    <span>PT(BR)</span>
                    <i class="fa-solid fa-caret-down arrowdown"></i>
                </li>
            </ul>
        </header>
    )
}

export default Header
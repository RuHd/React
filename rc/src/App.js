import './App.css';
import React from 'react';
function GooglePage() {

  
  return (
    <div id="container">
      <header>
          <ul>
            <li>Gmail</li>
            <li>Imagens</li>
            <li>Opções</li>
            <li>E-mail</li>
          </ul>
      </header>
      <main>
          <h1>Google</h1>
          <section className = "search-bar">
            <span></span>
            <input type="text" placeholder = "Pesquise no Google ou escreva uma URL"></input>
            <span className="mic-icon"></span>
          </section>
          <section className = "btn-section">
              <button><span>+</span></button>
              <p>Adicionar Atalho</p>
          </section>
          <a className="custom-bar">Personalizar o Chrome</a>
      </main>
    </div>

    
  );
}

export default GooglePage;

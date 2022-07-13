import React from "react";
import './head.css';

function Head () {
    return (
        <header>
            <section id="logoTitle">
                <h2 className="Liziqi">Liziqi</h2>
                <h2 className="Recipe">Recipe</h2>
                <span className="Cooking">Cooking</span>
            </section>
            <section id="searchBar">
                <input type="search" placeholder="Search..."></input>
                <button>
                    <i></i>
                </button>
            </section>
            <section id="UploadLogin">
                <a href="#" className="Upload">Upload</a>
                <a href="#" className="Login">Login</a>
            </section>
        </header>
    )
}

export default Head
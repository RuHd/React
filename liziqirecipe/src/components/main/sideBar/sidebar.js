import React from "react";
import './sidebar.css'
import Footer from "../../footer/footer";

function Sidebar() {
    return(
        <div id="sidebar">
            <a> Home </a>
            <a>Liziqi Cooking</a>
            <a> Kravan Cooking</a>
            <a> Dianxi Xiaoge Cooking</a>
            <a> Other Cooking</a>
            <a> Other Video</a>
            <a> Privacy Policy</a>
            <a> Disclaimer</a>
            <a>Terms and Conditions</a>
            <a>About Us</a>
            <a>Contact Us</a>
            <Footer/>
        </div>     
    )
}

export default Sidebar
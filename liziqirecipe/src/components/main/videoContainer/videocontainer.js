import React from "react";
import './videocontainer.css'


 function Videocontainer(props) {
     return (
         <div id="videocontainer">
             <img src = {props.imgsrc}></img>
             <p>{props.videotitle}</p>
             <section>
                 <i></i>
                 <span className="author">{props.author}</span>
             </section>
             <span> {props.views} View</span>
         </div>
     )
 }

 export default Videocontainer;
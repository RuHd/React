import './App.css';
import './header.css'


function Top() {
 
  return (
    <header>
        <h1 className="logoname">Woman <span className="wordColor">Outfit</span></h1>
        <div className="upMenu">
          <li>
            <a className="options-menu categories drop">Categories</a>
            <div className="categories-dropmenu hidden">
              <a>Bras</a>
              <a>Intimacy</a>
              <a>Socks</a>
            </div>
          </li>
          <li >
            <a className="options-menu drop">Woman's fashion</a>
            <div className="categories-dropmenu hidden">
              <a>Bras</a>
              <a>Intimacy</a>
              <a>Socks</a>
            </div>
          </li>
          <li >
            <a className="options-menu drop">Outfit</a>
            <div className="categories-dropmenu hidden">
              <a>Spring</a>
              <a>Winter</a>
              <a>Spring</a>
              <a>Summer</a>
            </div>
          </li>
          <li >
            <a className="options-menu ">Golden Access</a>
          </li>
        </div>
    </header>
  )
}

function Header() {
  const categories = document.getElementsByClassName("drop")
  const dropmenu = document.getElementsByClassName("categories-dropmenu")
  alert(dropmenu[5])
  for (let i = 0; i<categories.length; i++) {
    if (dropmenu[i] == undefined) {
      break
    }
    categories[i].addEventListener("click",function(){
      dropmenu[i].classList.toggle("hidden")
    })
  }
  
  return <Top/>
}
export default Header;

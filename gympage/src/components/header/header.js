import './header.css'
import Logo from '../logo/logo'

function Header() {
    return (
        <header>
            <Logo/>
            <div id="menu">
                <a>Home</a>
                <a>Services</a>
                <a>Contact</a>
            </div>
            <button>Menu</button>
        </header>
    )
}

export default Header
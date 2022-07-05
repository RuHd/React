import './header.css'

function Header() {
    return (
        <header>
            <ul className="menu">
                <li>
                    <img></img>
                    <span></span>
                </li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>SERVICES</li>
                <li>CONTACTS</li>
            </ul>

            <ul className="menu-icons">
                <li>
                    <i class="fa-brands fa-linkedin"></i>
                </li>
                <li>
                    <i class="fa-brands fa-facebook-square"></i>
                </li>
                <li>
                    <i class="fa-brands fa-whatsapp-square"></i>
                </li>
            </ul>
        </header>
    )
}

export default Header
import './header.css'

function Header() {
    return (
        <header>
            <div id="telnum-socialmedia-top">
                <div className="telnumber">
                    <p>Call us Today 1-888-123-456</p>
                </div>
                <div className="socialmedias">
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>Instagram</a>
                    <a>Pinterest</a>
                    <a>Linkedin</a>
                </div>
            </div>
            <div id="logoTitle-contact-menu-bottom">
                <div id="logoTitle-contact">
                    <div className="logoTitle">
                        <section className="logoTitle-section">
                            <img/>
                            <h3>Builders Landing Page</h3>
                            <p>Landing Page for Builders</p>
                        </section>
                    </div>
                    <div className="contact">
                        <div className="phone">
                                <section className="contact-sections phone">
                                    <i className="fa-solid fa-phone"></i>
                                    <div>
                                        <span >Phone Number</span>
                                        <span>1-888-123-456</span>
                                    </div>
                                </section>
                        </div>
                        <div className="email">
                            <section className="contact-sections">
                                <i class="fa-solid fa-envelope"></i>
                                <div>
                                    <span>Email</span>
                                    <span>construction@xyz.com</span>
                                </div>      
                            </section>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <a>HOME</a>
                    <a>THEME INFO</a>
                    <a>BLOG</a>
                    <a>PAGE EXAMPLE</a>
                    <a>VIEW PRO</a>
                    <a>CONTACT</a>
                    <a>GET A QUOTE</a>
                </div>
            </div> 
        </header>
    )
}

export default Header
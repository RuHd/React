import './footer.css'
import Logo from '../logo/logo'

function Footer() {
    return (
        <footer>
            <div id="block-section">
                <section className="footer-blocks">
                    <h3>Security</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ultrices eros in cursus turpis. 
                        Morbi blandit cursus risus at ultrices 
                        mi tempus. Mauris commodo quis imperdiet 
                        massa tincidunt nunc.
                        Mi tempus imperdiet nulla malesuada.
                    </p>
                </section>
                <section className="footer-blocks">
                    <h3>Modern Equipment</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ultrices eros in cursus turpis. 
                        Morbi blandit cursus risus at ultrices 
                        mi tempus. Mauris commodo quis imperdiet 
                        massa tincidunt nunc.
                        Mi tempus imperdiet nulla malesuada.
                    </p>
                </section>
                <section className="footer-blocks">
                    <h3>Technology</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ultrices eros in cursus turpis. 
                        Morbi blandit cursus risus at ultrices 
                        mi tempus. Mauris commodo quis imperdiet 
                        massa tincidunt nunc.
                        Mi tempus imperdiet nulla malesuada.
                    </p>
                </section>
            </div>
            <div id="bottom-footer">
                <section>
                    <span></span>
                    <span>Trade Rights Reserved</span>
                    <span>2022</span>
                </section>
                <Logo/>
            </div>
            
        </footer>
    )
}

export default Footer
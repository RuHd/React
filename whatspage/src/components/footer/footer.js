import './footer.css'


function Footer() {
    return (
        <footer>
            <section className="bottom-menu">
                <div>
                    <h4>WHATSAPP</h4>
                    <ul className="bottom-list">
                        <li>Recursos</li>
                        <li>Segurança</li>
                        <li>Download</li>
                        <li>WhatsApp Web</li>
                        <li>Business</li>
                        <li>Privacidade</li>
                    </ul>
                </div>
                <div> 
                    <h4>EMPRESA</h4>
                    <ul className="bottom-list">
                        <li>Sobre</li>
                        <li>Carreiras</li>
                        <li>Central de marcas</li>
                        <li>Fale conosco</li>
                        <li>Blog</li>
                        <li>Histórias de sucesso do WhatsApp</li>
                    </ul>
                </div>

                <div>
                    <h4>DOWNLOAD</h4>  
                    <ul className="bottom-list">
                        <li>Mac/PC</li>
                        <li>Android</li>
                        <li>iPhone</li>
                    </ul>      
                </div>
                <div>
                    <h4>SUPORTE</h4>  
                    <ul className="bottom-list">
                        <li>Central de ajuda</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Coronavírus</li>
                    </ul>  
                </div>
            </section>
            <section className="copyright-bottom">
                <span>2022 <span><i class="fa-solid fa-copyright"></i></span> WhatsApp LLC</span>
                <a>Privacidade e Termos<span></span></a>
            </section>
        </footer>
    )
}

export default Footer
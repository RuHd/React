import './main.css'
import Footer from '../../footer/footer'
import cellFone from './178505650_460141378430025_2455877548463147186_n.png'
import phoneBlock from './phoneleftblock.png'
import hello from './helloIMG.JPG'



function Main() {
    return(
        <main>
            <section className="main-section">
                <div className="main-subsection">
                    <div>
                        <h2>Simples. Seguro.</h2>
                        <h2>Troque mensagens com confiança</h2>
                    </div>                   
                    <p className="first-paragraph-main">
                        Com o WhatsApp, suas mensagens e chamadas são
                        rápidas, simples, seguras e gratuitas.
                        Disponível para celulares em todo o mundo.
                    </p>
                    <p className="second-paragraph-main">
                        Sujeitas à cobrança de dados. Entre em contato
                        com sua operadora para mais informações.
                    </p>
                    <a> 
                        <i class="fa-brands fa-android"></i>   
                        Android
                    </a>
                    <a> 
                         <i class="fa-brands fa-apple"></i>
                        iPhone
                    </a>
                    <a> 
                        <i class="fa-solid fa-desktop"></i>
                        Mac ou Windows
                    </a>
                </div>
                <img src={cellFone} alt=""/>
            </section>
            <section className="two-sections">
                <div className="left-block block-position">
                    <div className="left-block-text">
                        <h2>Aplicativo WhatsApp Business</h2>
                        <p>
                            O <a>WhatsApp Business</a> é um aplicativo gratuito e desenvolvido
                            para atender às necessidades das pequenas empresas. Crie
                            um catálogo para exibir seus produtos e serviços. Interaja
                            facilmente com seus clientes usando recursos para automatizar,
                            classificar e responder rapidamente as mensagens.
                        </p>
                        <p>
                            O WhatsApp também pode ajudar empresas de médio e grande porte
                            a oferecer atendimento e enviar notificações importantes aos clientes.
                            Saima mais sobre a <a>API do WhatsApp Business</a>
                        </p>
                    </div>
                    <img alt="cellImg" src={phoneBlock}/>
                </div>
                <div className=" right-block block-position">
                    <span className="circleImg">
                        <img src={hello}/>
                    </span>
                    <div className="right-block-text">
                        
                        <h4>PROTEGIDO COM A CRIPTOGRAFIA DE PONTA A PONTA</h4>
                        <h1>Segurança padrão</h1>

                        <p>
                            Alguns de seus momentos mais importantes são compartilhados
                            no WhatsApp. Por essa razão, implementamos a criptografia de ponta a ponta 
                            nas últimas versões do nosso aplicativo. Com a proteção da criptografia
                            de ponta a ponta, suas mensagens e chamadas permanecem seguras, e somente
                            você e a pessoa com quem você está se comunicando conseguem ler ou ouví-las.
                            Ninguém mais conseguirá, nem mesmo o WhatsApp.
                        </p>
                    </div>                                  
                </div>
            </section>
            <section>
                <a className="btn-recursos">Ver Recursos</a>
            </section>
            <Footer/>
        </main>
    )
}

export default Main
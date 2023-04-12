import "./Banner.css";

const Banner = () => {
    return (
        <header className="banner">
            <div>
                <div className="contatos">
                    <nav>
                        <ul>
                            <li>< a href="#"> <img src="/imagens/header/whatsapp.png" alt="Whatsapp" /> </a></li>
                            <li>< a href="https://www.instagram.com/ideiando_f/"> <img src="/imagens/header/instagram.png" alt="Instagram" /> </a></li>
                            <li>< a href="#"> <img src="/imagens/header/email.png" alt="Email" /> </a></li>
                        </ul>
                    </nav>
                </div>
                <div className="logo">
                    <img src="/imagens/header/logo_banner.jpeg" alt="Logo do Ideiando - Papelaria Personalizada" />
                </div>
                <div className="login-compra">
                    <nav>
                        <ul>
                            <li>< a href="#"> <img src="/imagens/header/usuario.png" alt="Login" /> </a></li>
                            <li>Olá, Fernanda</li>
                            <div class="linha-vertical" />
                            <li>
                                <a href="#"> <img src="/imagens/header/carrinho-de-compras.png" alt="Carrinho de Compras" />
                                </a>
                            </li>
                            <li>
                                <div class="circle">
                                    <span>5</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Banner
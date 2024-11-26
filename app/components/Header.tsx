export default function Header() {
    return (
        <header id="masthead" className="header prt-header-style-01">
            <div id="site-header-menu" className="site-header-menu" style={{ backgroundColor: '#060616'}}>
                <div className="site-header-menu-inner prt-stickable-header">
                    <div className="container-fluid">
                        <div className="row header-row">
                            <div className="col-lg-12 p-0">
                                <div className="site-navigation d-flex align-items-center justify-content-between">
                                    <div className="site-branding-wrap">
                                        <div className="site-branding">
                                            <h1><a className="home-link" href="/" title="Fablio" rel="home">
                                                <img id="logo-img" height={30} width={200}
                                                     className="img-fluid auto_size" src="/images/controlist-logo.png"
                                                     alt="logo-img"/>
                                            </a></h1>
                                        </div>
                                    </div>
                                    <div className="sitemenu-main d-flex align-items-center justify-content-between">
                                        <div className="menu-link">
                                            <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                                    <span className="menubar-box">
                                                        <span className="menubar-inner"></span>
                                                    </span>
                                            </div>
                                            <nav className="main-menu menu-mobile" id="menu">
                                                <ul className="menu">
                                                    <li className="mega-menu-item"><a
                                                        href="/">Anasayfa</a></li>
                                                    <li className="mega-menu-item">
                                                        <a href="/hakkimizda" className="mega-menu-link">Hakkımızda</a>
                                                    </li>
                                                    <li className="mega-menu-item">
                                                        <a href="#" className="mega-menu-link">Hizmetlerimiz</a>
                                                        <ul className="mega-submenu">
                                                            <li><a href="/hizmetlerimiz/kalite-kontrol-servisi">Kalite Kontrol Servisi</a></li>
                                                            <li><a href="/hizmetlerimiz/acente-servisi">Acente Servisi</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-item">
                                                        <a href="/blog" className="mega-menu-link">Blog</a>
                                                    </li>
                                                    <li className="mega-menu-item"><a href="/iletisim">İletişim</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header_extra d-flex align-items-center">
                                            <div className="prt-contact-link d-flex text-align-center">
                                                <div className="prt-contact-link-icon">
                                                    <i className="flaticon flaticon-email-2"></i>
                                                </div>
                                                <div>
                                                    <a href="tel:+902124654099" className="hotline-link"> +90 (212) 465 40 99</a><br/>
                                                    <a href="mailto:info@example.com"
                                                       className="hotline-link"> levent@control-ist.com</a>
                                                </div>

                                            </div>
                                            <div className="header-btn">
                                                <a className="prt-btn prt-btn-size-md prt-btn-shape-rounded prt-btn-style-border prt-btn-color-white"
                                                   href="/iletisim">Bize Ulaş</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
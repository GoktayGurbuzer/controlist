export default function Footer() {
    return (
        <>
            <footer className="footer widget-footer bg-base-black overflow-hidden clearfix">
                <div className="prt-row-wrapper-bg-layer prt-bg-layer position-relative"></div>
                <div className="first-footer bg-base-black">
                    <div className="container">
                        <div className="row prt-vertical_sep style4">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="widget widget_text widget_text-wrap d-flex justify-content-between ">
                                    <div className="first-footer-desc d-flex overflow-hidden">
                                        <h2>Kalite Kontrol ve Tedarik Çözümlerinde Uzmanız</h2>
                                        <img width="39" height="34" className="img-fluid"
                                             src="/images/foooter-mail-img.png"
                                             alt="image"/>
                                    </div>
                                    <div className="footer-btn">
                                        <a className="prt-btn prt-btn-size-md prt-btn-shape-rounded prt-btn-style-border prt-btn-color-white"
                                           href="/iletisim">İletişime Geç</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-footer bg-base-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="widget widget_text footer-widget-box">
                                    <h3 className="widget-title-h3">Hızlı Menü</h3>
                                    <ul className="menu-footer-link">
                                        <li><a href="/">Anasayfa</a></li>
                                        <li><a href="/hakkimizda">Hakkımızda</a></li>
                                        <li><a href="/hizmetlerimiz/kalite-kontrol-servisi">Kalite Kontrol Servisi</a></li>
                                        <li><a href="/hizmetlerimiz/acente-servisi">Acente Servisi</a></li>
                                        <li><a href="/blog">Haberler</a></li>
                                        <li><a href="/iletisim">İletişim</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="widget widget_text footer-widget-box">
                                    <h3 className="widget-title-h3">Hizmetler</h3>
                                    <ul className="menu-footer-link">
                                        <li><a href="/hizmetlerimiz/kalite-kontrol-servisi/ara-kontrol" target="_blank"
                                               className="footer-social-icons-link">Ara Kontrol</a></li>
                                        <li><a href="/hizmetlerimiz/kalite-kontrol-servisi/son-kontrol" target="_blank"
                                               className="footer-social-icons-link">Son Kontrol</a></li>
                                        <li><a href="/hizmetlerimiz/kalite-kontrol-servisi/denetleme-hizmetleri" target="_blank"
                                               className="footer-social-icons-link">Denetleme Hizmetleri</a></li>
                                        <li><a href="/hizmetlerimiz/kalite-kontrol-servisi/uretici-egitimi" target="_blank"
                                               className="footer-social-icons-link">Üretici Eğitimi</a></li>
                                        <li><a href="/hizmetlerimiz/kalite-kontrol-servisi/lojistik-compliance-servisleri" target="_blank"
                                               className="footer-social-icons-link">Lojistik Compliance Servisleri</a></li>
                                        <li><a href="/hizmetlerimiz/acente-servisi/kaynak-yonetimi" target="_blank"
                                               className="footer-social-icons-link">Kaynak Yönetimi</a></li>
                                        <li><a href="/hizmetlerimiz/acente-servisi/siparis-yonetimi" target="_blank"
                                               className="footer-social-icons-link">Sipariş Yönetimi</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 col-12">
                                <div className="widget widget_text footer-widget-box">
                                    <h3 className="widget-title-h3">Güncellemeler için buradan kaydolun</h3>
                                    <form id="subscribe-form" className="newsletter-form" action="#"
                                          data-mailchimp="true">
                                        <div className="mailchimp-inputbox clearfix" id="subscribe-content">
                                            <div className="prt-contact-link-icon d-flex">
                                                <i className="flaticon flaticon-email-1"></i>
                                                <p><input type="email" name="email" placeholder="E-posta adresinizi girin" required/>
                                                </p>
                                            </div>
                                            <a href="mailto:info@control-ist.com"
                                               className="hotline-link"> info@control-ist.com</a><br/>
                                            <a href="tel:+902124654099" className="hotline-link1"> +90 212 465 40 99</a>
                                            <p>
                                                <button className="submit" type="submit" aria-label="name">
                                                    <span>Abone Ol</span><i className="icon-right"></i></button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="widget widget_text footer-widget-box">
                                    <h3 className="widget-title-h3">Güncel Haberler</h3>
                                    <div className="footer-desc d-flex">
                                        <div className="footer-img">
                                            <img width="120" height="82" className="img-fluid  w-auto"
                                                 src="/images/footer-img-01.jpg" loading="lazy" alt="image"/>
                                        </div>
                                        <div className="widget widget_text-content footer-widget-box">
                                            <h3><a href="blog-detail.html">Global kalite standartlarında son yenilikler ve uygulamalar</a></h3>
                                            <p>Kasım 15, 2024</p>
                                        </div>
                                    </div>
                                    <div className="footer-desc d-flex">
                                        <div className="footer-img">
                                            <img width="120" height="82" className="img-fluid  w-auto"
                                                 src="/images/footer-img-02.jpg" loading="lazy" alt="image"/>
                                        </div>
                                        <div className="widget widget_text-content footer-widget-box">
                                            <h3><a href="blog-detail.html">Etkili tedarik zinciri yönetimi için ipuçları</a></h3>
                                            <p>Mart 13, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer bottom-footer-border  bg-base-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright">
                                    <div className="cpy-text">
                                        <p className="mb-0">Copyright © 2024 Controlist. Tüm hakları saklıdır. Powered by <a target="_blank"
                                                                           href="https://ketcap.com">Ketçap Agency</a></p>
                                    </div>
                                    <ul className="prt-list footer-nav-menu">
                                        <li><a href="#">Şartlar ve koşullar</a></li>
                                        <li><a href="#">Gizlilik Politikası</a></li>
                                        <li><a href="#">Destek</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a id="totop" href="#top">
                <i className="icon-angle-up"></i>
            </a>
        </>
    );
}
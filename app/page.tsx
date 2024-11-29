import Image from "next/image";

export default function Home() {
  return (
      <>
        <div className="main-box">
          <section className="prt-row hero-section clearfix">
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-duration="1400">
                <div className="col-lg-12">
                  <div className="hero-content-wrap text-center">
                    <div className="hero-title">
                      <h2>Kalite Kontrol <img height={110} width={322} className="img-fluid border-rad_50"
                                           src="/images/banner-single-img.png" alt="image"/> <br/> Bizim Önceliğimiz!
                      </h2>
                    </div>
                    <div className="hero-desc d-flex .res-1199-pl-15">
                      <div className="hero-btn">
                        <a href="/hizmetlerimiz/kalite-kontrol-servisi"> Keşfedin</a>
                      </div>
                      <div className="hero-text">
                        <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2);" }}>Modern üretim süreçleri ve sürdürülebilir çözümlerle müşterilerimize üstün kalite kontrol hizmetleri sunuyoruz. Tekstil sektöründe global standartlara uygun denetim ve tedarik zinciri yönetimi ile yanınızdayız.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="site-main">
          <section className="prt-row about-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="pre-title" data-aos="fade-up" data-aos-duration="1400">
                    <span>Tekstil Endüstrisinde</span>
                  </div>
                  <div className="section-title">
                    <div className="title-heading" data-aos="fade-up" data-aos-duration="1400">
                      <h2 className="title">Dinamik ve Güvenilir Çözümler</h2>
                    </div>
                  </div>
                  <div className="prt-about-content border-rad_20 mt-40">
                    <div className="prt-about-content-wrap" data-aos="fade-up" data-aos-duration="1400">
                      <h3>20+ Yıllık Deneyim</h3>
                      <p>Tekstil sektöründeki 20 yılı aşkın tecrübemizle, müşterilerimizin kalite kontrol ihtiyaçlarına yenilikçi ve sürdürülebilir çözümler sunuyoruz.</p>
                    </div>
                    <div className="prt-about-content-wrap" data-aos="fade-up" data-aos-duration="1400">
                      <h3>1500+ Tamamlanmış Danışmanlık</h3>
                      <p>Her biri farklı zorluklar içeren 1500'den fazla projede, global ve yerel müşterilerimize özel çözümler ürettik.</p>
                    </div>
                    <div className="prt-about-content-wrap" data-aos="fade-up" data-aos-duration="1400">
                      <h3>Sektör Lideri Çözümlerle Yanınızdayız</h3>
                      <p> Tecrübemiz, geniş proje portföyümüz ve güçlü ekibimizle sektördeki öncü markalara kaliteli ve sürdürülebilir hizmetler sunuyoruz.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="prt-bg prt-col-bgimage-yes col-bg-img-one border-rad_20 ml-15 res-991-ml-0">
                    <div className="prt-col-wrapper-bg-layer prt-bg-layer border-rad_20"></div>
                    <div className="layer-content"></div>
                  </div>
                  <img className="img-fluid prt-equal-height-image w-100 position-relative"
                       src="/images/bg-image/col-bgimage-1.jpg" alt="bg-image"/>
                </div>
              </div>
            </div>
          </section>

          <section className="prt-row  prt-bg bg-base-dark service-section clearfix">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="pre-title text-center" data-aos="fade-up" data-aos-duration="1400">
                    <span>Hizmetlerimiz</span>
                  </div>
                  <div className="section-title title-style-center_text">
                    <div className="title-heading" data-aos="fade-up" data-aos-duration="1400">
                      <h2 className="title">Profesyonel Hizmetlerimiz</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="service-box">
                    <ul className="img-box-content">
                      <li className="img-box-wrap"
                          style={{backgroundColor: '#BEBFC5', borderRadius: '10px', marginBottom: '10px'}}>
                        <div className="service-img">
                          <img height={618} width={673} className="img-fluid" src="/images/services/service-img-01.jpg"
                               alt="image"/>
                        </div>
                        <div className="img-box-heading-content">
                          <div className="img-box-heading">
                            <h4 className="img-box-title">
                              <a className="more-link" href="/hizmetlerimiz/kalite-kontrol-servisi">Kalite Kontrol
                                Servisi</a>
                            </h4>
                          </div>
                          <div className="img-box-desc">
                            <div className="content-wrapper">
                              <p>Ürünlerinizin üretim sürecinden teslimatına kadar kalite standartlarına uygunluğunu
                                denetliyoruz. Modern ekipmanlarımız ve deneyimli uzmanlarımızla, üretim süreçlerinizi
                                daha güvenilir ve verimli hale getiriyoruz.</p>
                            </div>
                            <div className="service-btn">
                              <div className="img-box-btn">
                                <a href="/hizmetlerimiz/kalite-kontrol-servisi"></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="service-box">
                    <ul className="img-box-content">
                      <li className="img-box-wrap" style={{backgroundColor: '#BEBFC5', borderRadius: '10px'}}>
                        <div className="service-img">
                          <img height={618} width={673} className="img-fluid" src="/images/single-img-01.jpg"
                               alt="image"/>
                        </div>
                        <div className="img-box-heading-content">
                          <div className="img-box-heading">
                            <h4 className="img-box-title">
                              <a className="more-link" href="/hizmetlerimiz/acente-servisi">Acente Servisi</a>
                            </h4>
                          </div>
                          <div className="img-box-desc">
                            <div className="content-wrapper">
                              <p>Tedarik zinciri yönetiminde güvenilir bir çözüm ortağı arıyorsanız, doğru yerdesiniz.
                                İhtiyaçlarınıza özel lojistik çözümleri ve profesyonel destek hizmetleri sunarak iş
                                süreçlerinizi kolaylaştırıyoruz.</p>
                            </div>
                            <div className="img-box-btn">
                              <a href="/hizmetlerimiz/acente-servisi"></a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="prt-row fid-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pre-title" data-aos="fade-up" data-aos-duration="1400">
                    <span>Neden Controlist?</span>
                  </div>
                  <div className="section-title">
                    <div className="title-heading" data-aos="fade-up" data-aos-duration="1400">
                      <h2 className="title">Bizi Neden Seçmelisiniz?</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0 row-equal-height" data-aos="fade-up" data-aos-duration="1400">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="prt-fid inside style1 fid-count text-center box-1">
                    <div className="prt-fid-contents">
                      <h3 className="prt-fid-inner">
                        <span className="count">70% Strateji</span></h3>
                      <p className="prt-fid-title"> Doğru Strateji ile Başarı</p>
                      <h4 className="prt-fid-desc">Controlist, tekstil sektöründe uzun vadeli başarıyı destekleyen
                        yenilikçi stratejiler sunar. Pazar dinamiklerine uyum sağlama yeteneğimiz, müşterilerimize
                        sürdürülebilir çözümler sağlar.</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="prt-fid inside style1 text-center box-2">
                    <div className="prt-fid-contents">
                      <h3 className="prt-fid-inner">
                        <span className="count">96% Güven</span>
                      </h3>
                      <p className="prt-fid-title">Güvenilir İş Ortağınız</p>
                      <h4 className="prt-fid-desc">Müşterilerimizle güçlü ilişkiler kuruyor ve ihtiyaçlarına uygun çözümler sunuyoruz. Controlist'in uzman kadrosu, her adımda güvenilir bir ortak olarak yanınızda.</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="prt-fid inside style1 text-center box-3">
                    <div className="prt-fid-contents">
                      <h3 className="prt-fid-inner">
                        <span className="count">92% Bildirimler</span>
                      </h3>
                      <p className="prt-fid-title">Müşteri Memnuniyeti Odaklı</p>
                      <h4 className="prt-fid-desc">Controlist, kalite kontrol süreçlerindeki başarısıyla müşterilerinden yüksek memnuniyet oranları alır. Dayanıklılık, renk uyumu ve doku kalitesi gibi unsurlarda sağlanan mükemmeliyet, markamızın temelidir.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="prt-row padding_zero-section overflow-hidden clearfix">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 p-0">
                  <div className="marquee-block overflow-hidden">
                    <div className="marquee">
                      <div className="marquee-content">
                        <div className="marquee-text">Malzeme Kontrolü </div>
                        <div className="marquee-text">Üretim Süreci Denetimi </div>
                        <div className="marquee-text">Renk Uyumu Testi </div>
                        <div className="marquee-text">Doku ve Dayanıklılık Testi </div>
                        <div className="marquee-text">Nihai Ürün Kontrolü </div>
                        <div className="marquee-text">Ambalaj Kalite Kontrolü </div>
                        <div className="marquee-text">Boyut ve Ölçü Kontrolü </div>
                        <div className="marquee-text">Fiziksel Dayanıklılık Testi </div>
                        <div className="marquee-text">Görsel İnceleme </div>
                        <div className="marquee-text">Çevresel Uyum Denetimi </div>
                        <div className="marquee-text">Sertifikasyon Süreç Kontrolü </div>
                        <div className="marquee-text">Numune İncelemesi </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" prt-row prt-bg bg-base-black prt-bgimage-yes bg-img1 about2-section clearfix">
            <div className="prt-row-wrapper-bg-layer prt-bg-layer bg-base-black"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pre-title text-center" data-aos="fade-up" data-aos-duration="1400">
                    <span>Yaklaşım</span>
                  </div>
                  <div className="about2-content-wrap text-center" data-aos="fade-up" data-aos-duration="1400">
                    <div className="about2-title">
                      <h2>Birlikte, <img height="84" width="84" className="img-fluid" src="/images/about2-img-01.png"
                                          alt="image"/> Daha Güçlü <img height="75" width="220"
                                                                                       className="img-fluid border-rad_50"
                                                                                       src="/images/banner-single-img.png"
                                                                                       alt="image"/> Özel Süreçlerimizle Çözümler Sunuyoruz <img height="75" width="220" className="img-fluid border-rad_50"
                                        src="/images/about2-img-02.png" alt="image"/></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="prt-row blog-section01 clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pre-title" data-aos="fade-up" data-aos-duration="1400">
                    <span>Başarılarımız </span>
                  </div>
                  <div className="section-title">
                    <div className="title-heading" data-aos="fade-up" data-aos-duration="1400">
                      <h2 className="title"> Başarılarımızla Gurur Duyuyoruz</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6 col-12">
                  <div className="featured-imagebox" data-aos="fade-up" data-aos-duration="1400">
                    <div className="featured-post-thumbnail">
                      <img width="136" height="132" className="img-fluid w-auto" src="/images/award.png" loading="lazy"
                           alt="image"/>
                    </div>
                    <div className="featured-post-content">
                      <h3 className="catagory-text">Sektör Liderliği Ödülü</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6 col-12">
                  <div className="featured-imagebox" data-aos="fade-up" data-aos-duration="1400">
                    <div className="featured-post-thumbnail">
                      <img width="136" height="132" className="img-fluid w-auto" src="/images/award.png" loading="lazy"
                           alt="image"/>
                    </div>
                    <div className="featured-post-content">
                      <h3 className="catagory-text">Müşteri Memnuniyeti Başarısı</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6 col-12">
                  <div className="featured-imagebox" data-aos="fade-up" data-aos-duration="1400">
                    <div className="featured-post-thumbnail">
                      <img width="136" height="132" className="img-fluid w-auto" src="/images/award.png" loading="lazy"
                           alt="image"/>
                    </div>
                    <div className="featured-post-content">
                      <h3 className="catagory-text">Yenilikçi Süreçler Ödülü</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6 col-12">
                  <div className="featured-imagebox" data-aos="fade-up" data-aos-duration="1400">
                    <div className="featured-post-thumbnail">
                      <img width="136" height="132" className="img-fluid w-auto" src="/images/award.png" loading="lazy"
                           alt="image"/>
                    </div>
                    <div className="featured-post-content">
                      <h3 className="catagory-text">Sürdürülebilirlik Başarısı</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
  );
}

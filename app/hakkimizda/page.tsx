"use client";

import dynamic from "next/dynamic";
import React from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

type SliderProps = {
    children?: React.ReactNode; // Çocuk bileşenler
    className?: string;
    slidesToShow: number;
    slidesToScroll: number;
    arrows: boolean;
    dots: boolean;
    autoplay: boolean;
    infinite: boolean;
    vertical: boolean;
    responsive: Array<{
        breakpoint: number;
        settings: {
            slidesToShow: number;
        };
    }>;
};

export default function Hakkimizda() {
    const sliderSettings: SliderProps = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        vertical: true,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 778, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="site-main">
            <div className="prt-page-title-row bg-layer">
                <div className="prt-page-title-row-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-auto">
                                <div className="prt-page-title-row-heading">
                                    <div className="about-page-title">
                                        <div className="page-title-heading" data-aos="fade-up" data-aos-duration="1400">
                                            <h2 className="title">Kaliteyi Öncelik Edinen <br/>Güvenilir Çözüm Ortağınız</h2>
                                        </div>
                                    </div>
                                    <div className="page-title-desc" data-aos="fade-up" data-aos-duration="1400">

                                        <div className="prt-page-title-row-inner-heading">
                                            <h3 className="pre-title">Bizimle iletişime geçin</h3>
                                        </div>
                                        <div className="section-title-img">
                                            <img className="img-fluid" src="/images/arrow.png" alt="bg-image"/>
                                            <a href="tel:+902124654099">+90 (212) 465 40 99</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="prt-row about-us-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto ">
                            <div className="section-title title-style-center_text">
                                <div className="title-heading" data-aos="fade-up" data-aos-duration="1400">
                                    <h2 className="title">2012'den Bu Yana Tekstil Sektöründe Güvenilir Ortağınız</h2>
                                </div>
                            </div>
                                <div className="team-member-desc">
                                    <p>
                                        Controlist, 2012 yılında Esra Çağlarer tarafından kurulan bağımsız ve müşteri odaklı
                                        bir <strong>Kalite Kontrol Yönetimi</strong> ve <strong>Tedarik
                                        Çözümleri</strong> şirketidir. Esra, Almanya’nın Mönchengladbach kentindeki
                                        ünlü <strong>Fachhochschule Niederrhein Üniversitesi</strong>'nde Tekstil
                                        Mühendisliği okuduğu dönemde, kalite kontrol yönetiminde en iyiyi sunma hedefiyle
                                        Controlist konseptini geliştirdi.
                                    </p>
                                    <p>
                                        Kuruluşundan bu yana, Controlist; Avrupa’nın önde gelen moda markalarıyla çalışmış,
                                        oldukça deneyimli bir ekip kurarak sektörde fark yaratmıştır. Müşteri talepleri
                                        doğrultusunda, sadece kalite kontrol hizmetleriyle sınırlı kalmayıp global ve yerli
                                        tekstil markalarına Kaynak <strong>Yönetimi Çözümleri</strong> de sunmaya
                                        başlamıştır.
                                    </p>
                                    <p>
                                        Merkezimiz İstanbul, Türkiye’de yer almakla birlikte, global partnerlerimize ve
                                        müşterilerimize geniş bir hizmet yelpazesi sunmaktayız. Çalışma felsefemiz, her
                                        müşterimizin taleplerini ve çalışma sistemini dikkatlice anlayarak, <strong>kalite
                                        standartlarını en üst düzeyde uygulamaktır.</strong>
                                    </p>
                                    <p>
                                        <strong>Taahhütlerimiz</strong> <br/>
                                        Global partnerlerimize ve müşterilerimize şu değerleri taahhüt ediyoruz:
                                    </p>
                                    <ul className="team-member-feac">
                                        <li><i aria-hidden="true" className="fas fa-check"></i><strong>Eşsiz Müşteri
                                            Hizmetleri:</strong> Her detayda özenli ve müşteri odaklı yaklaşım.
                                        </li>
                                        <li><i aria-hidden="true" className="fas fa-check"></i><strong>Marka Felsefesine
                                            Uyumlu
                                            Çözümler:</strong> Kalite standartlarınızı yansıtan özel çözümler.
                                        </li>
                                        <li><i aria-hidden="true" className="fas fa-check"></i><strong>Uygun Maliyetli
                                            Hizmetler:</strong> Hizmet kalitesini etkilemeyen, bütçe dostu çözümler.
                                        </li>
                                        <li><i aria-hidden="true" className="fas fa-check"></i><strong>Sürdürülebilirlik ve
                                            Çevre Odaklılık:</strong> Daha çevreci ve sürdürülebilir iş süreçleri.
                                        </li>
                                    </ul>
                                    <p>
                                        Controlist olarak, kaliteyi yalnızca bir standart değil, aynı zamanda bir değer
                                        olarak görüyoruz. <strong>Müşterilerimizin başarısını kendi başarımız olarak kabul
                                        ediyor</strong> ve her projede bu anlayışla hareket ediyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row row-equal-height">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="featured-icon-box icon-align-top-content style4 box-1" data-aos="fade-up"
                                 data-aos-duration="800">
                                <div className="featured-content ">
                                    <div className="featured-title">
                                        <h3>350k+</h3>
                                    </div>
                                </div>

                                <div className="featured-detail">
                                    <div className="featured-desc">
                                        <h4>Mutlu Müşteri</h4>
                                        <p>Global tekstil markalarına kalite kontrol ve tedarik çözümleri sunarak, müşteri memnuniyetinde fark yaratıyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="featured-icon-box icon-align-top-content style4 box-2" data-aos="fade-up"
                                 data-aos-duration="800">
                                <div className="featured-content text-left">
                                    <div className="featured-title">
                                        <h3><i aria-hidden="true" className="kw_fablio flaticon-textiles"></i></h3>
                                    </div>
                                </div>
                                <div className="featured-detail">
                                    <div className="featured-desc">
                                        <h4>En Kaliteli Kumaş Malzemeleri</h4>
                                        <p>Yüksek standartlara uygun kumaş denetimleri ve sürdürülebilir üretim süreçleriyle sektöre liderlik ediyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="featured-icon-box icon-align-top-content style4 box-3" data-aos="fade-up"
                                 data-aos-duration="800">
                                <div className="featured-content text-left">
                                    <div className="featured-title">
                                        <h3>100%</h3>
                                    </div>
                                </div>

                                <div className="featured-detail">
                                    <div className="featured-desc">
                                        <h4>%100 Adanmışlık </h4>
                                        <p>Tecrübeli ekibimizle her projeye tam bağlılık göstererek müşteri odaklı çözümler sunuyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="prt-row bg-base-dark prt-bg testimonial2-section clearfix">
                <div className="container">
                    <div className="row" data-aos="fade-up" data-aos-duration="1400">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <div className="title-heading">
                                    <h2 className="title">Tekstil Sektöründe Güvenilir Lideriniz</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-12">
                            <div className="res-991-ml-15 res-991-mr-15 res-991-mt-30">
                                <div className="row g-0 overflow-hidden bg-base-dark border-rad_15">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="pl-45  res-1199-pl-0">
                                            <img width={650} height={561} className="img-fluid"
                                                 src="/images/single-img-03.jpg" alt="Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="pattern-img bg-base-dark pt-30">
                                            <div className="layer-content">
                                                <Slider {...(sliderSettings as unknown as any)} className="vertical_slider testimonial">
                                                    <div className="featured-content-wrapper featured-content">
                                                        <div className="featured-title d-flex">
                                                            <i className="fas fa-check-circle"></i>
                                                            <h3>Teknolojik Danışmanlık</h3>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>
                                                                Üretim süreçlerinizi iyileştirmek ve en son teknolojileri uygulamak için uzman çözümler sunuyoruz.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content-wrapper featured-content">
                                                        <div className="featured-title d-flex">
                                                            <i className="fas fa-check-circle"></i>
                                                            <h3>Proje Yönetimi</h3>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>
                                                                Proje süreçlerinizi planlama, uygulama ve kontrol etme aşamalarında profesyonel destek sağlıyoruz.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content-wrapper featured-content">
                                                        <div className="featured-title d-flex">
                                                            <i className="fas fa-check-circle"></i>
                                                            <h3>Tedarik Zinciri Yönetimi</h3>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>
                                                                Tedarik zincirinizi optimize etmek, maliyetleri düşürmek ve süreçleri hızlandırmak için kapsamlı çözümler sunuyoruz.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content-wrapper featured-content">
                                                        <div className="featured-title d-flex">
                                                            <i className="fas fa-check-circle"></i>
                                                            <h3>Sürdürülebilirlik Danışmanlığı</h3>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>
                                                                Çevresel etkilerinizi azaltacak, sürdürülebilir üretim ve tedarik süreçleri için stratejik rehberlik sağlıyoruz.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content-wrapper featured-content">
                                                        <div className="featured-title d-flex">
                                                            <i className="fas fa-check-circle"></i>
                                                            <h3>Kalite Güvence Süreçleri</h3>
                                                        </div>
                                                        <div className="featured-desc">
                                                            <p>
                                                                Üretimden teslimata kadar tüm aşamalarda kalite standartlarını sağlamak için profesyonel denetim hizmetleri sunuyoruz.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
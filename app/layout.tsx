import type { Metadata } from "next";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Controlist | Kalite Kontrol ve Tedarik Çözümleri",
  description: "Controlist, tekstil sektöründe kalite kontrol yönetimi ve tedarik çözümleri sunan lider bir şirkettir. Deneyimli ekibimizle global ve yerel markalara sürdürülebilir, müşteri odaklı hizmetler sağlıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
    <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="/css/swiper-bundle.min.css"/>
        <link rel="stylesheet" type="text/css" href="/css/animate.css"/>
        <link rel="stylesheet" type="text/css" href="/css/all.min.css"/>
        <link rel="stylesheet" type="text/css" href="/css/fontello.css"/>
        <link rel="stylesheet" type="text/css" href="/css/flaticon.css"/>
        <link rel="stylesheet" type="text/css" href="/css/themify-icons.css"/>
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.css"/>
        <link rel="stylesheet" type="text/css" href="/css/aos.css"/>
        <link rel="stylesheet" type="text/css" href="/css/slick.css"/>
        <link rel="stylesheet" type="text/css" href="/css/prettyPhoto.css"/>
        <link rel="stylesheet" type="text/css" href="/css/shortcodes.css"/>
        <link rel="stylesheet" type="text/css" href="/css/main.css"/>
        <link rel="stylesheet" type="text/css" href="/css/megamenu.css"/>
        <link rel="stylesheet" type="text/css" href="/css/responsive.css"/>
    </head>
    <body className="antialiased">
    <div className="page">
        <Header/>
        {children}
        <Footer/>
    </div>

    <script src="/js/jquery-3.7.1.min.js"></script>
    <script src="/js/jquery-migrate-3.4.1.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/nouislider.min.js"></script>
    <script src="/js/swiper-bundle.min.js"></script>
    <script src="/js/Scrolltrigger.js"></script>
    <script src="/js/Splittext.js"></script>
    <script src="/js/cursor.js"></script>
    <script src="/js/gsap.min.js"></script>
    <script src="/js/jquery-validate.js"></script>
    <script src="/js/jquery.prettyPhoto.js"></script>
    <script src="/js/slick.min.js"></script>
    <script src="/js/jquery-waypoints.js"></script>
    <script src="/js/numinate.min.js"></script>
    <script src="/js/smoothscroll.js"></script>
    <script src="/js/imagesloaded.min.js"></script>
    <script src="/js/jquery-isotope.js"></script>
    <script src="/js/circle-progress.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/aos.js"></script>
    <script
        dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                AOS.init({
                  offset: 0,
                  duration: 400,
                  delay: 0,
                  once: true,
                });
              });
            `,
        }}
    ></script>

    </body>
    </html>
  );
}

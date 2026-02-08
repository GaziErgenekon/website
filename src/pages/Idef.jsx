import React, { useEffect, useState } from "react";
import { galleryImages } from "../constants";
import LightboxGallery from "../components/common/LightboxGallery";

const Idef = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    return (
        <div className="pt-32 min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Gallery Modal */}
            <LightboxGallery
                images={galleryImages}
                selectedIndex={selectedImageIndex}
                onClose={closeModal}
                onIndexChange={setSelectedImageIndex}
            />

            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold pb-4 sec-title text-gradient-br from-foreground to-foreground/20">
                        IDEF'25 Yolculuğumuz
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                        Uluslararası Savunma Sanayii Fuarı'ndaki teknoloji gösterimimiz ve sektör buluşmalarımızdan kareler.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-24 shadow-2xl border border-white/5 group">
                    <img
                        src="/oduller/idef_burkay.JPG"
                        alt="IDEF Standımız"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ergenekon Sahne'de</h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                            Dünyanın en prestijli savunma sanayi fuarlarından biri olan IDEF'25'te, yerli ve milli projelerimizi global katılımcılarla buluşturduk.
                        </p>
                    </div>
                </div>

                {/* What is IDEF? */}
                <div className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary border-l-4 border-primary pl-6">IDEF Nedir?</h2>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <p className="text-lg leading-relaxed text-foreground/80">
                                IDEF (Uluslararası Savunma Sanayii Fuarı), Türkiye'de düzenlenen ve dünyanın en büyük savunma sanayi fuarlarından biri olan prestijli bir organizasyondur.
                                Türk Silahlı Kuvvetlerini Güçlendirme Vakfı yönetim ve sorumluluğunda gerçekleştirilen fuar;
                                savunma, güvenlik, denizcilik, havacılık ve uzay sanayii alanlarında en son teknolojilerin sergilendiği küresel bir buluşma noktasıdır.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-white/5 relative">
                        <img src="/logolar/idef_logo.png" alt="IDEF Logo" className="w-full h-full object-contain p-8 bg-white" />
                    </div>
                </div>

                {/* DOT Area Explanation */}
                <div className="mb-24 bg-gradient-to-r from-background via-white/5 to-background p-8 md:p-12 rounded-3xl border border-white/10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-block bg-primary/20 text-primary px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-4">
                            SAVUNMANIN GELECEĞİ
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold">DOT: Defenders of Tomorrow</h2>
                        <p className="text-xl text-foreground/70 leading-relaxed">
                            IDEF'25 kapsamında standımızı açtığımız <strong>Defenders of Tomorrow (DOT)</strong> alanı, savunma sanayiinin geleceğini şekillendirecek genç yeteneklere ve inovatif girişimlere ayrılmış özel bir bölümdür.
                            Geleceğin savunucuları olarak, burada projelerimizi sektör liderlerine, askeri heyetlere ve uluslararası yatırımcılara tanıtma fırsatı bulduk.
                        </p>
                    </div>
                </div>

                {/* Presentation Video Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-12">Sunumumuz & Tanıtım</h2>
                    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video relative group">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/BXOt_NbPr04"
                            title="IDEF'25 Sunumu"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>       </div>


                {/* External IDEF Profile Preview */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-8">Resmi Fuar Profilimiz</h2>
                    <p className="text-center text-foreground/60 mb-8">IDEF'25 Dijital Platformunda Ergenekon R&D Team</p>

                    <a
                        href="https://gaziergenekonarge.idef.com.tr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-[400px] border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative transform hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Background Image - Blurred version of a screenshot or just a relevant image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-sm opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                            style={{ backgroundImage: "url('/oduller/idef_burkay.JPG')" }}
                        ></div>
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6 p-8">
                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <img src="/logolar/idef_logo.png" alt="IDEF Logo" className="w-16 h-16 object-contain" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    IDEF'25 Dijital Standı
                                </h3>
                                <p className="text-gray-300 max-w-lg mx-auto text-lg">
                                    Ergenekon R&D Team'in resmi fuar profilini, ürünlerini ve detaylı bilgilerini IDEF dijital platformunda inceleyin.
                                </p>
                            </div>

                            <span className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold group-hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 mt-4">
                                Profili Ziyaret Et ↗
                            </span>
                        </div>
                    </a>
                </div>

                {/* Gallery Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-foreground/20"></span>
                        IDEF'25 Anı Galerisi
                        <span className="h-px w-12 bg-foreground/20"></span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {galleryImages.map((img, idx) => (
                            <div key={idx}
                                onClick={() => openModal(idx)}
                                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer border border-white/5 shadow-lg"
                            >
                                <img
                                    src={img}
                                    alt={`IDEF Moment ${idx + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-white text-sm font-bold tracking-wider uppercase border border-white/30 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                            Görüntüle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Idef;

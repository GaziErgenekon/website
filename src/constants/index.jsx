import {
  FaBrain,
  FaDraftingCompass,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { asset } from "../libs/utils";

// Yalnızca varlık (asset) alanlarını dağıtım tabanına göre öneklendirir.
// Rota yolları (link/to/slug), harici url/embed/linkedin değerleri ASLA
// dokunulmaz çünkü anahtar adları bu kümede değildir.
const ASSET_KEYS = new Set([
  "img",
  "image",
  "mainImage",
  "logo",
  "heroImage",
  "aboutLogo",
  "bgImage",
]);

function pa(value, key) {
  if (typeof value === "string") {
    return key && ASSET_KEYS.has(key) ? asset(value) : value;
  }
  if (Array.isArray(value)) {
    return value.map((v) => pa(v));
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const k in value) out[k] = pa(value[k], k);
    return out;
  }
  return value;
}

// Çevrilebilir alanlar { tr, en } biçimindedir; özel adlar (kişi, kurum,
// proje kod adları) düz string bırakılmıştır. tx() helper'ı ile okunur.

export const highlights = [
  {
    icon: FaRocket,
    title: { tr: "Ar-Ge ve İnovasyon", en: "R&D and Innovation" },
    desc: {
      tr: "Savunma sanayii ve kritik altyapılar için özgün, donanım-yazılım entegre çözümler geliştiriyoruz.",
      en: "Developing indigenous, hardware-software integrated solutions for the defense industry and critical infrastructures.",
    },
  },
  {
    icon: FaShieldAlt,
    title: { tr: "Haberleşme Güvenliği", en: "Communication Security" },
    desc: {
      tr: "Uydu sistemleri ve 5G ağlarında veri gizliliğini sağlayan kuantum dirençli algoritmalar tasarlıyoruz.",
      en: "Designing quantum-resistant algorithms ensuring data privacy in satellite systems and 5G networks.",
    },
  },
  {
    icon: FaBrain,
    title: { tr: "Otonom Sistemler & AI", en: "Autonomous Systems & AI" },
    desc: {
      tr: "Hava savunma sistemlerinde yüksek hassasiyetli hedef tespiti ve otonom takip yetenekleri üretiyoruz.",
      en: "Producing high-precision target detection and autonomous tracking capabilities in air defense systems.",
    },
  },
  {
    icon: FaDraftingCompass,
    title: { tr: "Sistem Entegrasyonu", en: "System Integration" },
    desc: {
      tr: "Kavramsal tasarımdan sahadaki testlere kadar tüm elektronik ve mekanik süreçleri yönetiyoruz.",
      en: "Managing all electronic and mechanical processes from conceptual design to field tests.",
    },
  },
];

export const stakeholders = pa([
  { name: "Gazi Üniversitesi", img: "/logolar/gazi_logo.jpg" },
  { name: "Gazisiber", img: "/logolar/gazisiber_logo.png" },
]);

export const sponsors = pa([
  { name: "Gazi Teknopark", img: "/logolar/teknopark_logo.png" },
]);

export const achievements = pa([
  {
    id: 1,
    year: "2025",
    title: {
      tr: "UDHAM Ar-Ge Fikir Yarışması",
      en: "UDHAM R&D Idea Competition",
    },
    desc: {
      tr: "T.C. Ulaştırma ve Altyapı Bakanlığı (UDHAM) tarafından düzenlenen '3. Ulaşan ve Erişen Türkiye 2053 Üniversiteler Arası Ar-Ge Fikir Yarışması' kapsamında, Ergenekon R&D Team olarak Haberleşme alanında büyük bir başarıya imza attık. 65 üniversiteden 200 projenin yarıştığı organizasyonda; 'KUANT-US: Kuantum Dirençli, Otonom ve Donanım Uyumlu Uydu Güvenliği Sistemi' başlıklı projemizle 'En Verimli' kategorisinde Mansiyon Ödülü’ne layık görüldük. Ulusal ölçekteki bu prestijli yarışmada, kuantum sonrası siber güvenlik ve uydu teknolojileri üzerine geliştirdiğimiz yenilikçi çözümümüzle üniversitemizi ve takımımızı başarıyla temsil ettik.",
      en: "Within the '3rd Reaching and Accessing Türkiye 2053 Inter-University R&D Idea Competition' organized by the Republic of Türkiye Ministry of Transport and Infrastructure (UDHAM), we achieved a major success in the field of Communications as Ergenekon R&D Team. In an event where 200 projects from 65 universities competed, our project 'KUANT-US: Quantum-Resistant, Autonomous and Hardware-Compatible Satellite Security System' was awarded an Honorable Mention in the 'Most Efficient' category. In this prestigious national competition, we successfully represented our university and team with our innovative solution on post-quantum cyber security and satellite technologies.",
    },
    mainImage: "/oduller/UDHAM_odul.jpeg",
    thumbnails: [
      {
        logo: "/logolar/gazi_logo.jpg",
        url: "https://tf-bm.gazi.edu.tr/view/news/301819/gazi-universitesi-ogrencilerinden-olusan-ergenekon-ekibine-udham-ar-ge-fikir-yarismasinda-mansiyon",
        title: "Gazi Üniversitesi",
      },
      {
        logo: "/logolar/udham_logo.png",
        url: "https://udham.uab.gov.tr/haberler/3-ar-ge-fikir-yarismasi-odulleri-sahiplerini-buldu",
        title: "UDHAM",
      },
    ],
  },
  {
    id: 2,
    year: "2025",
    title: { tr: "TEKNOFEST 5G Yarışması", en: "TEKNOFEST 5G Competition" },
    desc: {
      tr: "Turkcell sponsorluğunda düzenlenen TEKNOFEST 5G Konumlandırma Yarışması kapsamında geliştirdiğimiz KIZILYEL projesi ile yüksek hassasiyetli '5G Temelli Dış Mekan Tespit Algoritması ve Çözümü' mimarisini hayata geçirdik. 5G sinyal verilerini işleyerek konum doğruluğunu maksimize eden yerli yazılımımızla final aşamasında güçlü rakiplerimizi geride bırakarak Türkiye 5.'liği elde ettik. Geliştirdiğimiz mimarinin yenilikçi yaklaşımı sayesinde, yarışmanın prestij ödülü olan 'En Özgün Yazılım Ödülü'ne layık görüldük.",
      en: "Within the TEKNOFEST 5G Positioning Competition organized under Turkcell's sponsorship, we built our high-precision '5G-Based Outdoor Detection Algorithm and Solution' architecture with our KIZILYEL project. With our indigenous software that maximizes positioning accuracy by processing 5G signal data, we finished 5th in Türkiye in the final stage, leaving strong competitors behind. Thanks to the innovative approach of the architecture we developed, we were granted the competition's prestige award, the 'Most Original Software Award'.",
    },
    mainImage: "/oduller/5G_odul.jpg",
    thumbnails: [
      {
        logo: "/logolar/gazi_logo.jpg",
        url: "https://tf.gazi.edu.tr/view/news/301635/gazi-universitesi-ogrencilerinden-5g-konumlandirma-yarismasinda-en-ozgun-yazilim-odulu",
        title: "Gazi Üniversitesi",
      },
      {
        logo: "/logolar/turkcell_logo.png",
        url: "https://medya.turkcell.com.tr/bulletins/turkcell-ve-teknofestin-5g-konumlandirma-yarismasinin-final-etabi-tamamlandi/",
        title: "Turkcell",
      },
      {
        logo: "/logolar/teknofest_logo.png",
        url: "https://www.teknofest.org/tr/yarismalar/5g-yapay-zeka-ile-akilli-yol-guvenligi-yarismasi/",
        title: "Teknofest",
      },
    ],
  },
  {
    id: 3,
    year: "2024",
    title: { tr: "Gelişen Çağ Hackathonu", en: "Gelişen Çağ Hackathon" },
    desc: {
      tr: "Samsun Üniversitesi ve Samsun Avrupa Birliği Bilgi Merkezi tarafından ortaklaşa düzenlenen 'Gelişen Çağ Hackathonu' maratonunda, Ergenekon R&D Team olarak iki farklı dereceyle kürsüde yer aldık. 'Veri Gizliliği' ve 'Uzay-Havacılıkta Yeni Dönem' gibi stratejik temalarda gerçekleştirdiğimiz yoğun çalışmalar sonucunda, ekiplerimiz Türkiye 2.'liği ve 3.'lüğü ödüllerine layık görüldüler. Dijital güvenliğin kalesi olan veri gizliliği alanındaki yetkinliğimizi ve problem çözme becerilerimizi sergilediğimiz bu organizasyon; takımımızın inovatif teknoloji geliştirme ve hızlı prototipleme kabiliyetini bir kez daha kanıtlamıştır.",
      en: "In the 'Gelişen Çağ Hackathon' marathon co-organized by Samsun University and the Samsun European Union Information Center, we took the podium with two separate rankings as Ergenekon R&D Team. As a result of our intensive work on strategic themes such as 'Data Privacy' and 'A New Era in Space-Aviation', our teams were awarded 2nd and 3rd place in Türkiye. This event, where we demonstrated our competence in data privacy — the stronghold of digital security — and our problem-solving skills, once again proved our team's capability for innovative technology development and rapid prototyping.",
    },
    mainImage: "/oduller/SamsunHackathon_oduller.jpg",
    imageFit: "object-contain",
    thumbnails: [
      {
        logo: "/logolar/gazi_logo.jpg",
        url: "https://sosyalbilgileregitim.gazi.edu.tr/view/news/297116/teknoloji-fakultesi-ogrencilerimiz-hackathon-tematik-alan-odulu-kazandi",
        title: "Gazi Üniversitesi",
      },
      {
        logo: "/logolar/samsun_universitesi.png",
        url: "https://samsun.edu.tr/__trashed-2/",
        title: "Samsun Üniversitesi",
      },
    ],
  },
  {
    id: 4,
    year: "2025",
    title: { tr: "BURKAY Hava Savunma", en: "BURKAY Air Defense" },
    link: "/idef",
    desc: {
      tr: "TEKNOFEST Hava Savunma Sistemleri Yarışması kapsamında geliştirdiğimiz yerli ve milli hava savunma sistemi projemiz BURKAY; Yapay Zeka Destekli Hedef Tespiti ve Tam Otonom Lazer Güdüm kabiliyetleriyle donatılmıştır. Kritik Tasarım Raporu (KTR) sürecini başarıyla tamamlayan projemiz; ayrıca dünyanın en prestijli savunma sanayi fuarlarından biri olan IDEF'25 Uluslararası Savunma Sanayii Fuarı'na kabul edilmiştir. Fuar süresince açtığımız standımızda; geliştirdiğimiz çözümleri ve savunma teknolojileri vizyonumuzu uluslararası profesyonellere sunduk.",
      en: "BURKAY, our indigenous and national air defense system project developed within the TEKNOFEST Air Defense Systems Competition, is equipped with AI-Assisted Target Detection and Fully Autonomous Laser Guidance capabilities. Having successfully completed the Critical Design Report (CDR) process, our project was also accepted to IDEF'25 International Defense Industry Fair, one of the world's most prestigious defense industry fairs. At our booth during the fair, we presented our solutions and our defense technology vision to international professionals.",
    },
    mainImage: "/oduller/idef_burkay.JPG",
    thumbnails: [
      {
        logo: "/logolar/gazi_logo.jpg",
        url: "https://tf-bm.gazi.edu.tr/view/event/290405/1/gazi-universitesi-teknoloji-fakultesi-bilgisayar-muhendisligi-bolumu-ergenekon-takimi-etkinligi",
        title: "Gazi Üniversitesi",
      },
      {
        logo: "/logolar/idef_logo.png",
        url: "https://gaziergenekonarge.idef.com.tr/",
        title: "IDEF",
      },
    ],
  },
]);

// Haberler / Duyurular — en yeni en üstte. (İçerik taslak; gözden geçirilebilir.)
export const news = [
  {
    id: 1,
    date: { tr: "Ağustos 2025", en: "August 2025" },
    tag: { tr: "Ödül", en: "Award" },
    title: {
      tr: "5G Konumlandırma Yarışması'nda En Özgün Yazılım Ödülü",
      en: "Most Original Software Award at the 5G Positioning Competition",
    },
    summary: {
      tr: "Turkcell ve TEKNOFEST iş birliğinde düzenlenen yarışmada KIZILYEL projemizle final etabında Türkiye 5.'liğini elde ettik ve 'En Özgün Yazılım' ödülüne layık görüldük.",
      en: "In the competition organized in collaboration with Turkcell and TEKNOFEST, we finished 5th in Türkiye in the final stage with our KIZILYEL project and were granted the 'Most Original Software' award.",
    },
    to: "/5g-konumlandirma",
    cta: { tr: "Detayları Gör", en: "View Details" },
  },
  {
    id: 2,
    date: { tr: "2025", en: "2025" },
    tag: { tr: "Faaliyet", en: "Activity" },
    title: {
      tr: "IDEF'25 Uluslararası Savunma Sanayii Fuarı'ndaydık",
      en: "We Were at the IDEF'25 International Defense Industry Fair",
    },
    summary: {
      tr: "Dünyanın en prestijli savunma sanayi fuarlarından biri olan IDEF'25'te standımızı açtık; yerli ve milli projelerimizi global katılımcılarla buluşturduk.",
      en: "We set up our booth at IDEF'25, one of the world's most prestigious defense industry fairs, and brought our indigenous and national projects together with global participants.",
    },
    to: "/idef",
    cta: { tr: "Detayları Gör", en: "View Details" },
  },
  {
    id: 3,
    date: { tr: "2025", en: "2025" },
    tag: { tr: "Ödül", en: "Award" },
    title: {
      tr: "UDHAM Ar-Ge Fikir Yarışması'nda Mansiyon Ödülü",
      en: "Honorable Mention at the UDHAM R&D Idea Competition",
    },
    summary: {
      tr: "KUANT-US projemizle, 65 üniversiteden 200 projenin yarıştığı UDHAM 3. Ar-Ge Fikir Yarışması'nda Haberleşme alanında 'En Verimli' kategorisinde mansiyon ödülü kazandık.",
      en: "With our KUANT-US project, we won an honorable mention in the 'Most Efficient' category in the Communications field at the UDHAM 3rd R&D Idea Competition, where 200 projects from 65 universities competed.",
    },
    href: "https://udham.uab.gov.tr/haberler/3-ar-ge-fikir-yarismasi-odulleri-sahiplerini-buldu",
    cta: { tr: "Haber Kaynağı", en: "News Source" },
  },
  {
    id: 4,
    date: { tr: "2024", en: "2024" },
    tag: { tr: "Ödül", en: "Award" },
    title: {
      tr: "Gelişen Çağ Hackathonu'nda İki Derece",
      en: "Two Rankings at the Gelişen Çağ Hackathon",
    },
    summary: {
      tr: "Samsun Üniversitesi iş birliğiyle düzenlenen Gelişen Çağ Hackathonu'nda Türkiye 2.'liği ve 3.'lüğü ödüllerine layık görüldük.",
      en: "At the Gelişen Çağ Hackathon organized in collaboration with Samsun University, we were awarded 2nd and 3rd place in Türkiye.",
    },
    href: "https://sosyalbilgileregitim.gazi.edu.tr/view/news/297116/teknoloji-fakultesi-ogrencilerimiz-hackathon-tematik-alan-odulu-kazandi",
    cta: { tr: "Haber Kaynağı", en: "News Source" },
  },
];

export const galleryImages = [
  "/galeri/0e9ef5be-d8a3-4fd9-9e0a-1966195adade.JPG",
  "/galeri/1754217588221.jpeg",
  "/galeri/3f095a80-c876-44f6-b341-47040b71e3c3.JPG",
  "/galeri/95d4909b-fa17-43a2-a6ff-1d4afdafdbb0.JPG",
  "/galeri/sergi.JPG",
].map(asset);

export const mainGalleryImages = [
  "/oduller/UDHAM_odul.jpeg",
  "/oduller/5G_odul.jpg",
  "/oduller/SamsunHackathon_oduller.jpg",
  "/galeri/sergi.JPG",
  "/oduller/idef_burkay.JPG",
].map(asset);

const ROLES = {
  captain: { tr: "Takım Kaptanı", en: "Team Captain" },
  viceCaptain: { tr: "Kaptan Yardımcısı", en: "Vice Captain" },
  audit: { tr: "Denetim Kurulu Üyesi", en: "Audit Board Member" },
  management: { tr: "Yönetim Kurulu Üyesi", en: "Management Board Member" },
  developer: { tr: "Geliştirici", en: "Developer" },
  mechanical: { tr: "Mekanik Mühendis", en: "Mechanical Engineer" },
  electronics: { tr: "Elektronik Mühendis", en: "Electronics Engineer" },
};

export const teamStructure = pa({
  leadership: [
    {
      role: ROLES.captain,
      name: "Abdullah ZEYNEL",
      image: "/yonetim_denetim_images/abdullah_zeynel.png",
      linkedin: "https://www.linkedin.com/in/abdullah-zeynel/",
    },
    {
      role: ROLES.viceCaptain,
      name: "Zeren KAVAZ",
      image: "/yonetim_denetim_images/zeren_kavaz.jpg",
      linkedin: "https://www.linkedin.com/in/zerenkavaz/",
    },
  ],
  auditBoard: [
    {
      role: ROLES.audit,
      name: "Yiğit DEMİRBAĞ",
      image: "/yonetim_denetim_images/yigit_demirbag.jpg",
      linkedin: "https://www.linkedin.com/in/yigit-demirbag",
    },
    {
      role: ROLES.audit,
      name: "Tolga DEMİREL",
      image: "/yonetim_denetim_images/tolga_demirel.png",
      linkedin: "https://www.linkedin.com/in/tolga-demirel/",
    },
    {
      role: ROLES.audit,
      name: "Yusuf Said SAMUR",
      image: "/yonetim_denetim_images/yusuf_said_samur.jpeg",
      linkedin: "https://www.linkedin.com/in/yusufsaidsamur/",
    },
  ],
  managementBoard: [
    {
      role: ROLES.management,
      name: "Kerem DURGUT",
      image: "/yonetim_denetim_images/kerem_durgut.jpg",
      linkedin: "https://www.linkedin.com/in/kerem-durgut-b0355b293",
    },
    {
      role: ROLES.management,
      name: "Batuhan TÜRKYILMAZ",
      image: "/yonetim_denetim_images/batuhan_turkyilmaz.jpg",
      linkedin: "https://www.linkedin.com/in/batuhantürkyılmaz",
    },
    {
      role: ROLES.management,
      name: "Atakan ERDOĞAN",
      image: "/yonetim_denetim_images/atakan_erdogan.jpeg",
      linkedin: "https://www.linkedin.com/in/atakanerdognn",
    },
    {
      role: ROLES.management,
      name: "Gökhan TONKAL",
      image: "/yonetim_denetim_images/gokhan_tonkal.jpg",
      linkedin: "https://www.linkedin.com/in/g%C3%B6khan-tonkal-909583330/",
    },
    {
      role: ROLES.management,
      name: "Zeynep AKSU",
      image: "/yonetim_denetim_images/zeynep_aksu.jpg",
      linkedin:
        "https://www.linkedin.com/in/zeynepaksu04?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      role: ROLES.management,
      name: "Hümeyra EKİNCİ",
      image: "/yonetim_denetim_images/humeyra_ekinci.jpg",
      linkedin: "https://www.linkedin.com/in/h%C3%BCmeyraekinci/",
    },
  ],
  subTeams: {
    software: [
      {
        name: "Edip HAZURİ",
        role: ROLES.developer,
        image: "/uyeler_images/edip_hazuri.jpeg",
        linkedin: "https://www.linkedin.com/in/edip-hazuri",
      },
      {
        name: "Furkan İŞERİ",
        role: ROLES.developer,
        image: "/uyeler_images/furkan_iseri.jpg",
        linkedin:
          "https://www.linkedin.com/in/furkan-i%C5%9Feri-119bb7294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Göktuğ GEZER",
        role: ROLES.developer,
        image: "/uyeler_images/goktug_gezer.jpg",
        linkedin: "https://www.linkedin.com/in/göktuğgezer",
      },
      {
        name: "Ege ERTEKİN",
        role: ROLES.developer,
        image: "/uyeler_images/ege_ertekin.png",
        linkedin:
          "https://www.linkedin.com/in/egertekin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Melda KAHRAMAN",
        role: ROLES.developer,
        image: "/uyeler_images/melda_kahraman.png",
        linkedin:
          "https://www.linkedin.com/in/melda-kahraman-94b181200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Recep KARABULUT",
        role: ROLES.developer,
        image: "/uyeler_images/recep_karabulut.jpg",
        linkedin:
          "https://www.linkedin.com/in/recep-karabulut-29b49932b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Yusuf Eren ŞAHİN",
        role: ROLES.developer,
        image: "/uyeler_images/yusuf_eren_sahin.jpg",
        linkedin: "https://www.linkedin.com/in/yusuf-eren-sahin/",
      },
      {
        name: "Nehir DARICI",
        role: ROLES.developer,
        image: "/uyeler_images/nehir_darici.jpg",
        linkedin: "https://www.linkedin.com/in/nehir-darıcı-636483331",
      },
      {
        name: "Aliberk SANDIKÇI",
        role: ROLES.developer,
        image: "/uyeler_images/aliberk_sandikci.jpeg",
        linkedin: "https://www.linkedin.com/in/asandikci/",
      },
    ],
    mechanics: [
      {
        name: "Zeynep Berra ÜRKÜT",
        role: ROLES.mechanical,
        image: "/uyeler_images/zeynep_berra_urkut.jpg",
        linkedin: "https://www.linkedin.com/in/zeynep-berra-ürküt",
      },
      {
        name: "Eylül ÇELİK",
        role: ROLES.mechanical,
        image: "/uyeler_images/eylul_celik.jpeg",
        linkedin: "https://www.linkedin.com/in/eyl%C3%BCl-%C3%A7elik-a30175347/",
      },
    ],
    electronics: [
      {
        name: "Ata Efe AY",
        role: ROLES.electronics,
        image: "/uyeler_images/ata_efe_ay.jpeg",
        linkedin: "https://www.linkedin.com/in/efe-ata-ay-b96b01386/",
      },
      {
        name: "Mehmet Aydın ERBEY",
        role: ROLES.electronics,
        image: "/uyeler_images/mehmet_aydin_erbey.jpg",
        linkedin:
          "https://www.linkedin.com/in/mehmet-ayd%C4%B1n-erbey-258112324/",
      },
      {
        name: "Ozan BİLGİN",
        role: ROLES.electronics,
        image: "/uyeler_images/ozan_bilgin.png",
        linkedin:
          "https://www.linkedin.com/in/ozan-bilgin-898040385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Mehmet Asaf AKDOĞAN",
        role: ROLES.electronics,
        image: "/uyeler_images/mehmet_asaf_akdogan.jpeg",
        linkedin:
          "https://www.linkedin.com/in/mehmet-asaf-akdo%C4%9Fan-85b822225/",
      },
    ],
  },
});

export const tabLabels = {
  software: { tr: "Yazılım Ekibi", en: "Software Team" },
  mechanics: { tr: "Mekanik Ekibi", en: "Mechanics Team" },
  electronics: { tr: "Elektronik Ekibi", en: "Electronics Team" },
};

export const stats = [
  {
    title: "5+",
    value: { tr: "TEKNOFEST Projesi", en: "TEKNOFEST Projects" },
    color: "primary",
  },
  {
    title: "9+",
    value: { tr: "TÜBİTAK Projesi", en: "TÜBİTAK Projects" },
    color: "secondary",
  },
  {
    title: "5+",
    value: { tr: "BAP Projesi", en: "BAP Projects" },
    color: "primary",
  },
  {
    title: "4+",
    value: { tr: "Ödül", en: "Awards" },
    color: "primary",
  },
];

export const teamContact = pa({
  name: "Abdullah ZEYNEL",
  title: { tr: "Takım Kaptanı", en: "Team Captain" },
  email: "info@teamergenekon.org",
  phone: "+90 552 264 49 55",
  img: "/yonetim_denetim_images/abdullah_zeynel.png",
  linkedin: "https://linkedin.com/company/team-ergenekon",
  instagram: "https://www.instagram.com/team.ergenekon",
  linktree: "https://linktr.ee/ergenekon",
  location: "Gazi Üniversitesi, Ankara",
});

export const projectsData = pa([
  {
    id: 1,
    slug: "burkay",
    title: "BURKAY",
    category: "Air Defense Systems",
    description: {
      tr: "Yapay zeka destekli hedef tespiti ve tam otonom lazer güdüm kabiliyetlerine sahip milli hava savunma sistemi.",
      en: "National air defense system with AI-assisted target detection and fully autonomous laser guidance capabilities.",
    },
    fullDescription: {
      tr: "BURKAY, asimetrik tehditlere ve insansız hava araçlarına karşı geliştirilen, yapay zeka tabanlı elektro-optik hedef tespiti ve otonom lazer güdüm sistemine sahip entegre bir hava savunma platformudur. Kritik Tasarım Raporu (KTR) aşamasını başarıyla geçmiş olup, IDEF'25 Uluslararası Savunma Sanayii Fuarı'nda sergilenmeye hak kazanmıştır.",
      en: "BURKAY is an integrated air defense platform with an AI-based electro-optical target detection and autonomous laser guidance system, developed against asymmetric threats and unmanned aerial vehicles. Having successfully passed the Critical Design Report (CDR) stage, it qualified to be exhibited at the IDEF'25 International Defense Industry Fair.",
    },
    image: "/project_images/burkay.png",
    status: { tr: "Aktif Geliştirme", en: "Active Development" },
    year: "2024",
    achievements: [
      { tr: "Kritik Tasarım Raporu (KTR)", en: "Critical Design Report (CDR)" },
      { tr: "IDEF'25 Katılımı", en: "IDEF'25 Participation" },
    ],
  },
  {
    id: 2,
    slug: "kizilyel",
    title: "KIZILYEL",
    category: "5G Positioning",
    description: {
      tr: "5G sinyallerini işleyerek yüksek hassasiyetli konum tahmini yapan ve 'En Özgün Yazılım' ödülüne layık görülen algoritmamız.",
      en: "Our algorithm that makes high-precision position estimation by processing 5G signals, awarded the 'Most Original Software'.",
    },
    fullDescription: {
      tr: "KIZILYEL, baz istasyonlarından alınan 5G test ağı verilerini makine öğrenmesi modelleriyle işleyerek, dış mekanda GPS'ten bağımsız, yüksek doğruluklu konum tespiti sağlayan yerli bir yazılım mimarisidir. TEKNOFEST 5G Konumlandırma Yarışması'nda yenilikçi yaklaşımıyla Türkiye 5.'liği ve 'En Özgün Yazılım' ödülünü kazanmıştır.",
      en: "KIZILYEL is an indigenous software architecture that provides GPS-independent, high-accuracy outdoor positioning by processing 5G test network data from base stations with machine learning models. It won 5th place in Türkiye and the 'Most Original Software' award at the TEKNOFEST 5G Positioning Competition with its innovative approach.",
    },
    image: "/project_images/kizilyel.png",
    status: { tr: "Tamamlandı", en: "Completed" },
    year: "2024",
    achievements: [
      {
        tr: "TEKNOFEST En Özgün Yazılım Ödülü",
        en: "TEKNOFEST Most Original Software Award",
      },
      { tr: "Türkiye 5.'liği", en: "5th Place in Türkiye" },
    ],
  },
  {
    id: 3,
    slug: "gokyel",
    title: "GÖKYEL",
    category: "Satellite Communication",
    description: {
      tr: "Kritik altyapılar için milli ve yerli çözümlerle donatılmış şifreli uydu haberleşme sistemi konseptimiz.",
      en: "Our encrypted satellite communication system concept equipped with national and indigenous solutions for critical infrastructures.",
    },
    fullDescription: {
      tr: "GÖKYEL, savunma sanayii ve stratejik haberleşme ağlarında veri güvenliğini en üst düzeye çıkarmak için tasarlanan güvenli uydu haberleşme projesidir. Veri sızıntılarını önlemek ve kesintisiz iletişimi garanti altına almak amacıyla özel şifreleme katmanları ve donanım mimarileri üzerine çalışılmaktadır.",
      en: "GÖKYEL is a secure satellite communication project designed to maximize data security in the defense industry and strategic communication networks. It focuses on custom encryption layers and hardware architectures to prevent data leaks and guarantee uninterrupted communication.",
    },
    image: "/project_images/gokyel.png",
    status: { tr: "Planlama", en: "Planning" },
    year: "2024",
    achievements: [
      { tr: "Konsept Tasarım", en: "Concept Design" },
      { tr: "Haberleşme Güvenliği", en: "Communication Security" },
    ],
  },
  {
    id: 4,
    slug: "kuant-us",
    title: "KUANT-US",
    category: "Quantum Security",
    description: {
      tr: "Yeni nesil siber tehditlere karşı kuantum dirençli algoritmalarla korunan otonom uydu güvenliği sistemi.",
      en: "Autonomous satellite security system protected by quantum-resistant algorithms against next-generation cyber threats.",
    },
    fullDescription: {
      tr: "KUANT-US, geleceğin kuantum bilgisayar tehditlerine karşı uydu haberleşmesini güvence altına almak için post-kuantum kriptografik algoritmaları entegre eden, donanım uyumlu ve otonom bir güvenlik mimarisidir. UDHAM 3. Ar-Ge Fikir Yarışması'nda 'En Verimli' kategorisinde mansiyon ödülü ile tescillenmiştir.",
      en: "KUANT-US is a hardware-compatible and autonomous security architecture that integrates post-quantum cryptographic algorithms to secure satellite communication against future quantum computing threats. It was registered with an honorable mention in the 'Most Efficient' category at the UDHAM 3rd R&D Idea Competition.",
    },
    image: "/logo-full.png",
    status: { tr: "Aktif Geliştirme", en: "Active Development" },
    year: "2024",
    achievements: [
      { tr: "UDHAM Mansiyon Ödülü", en: "UDHAM Honorable Mention" },
      {
        tr: "Kuantum Şifreleme",
        en: "Quantum Encryption",
      },
    ],
  },
]);

export const UNIVERSITY_MAP_ADDRESS =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1899654684794!2d32.81888537565268!3d39.9371402846898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34eda7057c303%3A0x3839e3df56fce542!2sGazi%20University%20Faculty%20of%20Technology!5e0!3m2!1sen!2str!4v1757607860167!5m2!1sen!2str";

// Faaliyet sayfaları — ortak ActivityPage component'i ile render edilir.
// Yeni faaliyet eklemek için buraya bir kayıt eklemek yeterlidir.
export const activities = pa({
  idef: {
    slug: "idef",
    pageTitle: { tr: "IDEF'25 Yolculuğumuz", en: "Our IDEF'25 Journey" },
    metaDescription: {
      tr: "Ergenekon R&D Team'in IDEF'25 Uluslararası Savunma Sanayii Fuarı'ndaki teknoloji gösterimi ve sektör buluşmaları.",
      en: "Ergenekon R&D Team's technology showcase and industry meetings at the IDEF'25 International Defense Industry Fair.",
    },
    pageSubtitle: {
      tr: "Uluslararası Savunma Sanayii Fuarı'ndaki teknoloji gösterimimiz ve sektör buluşmalarımızdan kareler.",
      en: "Snapshots from our technology showcase and industry meetings at the International Defense Industry Fair.",
    },
    heroImage: "/oduller/idef_burkay.JPG",
    heroTitle: { tr: "Ergenekon Sahne'de", en: "Ergenekon on Stage" },
    heroDesc: {
      tr: "Dünyanın en prestijli savunma sanayi fuarlarından biri olan IDEF'25'te, yerli ve milli projelerimizi global katılımcılarla buluşturduk.",
      en: "At IDEF'25, one of the world's most prestigious defense industry fairs, we brought our indigenous and national projects together with global participants.",
    },
    aboutTitle: { tr: "IDEF Nedir?", en: "What is IDEF?" },
    aboutText: {
      tr: "IDEF (Uluslararası Savunma Sanayii Fuarı), Türkiye'de düzenlenen ve dünyanın en büyük savunma sanayi fuarlarından biri olan prestijli bir organizasyondur. Türk Silahlı Kuvvetlerini Güçlendirme Vakfı yönetim ve sorumluluğunda gerçekleştirilen fuar; savunma, güvenlik, denizcilik, havacılık ve uzay sanayii alanlarında en son teknolojilerin sergilendiği küresel bir buluşma noktasıdır.",
      en: "IDEF (International Defense Industry Fair) is a prestigious organization held in Türkiye and one of the largest defense industry fairs in the world. Held under the management and responsibility of the Turkish Armed Forces Foundation, the fair is a global meeting point where the latest technologies in the fields of defense, security, maritime, aviation and space industries are exhibited.",
    },
    aboutLogo: "/logolar/idef_logo.png",
    aboutLogoClass: "p-8 bg-white",
    badge: { tr: "SAVUNMANIN GELECEĞİ", en: "THE FUTURE OF DEFENSE" },
    projectTitle: "DOT: Defenders of Tomorrow",
    projectText: {
      tr: "IDEF'25 kapsamında standımızı açtığımız **Defenders of Tomorrow (DOT)** alanı, savunma sanayiinin geleceğini şekillendirecek genç yeteneklere ve inovatif girişimlere ayrılmış özel bir bölümdür. Geleceğin savunucuları olarak, burada projelerimizi sektör liderlerine, askeri heyetlere ve uluslararası yatırımcılara tanıtma fırsatı bulduk.",
      en: "The **Defenders of Tomorrow (DOT)** area, where we set up our booth within IDEF'25, is a special section dedicated to young talents and innovative ventures that will shape the future of the defense industry. As defenders of the future, we had the opportunity to introduce our projects to industry leaders, military delegations and international investors here.",
    },
    video: {
      heading: { tr: "Sunumumuz & Tanıtım", en: "Our Presentation & Promo" },
      embed: "https://www.youtube.com/embed/BXOt_NbPr04",
      title: "IDEF'25 Sunumu",
    },
    profileCard: {
      heading: { tr: "Resmi Fuar Profilimiz", en: "Our Official Fair Profile" },
      subheading: {
        tr: "IDEF'25 Dijital Platformunda Ergenekon R&D Team",
        en: "Ergenekon R&D Team on the IDEF'25 Digital Platform",
      },
      url: "https://gaziergenekonarge.idef.com.tr/",
      bgImage: "/oduller/idef_burkay.JPG",
      logo: "/logolar/idef_logo.png",
      title: { tr: "IDEF'25 Dijital Standı", en: "IDEF'25 Digital Booth" },
      desc: {
        tr: "Ergenekon R&D Team'in resmi fuar profilini, ürünlerini ve detaylı bilgilerini IDEF dijital platformunda inceleyin.",
        en: "Explore Ergenekon R&D Team's official fair profile, products and detailed information on the IDEF digital platform.",
      },
      button: { tr: "Profili Ziyaret Et ↗", en: "Visit Profile ↗" },
    },
    galleryTitle: { tr: "IDEF'25 Anı Galerisi", en: "IDEF'25 Memory Gallery" },
    galleryImages: galleryImages,
  },

  "5g-konumlandirma": {
    slug: "5g-konumlandirma",
    pageTitle: {
      tr: "5G Konumlandırma Yarışması",
      en: "5G Positioning Competition",
    },
    metaDescription: {
      tr: "TEKNOFEST 5G Konumlandırma Yarışması'nda KIZILYEL projemizle 'En Özgün Yazılım' ödülü kazandık.",
      en: "We won the 'Most Original Software' award with our KIZILYEL project at the TEKNOFEST 5G Positioning Competition.",
    },
    pageSubtitle: {
      tr: 'TEKNOFEST 5G Konumlandırma Yarışması\'nda "En Özgün Yazılım" Ödülü',
      en: 'The "Most Original Software" Award at the TEKNOFEST 5G Positioning Competition',
    },
    heroImage: "/oduller/5G_odul.jpg",
    heroTitle: {
      tr: "En Özgün Yazılım Ödülü",
      en: "Most Original Software Award",
    },
    heroDesc: {
      tr: "Turkcell ve TEKNOFEST iş birliğinde düzenlenen 5G Konumlandırma Yarışması'nda, KIZILYEL projemizle geliştirdiğimiz yapay zekâ tabanlı yerli konumlandırma yazılımını sahaya taşıdık.",
      en: "At the 5G Positioning Competition organized in collaboration with Turkcell and TEKNOFEST, we brought our AI-based indigenous positioning software developed with the KIZILYEL project into the field.",
    },
    aboutTitle: { tr: "Yarışma Nedir?", en: "What is the Competition?" },
    aboutText: {
      tr: "Turkcell ve TEKNOFEST iş birliğinde, T3 Vakfı desteğiyle düzenlenen 5G Konumlandırma Yarışması; 5G test ağı verilerini kullanarak yapay zekâ temelli konumlandırma algoritmaları geliştiren takımları bir araya getiren ulusal bir teknoloji yarışmasıdır. Yarışma, konumlandırma teknolojilerinde yerli ve millî çözümler üreterek dışa bağımlılığı azaltmayı hedeflemektedir.",
      en: "The 5G Positioning Competition, organized in collaboration with Turkcell and TEKNOFEST and supported by the T3 Foundation, is a national technology competition that brings together teams developing AI-based positioning algorithms using 5G test network data. The competition aims to reduce foreign dependency by producing indigenous and national solutions in positioning technologies.",
    },
    aboutLogo: "/logolar/turkcell_logo.png",
    aboutLogoClass: "p-12 bg-white",
    badge: { tr: "YERLİ VE MİLLİ YAZILIM", en: "INDIGENOUS & NATIONAL SOFTWARE" },
    projectTitle: { tr: "KIZILYEL Projesi", en: "KIZILYEL Project" },
    projectText: {
      tr: 'Gazi Üniversitesi öğrencilerinden oluşan takımımız, Turkcell ve TEKNOFEST kapsamında düzenlenen 5G Konumlandırma Yarışması\'nda "En Özgün Yazılım Ödülü" almaya hak kazanmıştır. KIZILYEL projesi kapsamında geliştirdiğimiz algoritma; 5G cihaz ölçüm ve baz istasyonu verilerini işleyerek hedef noktaların koordinatlarını yüksek doğruluk, düşük gecikme ve kararlılık ile tahmin etmektedir. Final etabında 14 takım arasında yer alarak Türkiye 5.\'liğini elde ettik.',
      en: 'Our team, composed of Gazi University students, earned the "Most Original Software Award" at the 5G Positioning Competition organized under Turkcell and TEKNOFEST. The algorithm we developed within the KIZILYEL project processes 5G device measurement and base station data to predict the coordinates of target points with high accuracy, low latency and stability. We finished 5th in Türkiye among 14 teams in the final stage.',
    },
    stats: [
      {
        title: "343",
        value: { tr: "Başvuran Takım", en: "Applicant Teams" },
        color: "primary",
      },
      {
        title: "14",
        value: { tr: "Finalist Takım", en: "Finalist Teams" },
        color: "secondary",
      },
      {
        title: "5.",
        value: { tr: "Türkiye Sıralaması", en: "Ranking in Türkiye" },
        color: "third",
      },
      {
        title: "1",
        value: { tr: "En Özgün Yazılım Ödülü", en: "Most Original Software Award" },
        color: "primary",
      },
    ],
    sources: [
      {
        title: { tr: "Gazi Üniversitesi Haberi", en: "Gazi University News" },
        desc: {
          tr: "Gazi Üniversitesi resmî haber bülteninde yarışma başarımızın duyurusu.",
          en: "Announcement of our competition success in Gazi University's official news bulletin.",
        },
        label: { tr: "Haberi Oku", en: "Read the News" },
        logo: "/logolar/gazi_logo.jpg",
        url: "https://tf.gazi.edu.tr/view/news/301635/gazi-universitesi-ogrencilerinden-5g-konumlandirma-yarismasinda-en-ozgun-yazilim-odulu",
      },
      {
        title: { tr: "Turkcell Basın Bülteni", en: "Turkcell Press Release" },
        desc: {
          tr: "Turkcell ve TEKNOFEST 5G Konumlandırma Yarışması final etabı bülteni.",
          en: "Turkcell and TEKNOFEST 5G Positioning Competition final stage bulletin.",
        },
        label: { tr: "Bülteni Oku", en: "Read the Bulletin" },
        logo: "/logolar/turkcell_logo.png",
        url: "https://medya.turkcell.com.tr/bulletins/turkcell-ve-teknofestin-5g-konumlandirma-yarismasinin-final-etabi-tamamlandi/",
      },
    ],
    sourcesTitle: { tr: "Basında Biz", en: "In the Press" },
    sourcesSubtitle: {
      tr: "Başarımızın ulusal basında ve resmî kaynaklardaki yankısı",
      en: "The reflection of our success in the national press and official sources",
    },
    galleryTitle: {
      tr: "5G Yarışması Anı Galerisi",
      en: "5G Competition Memory Gallery",
    },
    galleryImages: [
      "/oduller/5G_odul.jpg",
      "/galeri/5g_konum_1.jpg",
      "/galeri/5g_konum_2.jpg",
    ].map(asset),
  },
});

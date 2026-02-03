import {
  FaBrain,
  FaDraftingCompass,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

export const highlights = [
  {
    icon: FaRocket,
    title: "Gelişmiş Ar-Ge",
    desc: "Hava savunma ve 5G teknolojileri üzerine inovatif projeler.",
  },
  {
    icon: FaShieldAlt,
    title: "Siber Güvenlik",
    desc: "Güvenli haberleşme protokolleri ve CTF yetkinliği.",
  },
  {
    icon: FaBrain,
    title: "Yapay Zeka",
    desc: "Otonom hedef tespiti ve AI model eğitimi.",
  },
  {
    icon: FaDraftingCompass,
    title: "Prototipleme",
    desc: "Endüstriyel tasarım ve fiziksel üretim kabiliyeti.",
  },
];

export const stakeholders = [
  {
    name: "Gazi Üniversitesi",
    img: "/logolar/gazi_logo.jpg",
  },
  {
    name: "Gazisiber",
    img: "/logolar/gazisiber_logo.png",
  },
];

export const sponsors = [
  {
    name: "Gazi Teknopark",
    img: "/logolar/teknopark_logo.png",
  },
];

export const achievements = [
  {
    id: 1,
    title: "UDHAM Ar-Ge Fikir Yarışması",
    desc: "T.C. Ulaştırma ve Altyapı Bakanlığı (UDHAM) tarafından düzenlenen '3. Ulaşan ve Erişen Türkiye 2053 Üniversiteler Arası Ar-Ge Fikir Yarışması' kapsamında, Ergenekon R&D Team olarak Haberleşme alanında büyük bir başarıya imza attık. 65 üniversiteden 200 projenin yarıştığı organizasyonda; 'KUANT-US: Kuantum Dirençli, Otonom ve Donanım Uyumlu Uydu Güvenliği Sistemi' başlıklı projemizle 'En Verimli' kategorisinde Mansiyon Ödülü’ne layık görüldük. Ulusal ölçekteki bu prestijli yarışmada, kuantum sonrası siber güvenlik ve uydu teknolojileri üzerine geliştirdiğimiz yenilikçi çözümümüzle üniversitemizi ve takımımızı başarıyla temsil ettik.",
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
    title: "TEKNOFEST 5G Yarışması",
    desc: "Turkcell sponsorluğunda düzenlenen TEKNOFEST 5G Konumlandırma Yarışması kapsamında geliştirdiğimiz KIZILYEL projesi ile yüksek hassasiyetli '5G Temelli Dış Mekan Tespit Algoritması ve Çözümü' mimarisini hayata geçirdik. 5G sinyal verilerini işleyerek konum doğruluğunu maksimize eden yerli yazılımımızla final aşamasında güçlü rakiplerimizi geride bırakarak Türkiye 5.'liği elde ettik. Geliştirdiğimiz mimarinin yenilikçi yaklaşımı sayesinde, yarışmanın  prestij ödülü olan 'En Özgün Yazılım Ödülü'ne layık görüldük.",
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
    title: "Gelişen Çağ Hackathonu",
    desc: "Samsun Üniversitesi ve Samsun Avrupa Birliği Bilgi Merkezi tarafından ortaklaşa düzenlenen 'Gelişen Çağ Hackathonu' maratonunda, Ergenekon R&D Team olarak iki farklı dereceyle kürsüde yer aldık. 'Veri Gizliliği' ve 'Uzay-Havacılıkta Yeni Dönem' gibi stratejik temalarda gerçekleştirdiğimiz yoğun çalışmalar sonucunda, ekiplerimiz Türkiye 2.'liği ve 3.'lüğü ödüllerine layık görüldüler. Dijital güvenliğin kalesi olan veri gizliliği alanındaki yetkinliğimizi ve problem çözme becerilerimizi sergilediğimiz bu organizasyon; takımımızın inovatif teknoloji geliştirme ve hızlı prototipleme kabiliyetini bir kez daha kanıtlamıştır.",
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
    title: "BURKAY Hava Savunma",
    link: "/idef",
    desc: "TEKNOFEST Hava Savunma Sistemleri Yarışması kapsamında geliştirdiğimiz yerli ve milli hava savunma sistemi projemiz BURKAY; Yapay Zeka Destekli Hedef Tespiti ve Tam Otonom Lazer Güdüm kabiliyetleriyle donatılmıştır. Kritik Tasarım Raporu (KTR) sürecini başarıyla tamamlayan projemiz; ayrıca dünyanın en prestijli savunma sanayi fuarlarından biri olan IDEF'25 Uluslararası Savunma Sanayii Fuarı'na kabul edilmiştir. Fuar süresince açtığımız standımızda; geliştirdiğimiz çözümleri ve savunma teknolojileri vizyonumuzu uluslararası profesyonellere sunduk.",
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
];
export const galleryImages = [
  "/galeri/0e9ef5be-d8a3-4fd9-9e0a-1966195adade.JPG",
  "/galeri/1754217588221.jpeg",
  "/galeri/3f095a80-c876-44f6-b341-47040b71e3c3.JPG",
  "/galeri/95d4909b-fa17-43a2-a6ff-1d4afdafdbb0.JPG",
  "/galeri/UDHAM_odul.jpeg",
  "/galeri/5G_odul.jpg",
  "/galeri/sergi.JPG",
];
export const heroContent = {
  title: "ERGENEKON R&D TEAM",
  subtitle: "GAZİ ÜNİVERSİTESİ",
  description: "Milli Savunma ve İleri Teknoloji için Yenilikçi, Yerli ve Milli Çözümler.",
  ctaPrimary: "Projelerimiz",
  ctaSecondary: "İletişim",
};

export const teamStructure = {
  leadership: [
    {
      role: "Takım Kaptanı",
      name: "Abdullah ZEYNEL",
      image: "/yonetim_denetim_images/abdullah_zeynel.png",
      linkedin: "https://www.linkedin.com/in/abdullah-zeynel/",
      email: "0abdullahzeynel0@gmail.com",
    },
    {
      role: "Kaptan Yardımcısı",
      name: "Zeren KAVAZ",
      image: "/yonetim_denetim_images/zeren_kavaz.jpg",
      linkedin: "https://www.linkedin.com/in/zerenkavaz/",
      email: "zerenkavaz@gmail.com",
    },
  ],
  auditBoard: [
    {
      role: "Denetim Kurulu Üyesi",
      name: "Yiğit DEMİRBAĞ",
      image: "/yonetim_denetim_images/yigit_demirbag.jpg",
      linkedin: "https://www.linkedin.com/in/yigit-demirbag",
      email: "yigitdmrb@gmail.com",
    },
    {
      role: "Denetim Kurulu Üyesi",
      name: "Tolga DEMİREL",
      image: "/yonetim_denetim_images/tolga_demirel.png",
      linkedin: "https://www.linkedin.com/in/tolga-demirel/",
      email: "",
    },
    {
      role: "Denetim Kurulu Üyesi",
      name: "Yusuf Said SAMUR",
      image: "/yonetim_denetim_images/yusuf_said_samur.jpeg",
      linkedin: "https://www.linkedin.com/in/yusufsaidsamur/",
      email: "yusufsaidsamur8@gmail.com",
    },
  ],
  managementBoard: [
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Kerem DURGUT",
      image: "/yonetim_denetim_images/kerem_durgut.jpg",
      linkedin: "https://www.linkedin.com/in/kerem-durgut-b0355b293",
      email: "keremdurgut265@gmail.com",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Batuhan TÜRKYILMAZ",
      image: "/yonetim_denetim_images/batuhan_turkyilmaz.jpg",
      linkedin: "https://www.linkedin.com/in/batuhantürkyılmaz",
      email: "2001.batuhan.28@gmail.com",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Atakan ERDOĞAN",
      image: "/yonetim_denetim_images/atakan_erdogan.jpeg",
      linkedin: "https://www.linkedin.com/in/atakanerdognn",
      email: "atakanerdognn@gmail.com",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Gökhan TONKAL",
      image: "/yonetim_denetim_images/gokhan_tonkal.jpg",
      linkedin: "https://www.linkedin.com/in/g%C3%B6khan-tonkal-909583330/",
      email: "gokhantonkal.52@gmail.com",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Zeynep AKSU",
      image: "/yonetim_denetim_images/zeynep_aksu.jpg",
      linkedin: "https://www.linkedin.com/in/zeynepaksu04?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "zeynep.aksu.ide@gmail.com",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Hümeyra EKİNCİ",
      image: "/yonetim_denetim_images/humeyra_ekinci.jpg",
      linkedin: "https://www.linkedin.com/in/h%C3%BCmeyraekinci/",
      email: "humeyraekinci65@gmail.com",
    },
  ],
  subTeams: {
    software: [
      {
        name: "Edip HAZURİ",
        role: "Geliştirici",
        image: "/uyeler_images/edip_hazuri.jpeg",
        linkedin: "https://www.linkedin.com/in/edip-hazuri",
        email: "teamergenekon@medip.dev",
      },
      {
        name: "Furkan İŞERİ",
        role: "Geliştirici",
        image: "/uyeler_images/furkan_iseri.jpg",
        linkedin: "https://www.linkedin.com/in/furkan-i%C5%9Feri-119bb7294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "furkaniseri0709@gmail.com",
      },
      {
        name: "Göktuğ GEZER",
        role: "Geliştirici",
        image: "/uyeler_images/goktug_gezer.jpg",
        linkedin: "https://www.linkedin.com/in/göktuğgezer",
        email: "ggezer780@gmail.com",
      },
      {
        name: "Ege ERTEKİN",
        role: "Geliştirici",
        image: "/uyeler_images/ege_ertekin.png",
        linkedin: "https://www.linkedin.com/in/egertekin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "egertekin1@gmail.com",
      },
      {
        name: "Melda KAHRAMAN",
        role: "Geliştirici",
        image: "/uyeler_images/melda_kahraman.png",
        linkedin: "https://www.linkedin.com/in/melda-kahraman-94b181200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "meldakahraman.02@gmail.com",
      },
      {
        name: "Recep KARABULUT",
        role: "Geliştirici",
        image: "/uyeler_images/recep_karabulut.jpg",
        linkedin: "https://www.linkedin.com/in/recep-karabulut-29b49932b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "gorkemkrbl07@gmail.com",
      },
      {
        name: "Yusuf Eren ŞAHİN",
        role: "Geliştirici",
        image: "/uyeler_images/yusuf_eren_sahin.jpg",
        linkedin: "https://www.linkedin.com/in/yusuf-eren-sahin/",
        email: "yusuferensahin0@gmail.com",
      },
      {
        name: "Nehir DARICI",
        role: "Geliştirici",
        image: "/uyeler_images/nehir_darici.jpg",
        linkedin: "https://www.linkedin.com/in/nehir-darıcı-636483331",
        email: "nehirdarici@gmail.com",
      },
    ],
    mechanics: [
      {
        name: "Zeynep Berra ÜRKÜT",
        role: "Mekanik Mühendis",
        image: "/uyeler_images/zeynep_berra_urkut.jpg",
        linkedin: "https://www.linkedin.com/in/zeynep-berra-ürküt",
        email: "zeynepberraurkut05@gmail.com",
      },
    ],
    electronics: [
      {
        name: "Ata Efe AY",
        role: "Elektronik Mühendis",
        image: "/uyeler_images/ata_efe_ay.jpeg",
        linkedin: "https://www.linkedin.com/in/efe-ata-ay-b96b01386/",
        email: "aataefe@gmail.com",
      },
      {
        name: "Mehmet Aydın ERBEY",
        role: "Elektronik Mühendis",
        image: "/uyeler_images/mehmet_aydin_erbey.jpg",
        linkedin: "https://www.linkedin.com/in/mehmet-ayd%C4%B1n-erbey-258112324/",
        email: "mehmetaydinerbey27@gmail.com",
      },
      {
        name: "Ozan BİLGİN",
        role: "Elektronik Mühendis",
        image: "/uyeler_images/ozan_bilgin.png",
        linkedin: "https://www.linkedin.com/in/ozan-bilgin-898040385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "ozanbilgin2007@gmail.com",
      },
    ],
  },
};

export const tabLabels = {
  software: "Yazılım Ekibi",
  mechanics: "Mekanik Ekibi",
  electronics: "Elektronik Ekibi",
};

export const stats = [
  {
    title: "5+",
    value: "TEKNOFEST Projesi",
    color: "primary",
  },
  {
    title: "9+",
    value: "TÜBİTAK Projesi",
    color: "secondary",
  },
  {
    title: "5+",
    value: "BAP Projesi",
    color: "primary",
  },
  {
    title: "4+",
    value: "Ödül",
    color: "primary",
  },
];

export const teamContact = {
  name: "Gökhan TONKAL",
  title: "İletişim Sorumlusu & YK Üyesi",
  email: "gokhantonkal.52@gmail.com",
  img: "/yonetim_denetim_images/gokhan_tonkal.jpg",
  linkedin: "https://linkedin.com/company/team-ergenekon",
  instagram: "https://www.instagram.com/team.ergenekon",
  linktree: "https://linktr.ee/ergenekon",
  location: "Gazi Üniversitesi, Ankara",
};

export const projectsData = [
  {
    id: 1,
    slug: "burkay",
    title: "BURKAY",
    category: "Air Defense Systems",
    description:
      "Lazer güdümlü ve yapay zeka tabanlı akıllı hava savunma sistemi. Video Kabiliyet Gösterimi aşamasına kadar ilerlemiştir.",
    fullDescription:
      "BURKAY projesi, lazer güdümlü ve yapay zeka tabanlı akıllı hava savunma sistemi olarak tasarlanmıştır. Proje, düşman insansız hava araçlarını tespit etmek ve etkisiz hale getirmek için geliştirilen yenilikçi bir sistemdir. Video Kabiliyet Gösterimi aşamasına kadar başarıyla ilerlemiştir.",
    image: "/project_images/burkay.png",
    status: "Aktif Geliştirme",
    year: "2024",
    achievements: ["Video Kabiliyet Gösterimi", "BAP Desteği"],
  },
  {
    id: 2,
    slug: "kizilyel",
    title: "KIZILYEL",
    category: "5G Positioning",
    description:
      "TEKNOFEST 5G Konumlandırma Yarışması'nda 'En Özgün Yazılım' ödülü alan projemiz.",
    fullDescription:
      "KIZILYEL projesi, 5G teknolojileri kullanarak yüksek hassasiyetli konum belirleme sistemi geliştirmektedir. TEKNOFEST 5G Konumlandırma Yarışması'nda 'En Özgün Yazılım' ödülünü kazanmış olan proje, savunma, lojistik ve acil müdahale senaryolarında kullanılmak üzere tasarlanmıştır.",
    image: "/project_images/kizilyel.png",
    status: "Tamamlandı",
    year: "2024",
    achievements: ["TEKNOFEST En Özgün Yazılım Ödülü", "5G İnovasyon"],
  },
  {
    id: 3,
    slug: "gokyel",
    title: "GÖKYEL",
    category: "Satellite Communication",
    description:
      "Güvenli Uydu Haberleşmesi projesi. Fikir detay raporu aşamasına kadar başarıyla gelmiştir.",
    fullDescription:
      "GÖKYEL projesi, güvenli ve şifreli uydu haberleşmesi sağlamak amacıyla geliştirilmektedir. Milli ve yerli çözümlerle donatılan sistem, kritik altyapı ve savunma haberleşmesinde kullanılmak üzere tasarlanmıştır. Fikir detay raporu aşamasına kadar başarıyla ilerlemiştir.",
    image: "/project_images/gokyel.png",
    status: "Planlama",
    year: "2024",
    achievements: ["Fikir Detay Raporu", "TÜBİTAK Başvurusu"],
  },
  {
    id: 4,
    slug: "kuant-us",
    title: "KUANT-US",
    category: "Quantum Security",
    description:
      "Kuantum Dirençli, Otonom ve Donanım Uyumlu Uydu Güvenliği Sistemi. UDHAM mansiyon ödülü sahibi.",
    fullDescription:
      "KUANT-US, kuantum bilgisayarlara karşı dirençli şifreleme algoritmaları kullanarak uydu haberleşmesinin güvenliğini sağlamayı hedefleyen bir projedir. Otonom çalışma kapasitesi ve mevcut donanımlarla uyumlu tasarımıyla öne çıkmaktadır. UDHAM yarışmasında mansiyon ödülü kazanmıştır.",
    image: "/logo-full.png",
    status: "Aktif Geliştirme",
    year: "2024",
    achievements: ["UDHAM Mansiyon Ödülü", "Kuantum Şifreleme Araştırması"],
  },
];

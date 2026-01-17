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

export const achievements = [
  {
    id: 1,
    title: "UDHAM Ar-Ge Fikir Yarışması",
    desc: (
      <>
        Ulaştırma ve Altyapı Bakanlığı tarafından düzenlenen 'Ulaşan ve Erişen
        Türkiye 2053' yarışmasında, Kuantum Dirençli Uydu Güvenliği projemizle{" "}
        <strong className="text-primary/70 font-bold">
          50.000₺ Ödül & Mansiyon
        </strong>{" "}
        kazandık.
      </>
    ),
    mainImage: "https://placehold.co/600x400/1a1a1a/FFF?text=UDHAM+Odul",
    thumbnails: [
      "https://placehold.co/200x150/2a2a2a/FFF?text=Plaket",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Ekip",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Sunum",
    ],
  },
  {
    id: 2,
    title: "TEKNOFEST 5G Yarışması",
    desc: (
      <>
        KIZILYEL projemizle katıldığımız 5G Konumlandırma Yarışması'nda,
        geliştirdiğimiz algoritmalar sayesinde prestijli{" "}
        <strong className="text-primary/70 font-bold">
          En Özgün Yazılım Ödülü & Türkiye 5.'liği
        </strong>{" "}
        elde ettik.
      </>
    ),
    mainImage: "https://placehold.co/600x400/1a1a1a/FFF?text=TEKNOFEST+5G",
    thumbnails: [
      "https://placehold.co/200x150/2a2a2a/FFF?text=Sahne",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Logo",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Stand",
    ],
  },
  {
    id: 3,
    title: "Gelişen Çağ Hackathonu",
    desc: (
      <>
        Samsun Üniversitesi ve Avrupa Birliği Bilgi Merkezi ortaklığında
        düzenlenen hackathon'da, takımlarımız sınırları zorlayarak{" "}
        <strong className="text-primary/70 font-bold">
          2.'lik ve 3.'lük Derecesi
        </strong>{" "}
        ile kürsüye çıktı.
      </>
    ),
    mainImage: "https://placehold.co/600x400/1a1a1a/FFF?text=Hackathon",
    thumbnails: [
      "https://placehold.co/200x150/2a2a2a/FFF?text=Calisma",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Belge",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Grup",
    ],
  },
  {
    id: 4,
    title: "BURKAY Hava Savunma",
    desc: (
      <>
        Lazer güdümlü hava savunma sistemimiz BURKAY,{" "}
        <strong className="text-primary/70 font-bold">
          IDEF Fuarı Katılımı & Kritik Tasarım Onayı
        </strong>{" "}
        alarak sektör profesyonellerine tanıtıldı ve büyük ilgi gördü.
      </>
    ),
    mainImage: "https://placehold.co/600x400/1a1a1a/FFF?text=BURKAY+Sistem",
    thumbnails: [
      "https://placehold.co/200x150/2a2a2a/FFF?text=IDEF",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Render",
      "https://placehold.co/200x150/2a2a2a/FFF?text=Prototip",
    ],
  },
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
      image: "/members_images/abdullah_.png",
      linkedin:"",
      email:""
    },
    {
      role: "Kaptan Yardımcısı",
      name: "Zeren KAVAZ",
      image: "/members_images/zeren_kavaz.png",
    },
  ],
  auditBoard: [
    {
      role: "Denetim Kurulu Üyesi",
      name: "Tolga DEMİREL",
      image: "/members_images/tolga_demirel.png",
    },
  ],
  managementBoard: [
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Kerem DURGUT",
      image: "/members_images/kerem_durgut.png",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Batuhan TÜRKYILMAZ",
      image: "/members_images/batuhan_turkyilmaz.png",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Atakan ERDOĞAN",
      image: "/members_images/atakan_erdogan.png",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Gökhan TONKAL",
      image: "/members_images/gokhan_tonkal.png",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Zeynep AKSU",
      image: "/members_images/zeynep_aksu.png",
    },
    {
      role: "Yönetim Kurulu Üyesi",
      name: "Hümeyra EKİNCİ",
      image: "/members_images/humeyra_ekinci.png",
    },
  ],
  subTeams: {
    software: [
      {
        name: "Edip HAZURİ",
        role: "Geliştirici",
        image: "/members_images/edip_hazuri.png",
      },
      {
        name: "Furkan İŞERİ",
        role: "Geliştirici",
        image: "/members_images/furkan_iseri.png",
      },
      {
        name: "Dilanur Sanem KARAGÖZ",
        role: "Geliştirici",
        image: "/members_images/dilanur_sanem_karagoz.png",
      },
      {
        name: "Ege ERTEKİN",
        role: "Geliştirici",
        image: "/members_images/ege_ertekin.png",
      },
      {
        name: "Melda KAHRAMAN",
        role: "Geliştirici",
        image: "/members_images/melda_kahraman.png",
      },
      {
        name: "Recep KARABULUT",
        role: "Geliştirici",
        image: "/members_images/recep_karabulut.png",
      },
      {
        name: "Yusuf Eren ŞAHİN",
        role: "Geliştirici",
        image: "/members_images/yusuf_eren_sahin.png",
      },
      {
        name: "Nehir DARICI",
        role: "Geliştirici",
        image: "/members_images/nehir_darici.png",
      },
    ],
    mechanics: [
      {
        name: "Zeynep Berra ÜRKÜT",
        role: "Mekanik Mühendis",
        image: "/members_images/zeynep_berra_urkut.png",
      },
    ],
    electronics: [
      {
        name: "Betül DORUK",
        role: "Elektronik Mühendis",
        image: "/members_images/betul_doruk.png",
      },
      {
        name: "Ata Efe AY",
        role: "Elektronik Mühendis",
        image: "/members_images/ata_efe_ay.png",
      },
      {
        name: "Mehmet Aydın ERBEY",
        role: "Elektronik Mühendis",
        image: "/members_images/mehmet_aydin_erbey.png",
      },
      {
        name: "Ozan BİLGİN",
        role: "Elektronik Mühendis",
        image: "/members_images/ozan_bilgin.png",
      },
    ],
  },
};

export const tabLabels = {
  software: "Yazılım Ekibi",
  mechanics: "Mekanik Ekibi",
  electronics: "Elektronik Ekibi",
};

export const supporters = [
  {
    name: "Gazi Üniversitesi",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=GAZI+UNIV",
  },
  {
    name: "TÜBİTAK",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=TUBITAK",
  },
  {
    name: "TEKNOFEST",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=TEKNOFEST",
  },
  {
    name: "T3 Vakfı",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=T3+VAKFI",
  },
  {
    name: "ASELSAN",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=ASELSAN",
  },
  {
    name: "HAVELSAN",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=HAVELSAN",
  },
  {
    name: "ROKETSAN",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=ROKETSAN",
  },
  { name: "TUSAŞ", img: "https://placehold.co/400x150/1a1a1a/FFF?text=TUSAS" },
  { name: "STM", img: "https://placehold.co/400x150/1a1a1a/FFF?text=STM" },
  {
    name: "Ulaştırma Bakanlığı",
    img: "https://placehold.co/400x150/1a1a1a/FFF?text=ULASTIRMA+BAK",
  },
];

export const stats = [
  {
    title: "3+",
    value: "TEKNOFEST Projesi",
    color: "primary",
  },
  {
    title: "5+",
    value: "TÜBİTAK Projesi",
    color: "secondary",
  },
  {
    title: "50.000",
    value: "Ödül",
    color: "primary",
  },
  {
    title: "1+",
    value: "Ödül",
    color: "secondary",
  },
];

export const teamContact = {
  name: "Gökhan TONKAL",
  title: "İletişim Sorumlusu & YK Üyesi",
  email: "gokhan.tonkal@teamergenekon.org",
  img: "/members_images/gokhan_tonkal.png",
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
    image: "/images/logo-full.png",
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
    image: "/images/logo-full.png",
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
    image: "/images/logo-full.png",
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
    image: "/images/logo-full.png",
    status: "Aktif Geliştirme",
    year: "2024",
    achievements: ["UDHAM Mansiyon Ödülü", "Kuantum Şifreleme Araştırması"],
  },
];

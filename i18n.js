/**
 * i18n.js — Inisialisasi i18next + kamus terjemahan EN / ID
 * --------------------------------------------------------------
 * File ini berisi:
 *   1. Objek `translations` (resources) untuk bahasa 'en' & 'id'
 *   2. Inisialisasi i18next (dengan fallback ke 'en')
 *   3. Helper `applyTranslations()` untuk menerapkan teks ke elemen
 *      ber-attribute `data-i18n` dan `data-i18n-placeholder`
 *   4. Helper `getCurrentLang()` & `toggleLanguage()` untuk dipakai main.js
 *
 * Tidak lagi memakai atribut `data-en` / `data-id` seperti versi sebelumnya.
 */

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      journey: "Journey",
      contact: "Contact",
      translate: "Translate"
    },
    home: {
      available: "AVAILABLE FOR WORK",
      greeting: "Hello, I'm",
      intro: "A frontend-leaning full-stack engineer who builds calm, performant, and user-friendly interfaces. I turn vague ideas into shipped products.",
      view_projects: "View Projects",
      contact: "Contact Me",
      est: "EST. 2019",
      typewriter: ["Frontend Engineer.", "Full-Stack Web Development Learner.", "Open-Source Tinkerer.", "IoT Enthusiast."]
    },
    about: {
      label: "ABOUT",
      title: "More than just code.",
      bio1: "I'm an aspiring web developer based in Malang, with a long-standing interest in programming that began in my first year of junior high school. I enjoy building clean, performant, and thoughtfully designed web experiences, with a focus on usability, responsive layouts, and maintainable code.",
      bio2: "Outside of coding, I enjoy exploring new ideas, learning by building, and turning small curiosities into practical projects.",
      years: "years of learning",
      projects: "projects built",
      repos: "open-source repos",
      download_cv: "Download CV",
      currently_label: "CURRENTLY",
      currently: "cashier & inventory management, Frozen Food Turen — Continuously learning and building, even beyond my day-to-day work..",
      location_label: "LOCATION",
      utc: "UTC+7"
    },
    projects: {
      label: "PROJECTS",
      title: "Things I've built.",
      subtitle: "A small selection of work — open-source, side projects, and school projects.",
      pulse_title: "Kue Tart Turen Official Website",
      pulse_desc: "Designed and developed a responsive landing page for the Kue Tart Turen store to showcase cake collections, provide business information, and make it easier for customers to explore products and contact the business.",
      live: "Live",
      keycap_title: "Equipment Lending Management System",
      keycap_desc: "A web application to manage the borrowing and returning of equipment using a role-based access system. The app provides separate access rights for Admin, Staff, and Borrowers.",
      docs: "Docs",
      cargo_title: "Student Attendance App",
      cargo_desc: "A role-based student attendance management application using Java Swing in NetBeans. The system provides separate access for Admin, Staff, and Students, with features tailored to each role to support attendance tracking and streamline school attendance management.",
      case_study: "Repository",
      ledgr_title: "Ledgr",
      ledgr_desc: "A double-entry personal finance app with offline-first sync and an obsessively minimalist ledger view."
    },
    skills: {
      label: "SKILLS",
      title: "Tools of the trade.",
      technical: "Technical Skills",
      technical_list: ["JavaScript", "Astro", "CSS / Tailwind / Bootstrap", "MySQL", "PHP"],
      soft: "Soft Skills",
      communication: "Communication",
      communication_desc: "Translating technical trade-offs into plain language for stakeholders.",
      mentorship: "Passive English Proficiency",
      mentorship_desc: "Able to understand written English and follow basic English communication.",
      problem: "Problem Framing",
      problem_desc: "Defining the right question before reaching for a solution.",
      self: "Self-Direction",
      self_desc: "Owning ambiguous projects end-to-end without hand-holding.",
      empathy: "Critical Thinking",
      empathy_desc: "Able to analyze information, evaluate options, and solve problems logically.",
      adaptability: "Adaptability",
      adaptability_desc: "Switching stacks and wearing multiple hats as the team needs."
    },
    journey: {
      label: "JOURNEY",
      title: "Experience & education.",
      experience_label: "EXPERIENCE",
      education_label: "EDUCATION",
      exp1_title: "Cashier & Inventory Management",
      exp1_desc: "Handled daily customer transactions, recorded purchases, and assisted with inventory tracking and bookkeeping.",
      exp2_title: "Phone Technician Assistant",
      exp2_desc: "Assisted with smartphone assembly, disassembly, and testing, while managing technical supplies, spare-part documentation, and client invoices.",
      exp3_title: "Graphic Designer & Printing Operator",
      exp3_desc: "Designed promotional materials and operated printing equipment to produce books, calendars, stickers, and other printed products.",
      // edu1_title: "B.Sc. Computer Science",
      // edu1_desc: "Thesis on real-time collaborative editing using CRDTs. Graduated cum laude with a 3.78 GPA.",
      edu1_title: "SMKS Turen — Software Engineering (RPL)",
      edu1_desc: "Studied Software Engineering with a focus on web development, desktop application development using Java and database management using MySQL",
      edu2_title: "SMPN 01 Turen",
      edu2_desc: "Completed junior secondary education, developing foundational knowledge, discipline, and teamwork skills."
    },
    contact: {
      label: "CONTACT",
      title: "Let's build something.",
      intro: "Open to freelance projects, full-time roles, and interesting collaborations. I usually reply within a day.",
      email_label: "EMAIL",
      whatsapp_label: "WHATSAPP",
      github_label: "GITHUB",
      linkedin_label: "LINKEDIN",
      email_value: "raven@aldrev.dev",
      whatsapp_value: "+62 812-3456-7890",
      github_value: "github.com/indohum4n",
      linkedin_value: "linkedin.com/in/raven-ald",
      cta: "Have a project in mind, a question, or just want to say hi? Don't hesitate to reach out — I'm always happy to connect and explore new opportunities.",
      response_label: "RESPONSE TIME",
      response: "Usually within 24 hours"
    },
    footer: {
      built: "Built with care, in Jakarta."
    },
    toast: {
    title: "Switch Language?",
    desc: "You can change the language to Indonesia using the button at the top right."
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      journey: "Perjalanan",
      contact: "Kontak",
      translate: "Terjemahkan"
    },
    home: {
      available: "TERSEDIA UNTUK KERJA",
      greeting: "Halo, saya",
      intro: "Seorang full-stack engineer yang berfokus pada frontend, membangun antarmuka yang tenang, cepat, dan ramah pengguna. Saya mengubah ide samar menjadi produk yang siap rilis.",
      view_projects: "Lihat Proyek",
      contact: "Hubungi Saya",
      est: "SEJAK 2019",
      typewriter: ["Frontend Engineer.", "Pembelajar Pengembangan Web Full-Stack.", "Tinkerer Open-Source.", "Penggemar IoT."]
    },
    about: {
      label: "TENTANG",
      title: "Lebih dari sekadar kode.",
      bio1: "Saya seorang web developer pemula yang berbasis di Malang, dengan minat yang sudah lama terhadap pemrograman yang dimulai sejak tahun pertama SMP. Saya menikmati membangun pengalaman web yang bersih, cepat, dan dirancang dengan cermat, dengan fokus pada kegunaan, tata letak responsif, dan kode yang mudah dipelihara.",
      bio2: "Di luar coding, saya menikmati menjelajahi ide-ide baru, belajar sambil membangun, dan mengubah rasa ingin tahu kecil menjadi proyek-proyek praktis.",
      years: "tahun belajar",
      projects: "proyek dibangun",
      repos: "repo open-source",
      download_cv: "Unduh CV",
      currently_label: "SAAT INI",
      currently: "Kasir & manajemen persediaan, Frozen Food Turen — Terus belajar dan membangun, bahkan di luar pekerjaan sehari-hari.",
      location_label: "LOKASI",
      utc: "UTC+7"
    },
    projects: {
      label: "PROYEK",
      title: "Hal yang saya bangun.",
      subtitle: "Sebagian kecil karya — open-source, proyek sampingan, dan proyek sekolah.",
      pulse_title: "Kue Tart Turen Official Website",
      pulse_desc: "Merancang dan mengembangkan landing page responsif untuk toko Kue Tart Turen untuk menampilkan koleksi kue, memberikan informasi bisnis, serta memudahkan pelanggan menjelajahi produk dan menghubungi bisnis.",
      live: "Demo",
      keycap_title: "Sistem Manajemen Peminjaman Alat",
      keycap_desc: "Aplikasi web untuk mengelola peminjaman dan pengembalian alat menggunakan sistem akses berbasis peran. Aplikasi ini memberikan hak akses terpisah untuk Admin, Staff, dan Peminjam.",
      docs: "Dokumen",
      cargo_title: "Aplikasi Absensi Siswa",
      cargo_desc: "Aplikasi manajemen absensi siswa berbasis peran menggunakan Java Swing di NetBeans. Sistem menyediakan akses terpisah untuk Admin, Staff, dan Siswa, dengan fitur yang disesuaikan untuk masing-masing peran guna mendukung pencatatan absensi dan menyederhanakan pengelolaan absensi sekolah.",
      case_study: "Repositori",
      ledgr_title: "Ledgr",
      ledgr_desc: "Aplikasi keuangan pribadi double-entry dengan sinkronisasi offline-first dan tampilan ledger yang sangat minimalis."
    },
    skills: {
      label: "KEAHLIAN",
      title: "Perangkat kerja.",
      technical: "Keahlian Teknis",
      technical_list: ["JavaScript", "Astro", "CSS / Tailwind / Bootstrap", "MySQL", "PHP"],
      soft: "Keahlian Non-Teknis",
      communication: "Komunikasi",
      communication_desc: "Menerjemahkan pertimbangan teknis ke bahasa sederhana untuk stakeholder.",
      mentorship: "Kemampuan Bahasa Inggris Pasif",
      mentorship_desc: "Mampu memahami bahasa Inggris tertulis dan mengikuti komunikasi bahasa Inggris dasar.",
      problem: "Pembingkaian Masalah",
      problem_desc: "Menentukan pertanyaan yang tepat sebelum mencari solusi.",
      self: "Mandiri",
      self_desc: "Mengelola proyek ambigu secara menyeluruh tanpa pengawasan ketat.",
      empathy: "Berpikir Kritis",
      empathy_desc: "Mampu menganalisis informasi, mengevaluasi opsi, dan menyelesaikan masalah secara logis.",
      adaptability: "Adaptabilitas",
      adaptability_desc: "Berpindah antar tech stack dan memegang banyak peran sesuai kebutuhan tim."
    },
    journey: {
      label: "PERJALANAN",
      title: "Pengalaman & pendidikan.",
      experience_label: "PENGALAMAN",
      education_label: "PENDIDIKAN",
      exp1_title: "Kasir & Manajemen Persediaan",
      exp1_desc: "Menangani transaksi pelanggan harian, mencatat pembelian, dan membantu pelacakan persediaan serta pembukuan.",
      exp2_title: "Asisten Teknisi Ponsel",
      exp2_desc: "Membantu perakitan, pembongkaran, dan pengujian ponsel pintar, serta mengelola perlengkapan teknis, dokumentasi suku cadang, dan faktur klien.",
      exp3_title: "Desainer Grafis & Operator Cetak",
      exp3_desc: "Merancang materi promosi dan mengoperasikan peralatan cetak untuk menghasilkan buku, kalender, stiker, dan produk cetak lainnya.",
      edu1_title: "SMKS Turen — Rekayasa Perangkat Lunak (RPL)",
      edu1_desc: "Mempelajari Rekayasa Perangkat Lunak dengan fokus pada pengembangan web, pengembangan aplikasi desktop menggunakan Java, dan manajemen basis data menggunakan MySQL.",
      edu2_title: "SMPN 01 Turen",
      edu2_desc: "Menyelesaikan pendidikan sekolah menengah pertama, mengembangkan pengetahuan dasar, kedisiplinan, dan keterampilan kerja sama."
    },
    contact: {
      label: "KONTAK",
      title: "Mari membangun sesuatu.",
      intro: "Terbuka untuk proyek freelance, peran full-time, dan kolaborasi menarik. Biasanya membalas dalam sehari.",
      email_label: "EMAIL",
      whatsapp_label: "WHATSAPP",
      github_label: "GITHUB",
      linkedin_label: "LINKEDIN",
      email_value: "raven@aldrev.dev",
      whatsapp_value: "+62 812-3456-7890",
      github_value: "github.com/indohum4n",
      linkedin_value: "linkedin.com/in/raven-ald",
      cta: "Punya proyek dalam pikiran, pertanyaan, atau sekadar ingin menyapa? Jangan ragu untuk menghubungi — saya selalu senang terhubung dan menjelajahi peluang baru.",
      response_label: "WAKTU TANGGAP",
      response: "Biasanya dalam 24 jam"
    },
    footer: {
      built: "Dibuat dengan hati-hati, di Jakarta."
    },
    toast: {
    title: "Ganti Bahasa?",
    desc: "Anda bisa mengubah bahasa ke bahasa Inggris menggunakan tombol di kanan atas."
    }
  }
};

/**
 * Inisialisasi i18next.
 * Karena seluruh kamus sudah didefinisikan inline (tidak perlu fetch JSON),
 * kita tidak memakai i18next-http-backend.
 */
i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: { translation: translations.en },
    id: { translation: translations.id }
  }
});

/**
 * Terapkan terjemahan ke semua elemen yang punya attribute i18next:
 *   - `data-i18n="key"`              → textContent
 *   - `data-i18n-placeholder="key"` → placeholder
 */
function applyTranslations() {
  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = i18next.t(key);
    if (value) el.textContent = value;
  });

  // placeholder (input / textarea)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = i18next.t(key);
    if (value) el.setAttribute('placeholder', value);
  });

  // sync <html lang="...">
  document.documentElement.lang = i18next.language;
}

/** Ambil kode bahasa aktif saat ini ('en' atau 'id'). */
function getCurrentLang() {
  return i18next.language || 'en';
}

/** Toggle antara EN ↔ ID, kemudian re-apply terjemahan ke DOM. */
function toggleLanguage() {
  const next = getCurrentLang() === 'en' ? 'id' : 'en';
  i18next.changeLanguage(next, () => {
    applyTranslations();
    // beri sinyal ke komponen lain (mis. typewriter) supaya refresh
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: next } }));
  });
  return next;
}

// Apply pertama kali setelah DOM siap
document.addEventListener('DOMContentLoaded', applyTranslations);

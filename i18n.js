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
      cargo_title: "Cargo Atlas",
      cargo_desc: "A logistics routing platform handling 30k daily shipments across Southeast Asia, with a map-driven dispatcher UI.",
      case_study: "Case Study",
      ledgr_title: "Ledgr",
      ledgr_desc: "A double-entry personal finance app with offline-first sync and an obsessively minimalist ledger view."
    },
    skills: {
      label: "SKILLS",
      title: "Tools of the trade.",
      technical: "Technical Skills",
      soft: "Soft Skills",
      communication: "Communication",
      communication_desc: "Translating technical trade-offs into plain language for stakeholders.",
      mentorship: "Mentorship",
      mentorship_desc: "Onboarding juniors and running weekly code-review sessions.",
      problem: "Problem Framing",
      problem_desc: "Defining the right question before reaching for a solution.",
      self: "Self-Direction",
      self_desc: "Owning ambiguous projects end-to-end without hand-holding.",
      empathy: "Empathy",
      empathy_desc: "Designing with accessibility and real-user constraints in mind.",
      adaptability: "Adaptability",
      adaptability_desc: "Switching stacks and wearing multiple hats as the team needs."
    },
    journey: {
      label: "JOURNEY",
      title: "Experience & education.",
      experience_label: "EXPERIENCE",
      education_label: "EDUCATION",
      exp1_title: "Senior Frontend Engineer",
      exp1_desc: "Lead the design-system rebuild, cut bundle size by 47%, and mentor three mid-level engineers. Owner of the data-viz library used across six internal products.",
      exp2_title: "Full-Stack Engineer",
      exp2_desc: "Built the dispatcher UI and routing engine from scratch. Shipped the MVP in four months and scaled it to 30k daily shipments.",
      exp3_title: "Junior Web Developer",
      exp3_desc: "Delivered marketing sites and small web apps for local clients. First exposure to CI/CD and accessibility audits.",
      edu1_title: "B.Sc. Computer Science",
      edu1_desc: "Thesis on real-time collaborative editing using CRDTs. Graduated cum laude with a 3.78 GPA.",
      edu2_title: "Reactor — Frontend Bootcamp",
      edu2_desc: "A 12-week intensive program bridging academia and production-grade frontend engineering.",
      edu3_title: "Certifications",
      edu3_desc: "AWS Solutions Architect Associate, Certified Kubernetes Administrator, and IAAP accessibility practitioner."
    },
    contact: {
      label: "CONTACT",
      title: "Let's build something.",
      intro: "Open to freelance projects, full-time roles, and interesting collaborations. I usually reply within a day.",
      name: "NAME",
      name_ph: "Your name",
      email: "EMAIL",
      email_ph: "you@example.com",
      message: "MESSAGE",
      message_ph: "Tell me about the project...",
      encrypted: "Encrypted in transit",
      send: "Send message",
      success: "Thanks! Your message has been queued.",
      response_label: "RESPONSE TIME",
      response: "Usually within 24 hours"
    },
    footer: {
      built: "Built with care, in Jakarta."
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
      intro: "Seorang full-stack engineer yang berfokus pada frontend, membangun antarmuka yang tenang, cepat, dan aksesibel. Saya mengubah ide samar menjadi produk yang siap rilis.",
      view_projects: "Lihat Proyek",
      contact: "Hubungi saya",
      est: "SEJAK 2019",
      typewriter: ["Frontend Engineer.", "Full-Stack Developer.", "Tinkerer Open-Source.", "IoT Enthusiast."]
    },
    about: {
      label: "TENTANG",
      title: "Lebih dari sekadar kode.",
      bio1: "Saya seorang software engineer berbasis di Jakarta dengan pengalaman lima tahun merilis produk di sektor fintech, logistik, dan developer tooling. Karya saya berada di persimpangan antara engineering yang rapi dan desain yang matang — halaman cepat, state yang masuk akal, dan antarmuka yang tidak menyulitkan pengguna.",
      bio2: "Saat tidak di depan keyboard, saya biasanya memugar mechanical keyboard, menyeduh pour-over, dan berkontribusi pada library open-source kecil.",
      years: "tahun pengalaman",
      projects: "proyek dirilis",
      repos: "repo open-source",
      download_cv: "Unduh CV",
      currently_label: "SAAT INI",
      currently: "Senior Frontend Engineer di Lumen Labs — membangun tooling data internal.",
      location_label: "LOKASI",
      utc: "UTC+7"
    },
    projects: {
      label: "PROYEK",
      title: "Hal yang saya bangun.",
      subtitle: "Sebagian kecil karya — open-source, proyek sampingan, dan klien.",
      pulse_title: "Kue Tart Turen Official Website",
      pulse_desc: "Website resmi untuk toko kue tart turen dengan fitur e-commerce dan penjadwalan pemesanan.",
      live: "Demo",
      keycap_title: "Keycap CLI",
      keycap_desc: "Tool command-line yang mengompilasi dan men-flash layout keyboard kustom secara lokal — tanpa akun, tanpa cloud, hanya QMK dengan ergonomi yang lebih ramah.",
      docs: "Dokumen",
      cargo_title: "Cargo Atlas",
      cargo_desc: "Platform routing logistik yang menangani 30 ribu pengiriman harian di Asia Tenggara, dengan UI dispatcher berbasis peta.",
      case_study: "Studi Kasus",
      ledgr_title: "Ledgr",
      ledgr_desc: "Aplikasi keuangan pribadi double-entry dengan sinkronisasi offline-first dan tampilan ledger yang sangat minimalis."
    },
    skills: {
      label: "KEAHLIAN",
      title: "Perangkat kerja.",
      technical: "Keahlian Teknis",
      soft: "Keahlian Non-Teknis",
      communication: "Komunikasi",
      communication_desc: "Menerjemahkan pertimbangan teknis ke bahasa sederhana untuk stakeholder.",
      mentorship: "Pembimbingan",
      mentorship_desc: "Membimbing junior dan memimpin sesi code-review mingguan.",
      problem: "Pembingkaian Masalah",
      problem_desc: "Menentukan pertanyaan yang tepat sebelum mencari solusi.",
      self: "Mandiri",
      self_desc: "Mengelola proyek ambigu secara menyeluruh tanpa pengawasan ketat.",
      empathy: "Empati",
      empathy_desc: "Berkarya dengan mempertimbangkan aksesibilitas dan batasan pengguna nyata.",
      adaptability: "Adaptabilitas",
      adaptability_desc: "Berpindah antar tech stack sesuai kebutuhan tim."
    },
    journey: {
      label: "PERJALANAN",
      title: "Pengalaman & pendidikan.",
      experience_label: "PENGALAMAN",
      education_label: "PENDIDIKAN",
      exp1_title: "Senior Frontend Engineer",
      exp1_desc: "Memimpin pembangunan ulang design system, memangkas ukuran bundle sebesar 47%, dan membimbing tiga engineer mid-level. Pemilik library visualisasi data yang digunakan di enam produk internal.",
      exp2_title: "Full-Stack Engineer",
      exp2_desc: "Membangun UI dispatcher dan mesin routing dari nol. Merilis MVP dalam empat bulan dan menskalakannya hingga 30 ribu pengiriman harian.",
      exp3_title: "Junior Web Developer",
      exp3_desc: "Membangun situs pemasaran dan aplikasi web kecil untuk klien lokal. Pertama kali terpapar CI/CD dan audit aksesibilitas.",
      edu1_title: "S.Kom. Ilmu Komputer",
      edu1_desc: "Skripsi tentang penyuntingan kolaboratif real-time menggunakan CRDT. Lulus cum laude dengan IPK 3.78.",
      edu2_title: "Reactor — Bootcamp Frontend",
      edu2_desc: "Program intensif 12 minggu yang menjembatani akademisi dan rekayasa frontend tingkat produksi.",
      edu3_title: "Sertifikasi",
      edu3_desc: "AWS Solutions Architect Associate, Certified Kubernetes Administrator, dan praktisi aksesibilitas IAAP."
    },
    contact: {
      label: "KONTAK",
      title: "Mari membangun sesuatu.",
      intro: "Terbuka untuk proyek freelance, peran full-time, dan kolaborasi menarik. Biasanya membalas dalam sehari.",
      name: "NAMA",
      name_ph: "Nama Anda",
      email: "EMAIL",
      email_ph: "anda@contoh.com",
      message: "PESAN",
      message_ph: "Ceritakan tentang proyek Anda...",
      encrypted: "Terenkripsi saat transit",
      send: "Kirim pesan",
      success: "Terima kasih! Pesan Anda telah masuk antrian.",
      response_label: "WAKTU TANGGAP",
      response: "Biasanya dalam 24 jam"
    },
    footer: {
      built: "Dibuat dengan hati-hati, di Jakarta."
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

/**
 * main.js — Seluruh logika UI (selain inisialisasi i18next)
 * --------------------------------------------------------------
 * Bergantung pada `i18n.js` (yang mengekspos i18next, applyTranslations,
 * getCurrentLang, toggleLanguage) — PASTIKAN i18n.js dimuat sebelum file ini.
 *
 * Modul yang ada di sini:
 *   1. Translate button  — toggle EN/ID + update label "EN"/"ID"
 *   2. Typewriter         — phrases diambil dari i18next.t('home.typewriter')
 *   3. Mobile menu        — toggle buka/tutup, ganti ikon bars ↔ xmark
 *   4. Active nav scroll  — sorot nav-link sesuai section yang terlihat
 *   5. Reveal on scroll  — animasi .reveal + isi .skill-fill saat masuk viewport
 *   6. Contact section    — form dihapus, diganti direct links (Email/WA/GitHub/LinkedIn)
 *
 * Tidak ada lagi referensi ke `data-en` / `data-id` — semua lewat i18next.
 */

(function () {
    // ──────────────────────────────────────────────────────────────
  // PRELOADER FADE OUT & CONTENT FADE IN
  // ──────────────────────────────────────────────────────────────
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    // Beri jeda 800ms agar loading bar sempat terlihat
    setTimeout(() => {
      preloader.classList.add('hidden');     // Preloader memudar (fade out)
      document.body.classList.add('loaded'); // Konten website muncul (fade in)
    }, 800);
  });
  

  // ──────────────────────────────────────────────────────────────
  // 1. TRANSLATE BUTTON
  // ──────────────────────────────────────────────────────────────
  const translateBtn = document.getElementById('translateBtn');
  const langLabel = document.getElementById('langLabel');

  function refreshLangUI() {
    const lang = getCurrentLang();
    langLabel.textContent = lang.toUpperCase();
    translateBtn.classList.toggle('active', lang === 'id');
  }
  translateBtn.addEventListener('click', () => {
    toggleLanguage();           // i18n.js akan dispatch 'languageChanged'
  });
  document.addEventListener('languageChanged', refreshLangUI);
  refreshLangUI(); // init awal

  // ──────────────────────────────────────────────────────────────
  // 2. TYPEWRITER
  //    Phrases diambil dari i18next: home.typewriter (array of string)
  // ──────────────────────────────────────────────────────────────
  const tw = document.getElementById('typewriter');
  let phraseIdx = 0, charIdx = 0, deleting = false;
  let typewriterTimer = null;

  function getPhrases() {
    const list = i18next.t('home.typewriter', { returnObjects: true });
    return Array.isArray(list) ? list : [];
  }

  function typeLoop() {
    const list = getPhrases();
    if (!list.length) return;
    const current = list[phraseIdx % list.length];
    if (!deleting) {
      charIdx++;
      tw.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        typewriterTimer = setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      charIdx--;
      tw.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % list.length;
      }
    }
    typewriterTimer = setTimeout(typeLoop, deleting ? 45 : 90);
  }
  // Reset & restart ketika bahasa berganti
  document.addEventListener('languageChanged', () => {
    if (typewriterTimer) clearTimeout(typewriterTimer);
    charIdx = 0; deleting = false; phraseIdx = 0;
    typeLoop();
  });
  typeLoop();

  // ──────────────────────────────────────────────────────────────
  // 3. MOBILE MENU
  // ──────────────────────────────────────────────────────────────
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileToggle.querySelector('i').className =
      mobileMenu.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // ──────────────────────────────────────────────────────────────
  // 4. ACTIVE NAV ON SCROLL
  // ──────────────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav .nav-link');
  function updateActive() {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(l =>
      l.classList.toggle('active', l.getAttribute('href') === '#' + current)
    );
  }
  window.addEventListener('scroll', updateActive, { passive: true });

  // ──────────────────────────────────────────────────────────────
  // 5. REVEAL ON SCROLL + SKILL BARS
  // ──────────────────────────────────────────────────────────────
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.w;
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ──────────────────────────────────────────────────────────────
  // 6. CONTACT SECTION
  //    The contact form has been removed in favor of direct
  //    Email / WhatsApp / GitHub / LinkedIn links. Nothing to
  //    wire up here anymore, but the section is kept as a placeholder
  //    for future interactivity (e.g. analytics on link clicks).
  // ──────────────────────────────────────────────────────────────

    // ──────────────────────────────────────────────────────────────
  // 7. LANGUAGE TOAST NOTIFICATION
  // ──────────────────────────────────────────────────────────────
  const langToast = document.getElementById('langToast');
  const closeToastBtn = document.getElementById('closeToast');

  function showLangToast() {
    if (!langToast) return;
    // Muncul setelah 2 detik web dibuka
    setTimeout(() => {
      langToast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      langToast.classList.add('opacity-100', 'translate-y-0');
    }, 2000);

    // Hilang otomatis setelah 9 detik
    setTimeout(() => hideLangToast(), 9000);
  }

  function hideLangToast() {
    if (!langToast) return;
    langToast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    langToast.classList.remove('opacity-100', 'translate-y-0');
  }

  // Jika tombol close (X) diklik
  if (closeToastBtn) closeToastBtn.addEventListener('click', hideLangToast);
  
  // Jika tombol translate diklik, langsung sembunyikan toast
  translateBtn.addEventListener('click', hideLangToast);

  // Jalankan notifikasi
  showLangToast();
})();

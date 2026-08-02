// --- Efeito de digitação ---
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 170 * i);
  });
}

const titulo = document.querySelector("h1");
if (titulo) {
  typeWriter(titulo);
}

// --- Variáveis Globais para os Menus ---

const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-center");
const settingsToggle = document.getElementById("settingsToggle");
const settingsMenu = document.getElementById("settingsMenu");
const darkModeToggle = document.getElementById("darkModeToggle");


// --- Funções para controlar a visibilidade dos menus ---

function closeNavMenu() {
    if (navList.classList.contains("active")) {
        navList.classList.remove("active");
        const icon = hamburger?.querySelector("i");
        if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        }
    }
}

function closeSettingsMenu() {
    if (settingsMenu.style.display === "block") {
        settingsMenu.style.display = "none";
    }
}

// --- Menu mobile ---

if (hamburger && navList) {
    const hamburgerIcon = hamburger.querySelector("i");

    hamburger.addEventListener("click", () => {
        closeSettingsMenu();
        navList.classList.toggle("active");

        if (hamburgerIcon) {
            const isOpen = navList.classList.contains("active");
            hamburgerIcon.classList.toggle("fa-bars", !isOpen);
            hamburgerIcon.classList.toggle("fa-xmark", isOpen);
        }
    });
}

// --- Menu de configurações ---

if (settingsToggle && settingsMenu) {
    settingsToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        closeNavMenu();
        settingsMenu.style.display =
            settingsMenu.style.display === "block" ? "none" : "block";
    });

    // Fecha os menus ao clicar fora deles
    
    document.addEventListener("click", (event) => {
        const clickedOutsideSettings = !settingsMenu.contains(event.target) && !settingsToggle.contains(event.target);
        const clickedOutsideNav = !navList.contains(event.target) && !hamburger.contains(event.target);

        if (clickedOutsideSettings && clickedOutsideNav) {
            closeNavMenu();
            closeSettingsMenu();
        }
    });
}


// --- Dark mode ---

if (darkModeToggle) {
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    // Salvar preferência

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }

  // Luz do mouse

  document.addEventListener("mousemove", (e) => {
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
        spotlight.style.setProperty("--x", `${e.clientX}px`);
        spotlight.style.setProperty("--y", `${e.clientY}px`);
    }
  });
}

// --- Rolagem centralizada ao clicar nos links da navbar ---

document.querySelectorAll('.nav-list a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTo = sectionTop - ((windowHeight - sectionHeight) / 2);

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  });
});

// --- Scrollspy: destaca o link da seção visível na navbar ---

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

if (sections.length && navLinks.length) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => spyObserver.observe(section));
}

// --- Botão Voltar ao topo ---

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Ano dinâmico no rodapé ---

const footerYear = document.getElementById('footerYear');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// --- Lightbox das imagens de projeto ---

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  const thumb = e.target.closest('.project-thumb');
  if (thumb) {
    const src = thumb.dataset.lightbox || thumb.querySelector('img')?.src;
    const alt = thumb.querySelector('img')?.alt;
    if (src) openLightbox(src, alt);
  }
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
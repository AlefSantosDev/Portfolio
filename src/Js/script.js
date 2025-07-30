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
    }
}

function closeSettingsMenu() {
    if (settingsMenu.style.display === "block") {
        settingsMenu.style.display = "none";
    }
}

// --- Menu Hambúrguer para mobile ---

if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
        closeSettingsMenu();
        navList.classList.toggle("active");
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
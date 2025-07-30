const translations = {
  pt: {
    homeTitle: "Inicio",
    aboutTitle: "Sobre Mim",
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    contactTitle: "Contato",
    aboutme: "Sobre mim",
    theme: "Alterar tema",
    languages: "Idiomas",
    paragraph: "Atualmente cursando Sistemas de Informação na Universidade Santa Cecília, em Santos, sou residente de Cubatão (SP). Entusiasta de soluções baseadas em Inteligência Artificial, desenvolvimento back-end e aplicações web. Valorizo boas práticas de codificação, organização estruturada de projetos e foco na experiência do usuário.",
    skills: "Habilidades",
    projects: "Projetos",
    calcTittle: "Calculadora de Ganhos",
    calcDesc: "Um app em Python que calcula automaticamente o total de horas trabalhadas e os ganhos diários.",
    botTittle: "Bot WhatsApp (n8n)",
    botDesc: "Bot de automação com mensagens de saudação únicas e controle de fluxo via n8n + Waha.",
    contact: "Contato",
    contactSubtitle: "Entre em contato comigo preenchendo o formulário ou usando os dados abaixo.",
    soonText: "Em breve você verá mais projetos aqui.",
    phone: "Telefone",
    sendMsg: "Envie uma mensagem",
    yourEmail: "Seu email",
    mesage: "Mensagem",
    send: "Enviar",
  },

  en: {
    homeTitle: "Home",
    aboutTitle: "About Me",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    aboutme: "About Me",
    theme: "Change theme",
    languages: "languages",
    paragraph: "Currently studying Information Systems at Santa Cecília University in Santos, I reside in Cubatão, São Paulo. I am an enthusiast of AI-based solutions, back-end development, and web applications. I value clean coding practices, well-structured project organization, and a strong focus on user experience.",
    skills: "Skills",
    projects: "Projects",
    calcTittle: "Earnings Calculator",
    calcDesc: "A Python app that automatically calculates the total hours worked and daily earnings.",
    botTittle: "WhatsApp Bot (n8n)",
    botDesc: "Automation bot with unique greeting messages and flow control via n8n + Waha.",
    write: "oii",
    contact: "Contact",
    contactSubtitle: "Get in touch with me by filling out the form or using the information below.",
    soonText: "You will see more projects here soon.",
    phone: "Phone",
    sendMsg: "Send a Message",
    yourEmail: "Your Email",
    mesage: "Message",
    send: "Send",
  },

  es: {
    homeTitle: "Inicio",
    aboutTitle: "Sobre Mí",
    skillsTitle: "Habilidades",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    aboutme: "Sobre Mí",
    theme: "Cambiar tema",
    languages: "Idiomas",
    paragraph: "Actualmente estudio Sistemas de Información en la Universidad Santa Cecília, en Santos, y resido en Cubatão, São Paulo. Soy un entusiasta de las soluciones basadas en inteligencia artificial, el desarrollo back-end y las aplicaciones web. Valoro las buenas prácticas de codificación, la organización estructurada de proyectos y el enfoque en la experiencia del usuario.",
    skills: "Habilidades",
    projects: "Proyectos",
    calcTittle: "Calculadora de Ganancias",
    calcDesc: "Una aplicación en Python que calcula automáticamente el total de horas trabajadas y las ganancias diarias.",
    botTittle: "Bot de WhatsApp (n8n)",
    botDesc: "Bot de automatización con mensajes de saludo únicos y control de flujo vía n8n + Waha.",
    contact: "Contacto",
    contactSubtitle: "Ponte en contacto conmigo llenando el formulario o usando los datos a continuación.",
    soonText: "Pronto verás más proyectos aquí.",
    phone: "Teléfono",
    sendMsg: "Enviar un Mensaje",
    yourEmail: "Tu email",
    mesage: "Mensaje",
    send: "Enviar",
  }
};

const languageSelect = document.getElementById("language");

function typeWriter(el, text) {
  el.innerHTML = '';
  text.split('').forEach((letra, i) => {
    setTimeout(() => {
      el.innerHTML += letra;
    }, 170 * i);
  });
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Seleciona TODOS os elementos que têm a nossa chave de tradução
  const elementsToTranslate = document.querySelectorAll("[data-translate-key]");

  elementsToTranslate.forEach(el => {
    const key = el.getAttribute("data-translate-key");
    if (t[key]) {
      if (key === "typing") {
        // Supondo que o elemento do typewriter tenha um ID ou seja único
        const typingEl = document.getElementById("typing"); // ou o seletor que preferir
        if(typingEl) typeWriter(typingEl, t[key]);
      } else {
        el.textContent = t[key];
      }
    }
  });
}

languageSelect.addEventListener("change", () => {
  applyTranslations(languageSelect.value);
});

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(languageSelect.value);
});

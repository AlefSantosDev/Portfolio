const translations = {
  pt: {
    homeTitle: "Inicio",
    aboutTitle: "Sobre Mim",
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    contactTitle: "Contato",
    educationTitle: "Educação",
    aboutme: "Sobre mim",
    theme: "Alterar tema",
    languages: "Idiomas",
    experience: "Educação",
    paragraph: "Atualmente cursando Sistemas de Informação na Universidade Santa Cecília, em Santos, sou residente de Cubatão - SP. Entusiasta de soluções baseadas em Inteligência Artificial, desenvolvimento back-end e aplicações web. Valorizo boas práticas de codificação, organização estruturada de projetos e foco na experiência do usuário.",
    highscholl: "Concluí o Ensino Médio com foco em disciplinas de exatas, desenvolvendo habilidades em lógica, matemática e resolução de problemas. Durante esse período, também participei de projetos escolares voltados à tecnologia.",
    technician: "Formação técnica voltada para o suporte ao usuário, manutenção de computadores, redes e suporte técnico. Durante o curso, tive contato com linguagens de programação, bancos de dados e práticas de infraestrutura.",
    bachelor: "Curso superior focado em desenvolvimento de software, arquitetura de sistemas, inteligência artificial e gestão de projetos. Aprimoro constantemente minhas habilidades em programação.",
    scholltittle: "Ensino Médio",
    techniciantittle: "Técnico em Informática",
    bachelortittle: "Bacharelado em Sistemas de Informação",
    skills: "Habilidades",
    projects: "Projetos",
    calcTittle: "Calculadora de Ganhos",
    calcDesc: "Um app em Python que calcula automaticamente o total de horas trabalhadas e os ganhos diários.",
    botTittle: "Termo Cesari (Wordle)",
    botDesc: "Termo Cesari é um jogo inspirado no Wordle e Termo, desenvolvido para gamificar situações do dia a dia na empresa Cesari.",
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
    educationTitle: "Education",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    aboutme: "About Me",
    theme: "Change theme",
    languages: "languages",
    experience: "Education",
    paragraph: "Currently studying Information Systems at Santa Cecília University in Santos, I reside in Cubatão, São Paulo. I am an enthusiast of AI-based solutions, back-end development, and web applications. I value clean coding practices, well-structured project organization, and a strong focus on user experience.",
    highscholl: "I completed high school with a focus on STEM subjects, developing skills in logic, mathematics, and problem-solving. During this period, I also participated in school projects related to technology.",
    technician: "Technical training focused on user support, computer maintenance, networks, and technical assistance. During the course, I gained experience with programming languages, databases, and infrastructure practices",
    bachelor: "Undergraduate degree focused on software development, systems architecture, artificial intelligence, and project management. I continuously improve my programming skills.",
    scholltittle: "High School",
    techniciantittle: "Computer Technician",
    bachelortittle: "Bachelor's in Information Systems",
    skills: "Skills",
    projects: "Projects",
    calcTittle: "Earnings Calculator",
    calcDesc: "A Python app that automatically calculates the total hours worked and daily earnings.",
    botTittle: "Termo Cesari (Wordle)",
    botDesc: "Termo Cesari is a game inspired by Wordle and Termo, developed to gamify everyday situations at the company Cesari.",
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
    educationTitle: "Educación",
    skillsTitle: "Habilidades",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    aboutme: "Sobre Mí",
    theme: "Cambiar tema",
    languages: "Idiomas",
    experience: "Educación",
    paragraph: "Actualmente estudio Sistemas de Información en la Universidad Santa Cecília, en Santos, y resido en Cubatão, São Paulo. Soy un entusiasta de las soluciones basadas en inteligencia artificial, el desarrollo back-end y las aplicaciones web. Valoro las buenas prácticas de codificación, la organización estructurada de proyectos y el enfoque en la experiencia del usuario.",
    highscholl: "Completé la educación secundaria con un enfoque en materias exactas, desarrollando habilidades en lógica, matemáticas y resolución de problemas. Durante ese período, también participé en proyectos escolares relacionados con la tecnología.",
    technician: "Formación técnica centrada en el soporte al usuario, mantenimiento de computadoras, redes y asistencia técnica. Durante el curso, tuve contacto con lenguajes de programación, bases de datos y prácticas de infraestructura.",
    bachelor: "Carrera universitaria enfocada en el desarrollo de software, arquitectura de sistemas, inteligencia artificial y gestión de proyectos. Mejoro constantemente mis habilidades de programación.",
    scholltittle: "Educación Secundaria",
    techniciantittle: "Técnico en Informática",
    bachelortittle: "Licenciatura en Sistemas de Información",
    skills: "Habilidades",
    projects: "Proyectos",
    calcTittle: "Calculadora de Ganancias",
    calcDesc: "Una aplicación en Python que calcula automáticamente el total de horas trabajadas y las ganancias diarias.",
    botTittle: "Termo Cesari (Wordle)",
    botDesc: "Termo Cesari es un juego inspirado en Wordle y Termo, desarrollado para gamificar situaciones cotidianas en la empresa Cesari.",
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

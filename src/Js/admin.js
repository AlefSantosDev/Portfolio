import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-vaw2QpHagdjyKPyH0cXxbmLswal86Uo",
    authDomain: "portfolio-e179c.firebaseapp.com",
    projectId: "portfolio-e179c",
    storageBucket: "portfolio-e179c.firebasestorage.app",
    messagingSenderId: "1047860770726",
    appId: "1:1047860770726:web:6afd51307c7b050b4f4167",
    measurementId: "G-MQ6ZHL106E"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarProjetos() {
    const container = document.getElementById('meus-projetos-dinamicos');
    container.innerHTML = '<p>Carregando projetos...</p>'; // Mensagem enquanto carrega

    try {
        const querySnapshot = await getDocs(collection(db, "projetos"));
        container.innerHTML = ''; // Limpa o "carregando"

        querySnapshot.forEach((doc) => {
            const projeto = doc.data();

            const cardHTML = `
                <div class="project-card">
                    <img src="${projeto.linkImagem}" alt="${projeto.titulo}">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.linkProjeto}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    } catch (erro) {
        console.error("Erro ao buscar projetos: ", erro);
        container.innerHTML = '<p>Erro ao carregar projetos.</p>';
    }
}

// Executa a função quando abrir o site
carregarProjetos();
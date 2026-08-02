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

function renderSkeleton(container) {
    let skeletons = '';
    for (let i = 0; i < 3; i++) {
        skeletons += `
            <div class="project-card project-skeleton">
                <div class="skeleton-block skeleton-img"></div>
                <div class="skeleton-block skeleton-line" style="width: 60%;"></div>
                <div class="skeleton-block skeleton-line" style="width: 90%;"></div>
                <div class="skeleton-block skeleton-line" style="width: 40%;"></div>
            </div>
        `;
    }
    container.innerHTML = skeletons;
}

function renderEmptyState(container) {
    container.innerHTML = `
        <div class="empty-state">
            <i class="fa-solid fa-box-open"></i>
            <p data-translate-key="soonText">Em breve você verá mais projetos aqui.</p>
        </div>
    `;
    if (typeof window.applyTranslations === 'function') {
        const lang = document.getElementById('language')?.value || 'pt';
        window.applyTranslations(lang);
    }
}

function renderErrorState(container) {
    container.innerHTML = `
        <div class="empty-state empty-state-error">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <p>Não foi possível carregar os projetos agora. Tente novamente mais tarde.</p>
        </div>
    `;
}

async function carregarProjetos() {
    const container = document.getElementById('meus-projetos-dinamicos');
    if (!container) return;

    renderSkeleton(container);

    try {
        const querySnapshot = await getDocs(collection(db, "projetos"));

        if (querySnapshot.empty) {
            renderEmptyState(container);
            return;
        }

        container.innerHTML = '';

        querySnapshot.forEach((doc) => {
            const projeto = doc.data();

            const cardHTML = `
                <div class="project-card">
                    <div class="project-thumb" data-lightbox="${projeto.linkImagem}">
                        <img src="${projeto.linkImagem}" alt="${projeto.titulo}" loading="lazy">
                    </div>
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.linkProjeto}" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    } catch (erro) {
        console.error("Erro ao buscar projetos: ", erro);
        renderErrorState(container);
    }
}

// Executa a função quando abrir o site
carregarProjetos();
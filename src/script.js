/**
 * Architecture & UX Engine - Neto Consultor de Imóveis
 * Versão Otimizada de Alta Performance (Padrão Enterprise SaaS)
 */

// Centralização de Configurações Globais
const CONFIG = {
    whatsappNumber: "5563999999999", // Altere para o número real do corretor
    minSwipeDistance: 50
};

const propertiesData = [
    {
        id: 1,
        title: "Palmeira Solare",
        localizacao: "Região Sul",
        bairroExt: "Região Sul de Palmas",
        status: "Em Obras",
        quartos: 3,
        area: 145,
        image: "assets/img/solare/solare.png",
        gallery: [
            "assets/img/solare/solare.png",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "O Palmeira Solare une arquitetura bioclimática inteligente com o bem-estar que sua família merece. Projetado estrategicamente para otimizar a iluminação natural e a ventilação, proporcionando um ambiente fresco e sofisticado na cobiçada Região Sul de Palmas.",
        benefits: ["Área de Lazer Completa", "Varanda Gourmet Integrada", "2 Vagas de Garagem Cobertas", "Piscina com Raia", "Portaria Privativa com Clausura"]
    },
    {
        id: 2,
        title: "Palmeira Serena",
        localizacao: "Orla",
        bairroExt: "Orla de Palmas - Tocantins",
        status: "Lançamento",
        quartos: 4,
        area: 210,
        image: "assets/img/serena/serene.png",
        gallery: [
            "assets/img/serena/serene.png",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Viva em um verdadeiro refúgio de tranquilidade com vista permanente para o lago. O Palmeira Serena redefine o conceito de alto luxo, combinando plantas amplas, acabamentos nobres em porcelanato de grandes formatos e automação total.",
        benefits: ["Pé-direito Duplo na Sala", "Elevador com Biometria", "Varanda de 35m² com Churrasqueira", "SPA com Hidromassagem", "Vagas para Carro Elétrico"]
    },
    {
        id: 3,
        title: "Palmeira Boreal",
        localizacao: "Plano Diretor",
        bairroExt: "Plano Diretor Central",
        status: "Lançamento",
        quartos: 3,
        area: 128,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Inspirado na sofisticação moderna, o Palmeira Boreal traz traços contemporâneos incomparáveis e uma infraestrutura urbana de excelência no centro empresarial e de conveniências de Palmas.",
        benefits: ["Academia no Rooftop", "Espaço Co-working Privativo", "Planta Flexível", "Fechaduras Digitais Inclusas"]
    },
    {
        id: 4,
        title: "Reserva dos Girassóis",
        localizacao: "Região Sul",
        bairroExt: "Região Sul de Palmas",
        status: "Em Obras",
        quartos: 3,
        area: 160,
        image: "assets/img/girassois/girassois.png",
        gallery: [
            "assets/img/girassois/girassois.png",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Segurança, liberdade e contato direto com a natureza. O Reserva dos Girassóis foi desenhado para famílias que valorizam quintal privativo amplo, condomínio fechado horizontal de alto nível e sistemas ecológicos integrados.",
        benefits: ["Condomínio Horizontal Fechado", "Segurança Armada de Elite 24h", "Quadra de Tênis de Saibro", "Energia Solar nas Áreas Comuns"]
    },
    {
        id: 5,
        title: "Residencial Palma",
        localizacao: "Plano Diretor",
        bairroExt: "Plano Diretor Central",
        status: "Pronto",
        quartos: 4,
        area: 285,
        image: "assets/img/palma/palma.png",
        gallery: [
            "assets/img/palma/palma.png",
            "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "O ápice do requinte urbano já disponível para sua mudança. O Residencial Palma oferece apenas um apartamento por andar, conferindo máxima privacidade, conforto acústico absoluto e acabamento padrão AAA.",
        benefits: ["1 Unidade por Andar", "4 Suítes Independentes", "Depósito Privativo no Subsolo", "Lazer Exclusivo Equipado e Decorado"]
    }
];

// Gerenciador de Estado do App (Encapsulado)
const AppState = {
    currentSlideIndex: 0,
    currentGallery: [],
    touchStartX: 0,
    touchEndX: 0
};

// Seletores de Elementos DOM
const DOM = {
    propertiesGrid: document.getElementById('properties-grid'),
    viewHome: document.getElementById('view-home'),
    viewDetails: document.getElementById('view-details'),
    mobileToggle: document.getElementById('mobile-toggle'),
    navMenu: document.getElementById('nav-menu'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxCaption: document.getElementById('lightbox-caption'),
    btnSearch: document.getElementById('btn-search'),
    btnBackHome: document.getElementById('btn-back-home'),
    leadForm: document.getElementById('lead-form'),
    carouselTrack: document.getElementById('carousel-track'),
    carouselThumbnails: document.getElementById('carousel-thumbnails'),
    carouselNext: document.getElementById('carousel-next'),
    carouselPrev: document.getElementById('carousel-prev')
};

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderProperties(propertiesData);
    setupEventListeners();
    setupMobileMenu();
    setupLightbox();
}

// Configuração Centralizada de EventListeners
function setupEventListeners() {
    // Delegação de Evento: Monitora o clique nos botões "Ver Detalhes" de forma limpa
    if (DOM.propertiesGrid) {
        DOM.propertiesGrid.addEventListener('click', (e) => {
            const detailBtn = e.target.closest('.js-btn-details');
            if (detailBtn) {
                const propertyId = parseInt(detailBtn.getAttribute('data-id'), 10);
                openDetails(propertyId);
            }
        });
    }

    // Motores de Filtros e Navegação
    if (DOM.btnSearch) DOM.btnSearch.addEventListener('click', handleFilter);
    if (DOM.btnBackHome) DOM.btnBackHome.addEventListener('click', navigateToHome);
    if (DOM.leadForm) DOM.leadForm.addEventListener('submit', handleLeadSubmit);
    
    if (DOM.carouselNext) DOM.carouselNext.addEventListener('click', nextSlide);
    if (DOM.carouselPrev) DOM.carouselPrev.addEventListener('click', prevSlide);

    // Suporte Global de Teclado (Acessibilidade Avançada)
    document.addEventListener('keydown', (e) => {
        if (DOM.lightbox && DOM.lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        }
    });
}

// Menu Mobile Off-Canvas
function setupMobileMenu() {
    if (!DOM.mobileToggle || !DOM.navMenu) return;

    const icon = DOM.mobileToggle.querySelector('i');

    DOM.mobileToggle.addEventListener('click', () => {
        DOM.navMenu.classList.toggle('active');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            DOM.navMenu.classList.remove('active');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });
}

// Renderizar Cards de Imóveis (Delegação Pronta)
function renderProperties(data) {
    if (!DOM.propertiesGrid) return;
    DOM.propertiesGrid.innerHTML = '';

    if (data.length === 0) {
        DOM.propertiesGrid.innerHTML = `
            <p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 60px 20px; font-weight: 500;">
                Nenhum empreendimento localizado com os critérios selecionados.
            </p>`;
        return;
    }

    // Construção otimizada baseada em fragmentos de string estruturados
    const cardsHtml = data.map(item => `
        <div class="property-card">
            <div class="property-img-box" style="background-image: url('${item.image}')">
                <span class="property-status">${item.status}</span>
            </div>
            <div class="property-info">
                <h3>${item.title}</h3>
                <p class="property-location"><i class="fa-solid fa-location-dot"></i> ${item.bairroExt}</p>
                <div class="property-specs">
                    <span><i class="fa-solid fa-bed"></i> ${item.quartos} Dorms</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${item.area} m² Privativos</span>
                </div>
                <button class="btn btn-outline js-btn-details" style="width: 100%;" data-id="${item.id}">Ver Detalhes</button>
            </div>
        </div>
    `).join('');

    DOM.propertiesGrid.innerHTML = cardsHtml;
}

// Handler do Mecanismo de Filtro Inteligente
function handleFilter() {
    const locVal = document.getElementById('filter-localizacao')?.value || "";
    const statusVal = document.getElementById('filter-status')?.value || "";
    const quartosVal = document.getElementById('filter-quartos')?.value || "";

    const filtered = propertiesData.filter(item => {
        const matchLoc = !locVal || item.localizacao === locVal;
        const matchStatus = !statusVal || item.status === statusVal;
        const matchQuartos = !quartosVal || (quartosVal === "4" ? item.quartos >= 4 : item.quartos == quartosVal);
        return matchLoc && matchStatus && matchQuartos;
    });

    renderProperties(filtered);
}

// Transição de Telas e Renderização de Detalhes
function openDetails(id) {
    const item = propertiesData.find(p => p.id === id);
    if (!item) return;

    // Injeção Direta e Segura de Textos
    document.getElementById('detail-title').innerText = item.title;
    document.getElementById('detail-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.bairroExt}`;
    document.getElementById('detail-status').innerText = item.status;
    document.getElementById('detail-description').innerText = item.description;

    // Renderização em Lote de Benefícios (Elimina loops pesados de injeção na DOM)
    const benefitsContainer = document.getElementById('detail-benefits');
    if (benefitsContainer) {
        benefitsContainer.innerHTML = item.benefits.map(b => `
            <li><i class="fa-solid fa-circle-check"></i> ${b}</li>
        `).join('');
    }

    // Gerenciamento e reset do estado do Slider interno
    AppState.currentGallery = item.gallery;
    AppState.currentSlideIndex = 0;
    buildCarousel();

    // Transição de Views limpa
    if (DOM.viewHome && DOM.viewDetails) {
        DOM.viewHome.classList.add('hidden');
        DOM.viewDetails.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function navigateToHome() {
    if (DOM.viewHome && DOM.viewDetails) {
        DOM.viewDetails.classList.add('hidden');
        DOM.viewHome.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Engenharia Avançada do Carrossel Premium
function buildCarousel() {
    if (!DOM.carouselTrack || !DOM.carouselThumbnails) return;

    DOM.carouselTrack.innerHTML = '';
    DOM.carouselThumbnails.innerHTML = '';

    AppState.currentGallery.forEach((imgUrl, index) => {
        // Slide Principal
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url('${imgUrl}')`;
        slide.addEventListener('click', () => launchLightbox(imgUrl));
        DOM.carouselTrack.appendChild(slide);

        // Miniatura Vinculada
        const thumb = document.createElement('div');
        thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
        thumb.style.backgroundImage = `url('${imgUrl}')`;
        thumb.addEventListener('click', () => moveSlideTo(index));
        DOM.carouselThumbnails.appendChild(thumb);
    });

    updateCarouselUI();
    setupSwipeSupport(DOM.carouselTrack);
}

function moveSlideTo(index) {
    AppState.currentSlideIndex = index;
    updateCarouselUI();
}

function nextSlide() {
    if (!AppState.currentGallery.length) return;
    AppState.currentSlideIndex = (AppState.currentSlideIndex + 1) % AppState.currentGallery.length;
    updateCarouselUI();
}

function prevSlide() {
    if (!AppState.currentGallery.length) return;
    AppState.currentSlideIndex = (AppState.currentSlideIndex - 1 + AppState.currentGallery.length) % AppState.currentGallery.length;
    updateCarouselUI();
}

function updateCarouselUI() {
    if (!DOM.carouselTrack) return;
    DOM.carouselTrack.style.transform = `translateX(-${AppState.currentSlideIndex * 100}%)`;
    
    const thumbs = document.querySelectorAll('.thumb-item');
    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === AppState.currentSlideIndex);
    });

    // Auto-Scroll suave das miniaturas para visualização focada
    const activeThumb = thumbs[AppState.currentSlideIndex];
    if (activeThumb && activeThumb.parentElement) {
        const container = activeThumb.parentElement;
        container.scrollTo({
            left: activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2,
            behavior: 'smooth'
        });
    }
}

// Suporte Touch Nativo (Aceleração por Hardware)
function setupSwipeSupport(element) {
    element.addEventListener('touchstart', (e) => {
        AppState.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
        AppState.touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, { passive: true });
}

function handleSwipeGesture() {
    const diff = AppState.touchStartX - AppState.touchEndX;
    if (Math.abs(diff) < CONFIG.minSwipeDistance) return;

    if (diff > 0) {
        nextSlide(); // Arrastou para a esquerda
    } else {
        prevSlide(); // Arrastou para a direita
    }
}

// Engine do Lightbox de Alta Resolução
function setupLightbox() {
    if (!DOM.lightbox) return;

    const closeBtn = document.getElementById('lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    
    DOM.lightbox.addEventListener('click', (e) => {
        if (e.target === DOM.lightbox) closeLightbox();
    });
}

function launchLightbox(url) {
    if (!DOM.lightbox || !DOM.lightboxImg) return;
    DOM.lightboxImg.src = url;

    const titleElem = document.getElementById('detail-title');
    if (DOM.lightboxCaption && titleElem) {
        DOM.lightboxCaption.innerText = titleElem.innerText;
    }
    DOM.lightbox.style.display = 'block';
}

function closeLightbox() {
    if (DOM.lightbox) DOM.lightbox.style.display = 'none';
}

// Captação de Leads com Automação API do WhatsApp
function handleLeadSubmit(e) {
    e.preventDefault();
    
    const nameElem = document.getElementById('lead-name');
    const phoneElem = document.getElementById('lead-phone');
    const titleElem = document.getElementById('detail-title');

    if (!nameElem || !phoneElem) return;

    const name = nameElem.value.trim();
    const phone = phoneElem.value.trim();
    const currentProperty = titleElem ? titleElem.innerText : "Empreendimento no Site";

    // Estruturação da mensagem executiva para conversão imediata
    const message = `Olá Neto, estou no seu site imobiliário e gostaria de receber informações exclusivas, tabela e o book técnico do empreendimento *${currentProperty}*.\n\n*Meus Dados:*\n• Nome: ${name}\n• Contato: ${phone}`;
    
    const targetUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
}
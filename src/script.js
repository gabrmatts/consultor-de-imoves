// Banco de Dados Simulado
const propertiesData = [
    {
        id: 1,
        title: "Mirage Bay Classique",
        bairro: "Umarizal",
        tipo: "Apartamento",
        quartos: 4,
        area: 250,
        status: "Pronto para Morar",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
        carouselImages: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Localizado no quadrilátero mais nobre do Umarizal. Um projeto icônico com acabamento em mármore importado, pé-direito duplo na sala de estar e uma vista panorâmica inigualável da Baía. Segurança armada e total discrição.",
        benefits: ["Planta customizável", "4 Vagas de garagem cobertas", "Gerador total automatizado", "Piscina com raia aquecida", "Lazer de resort completo"]
    },
    {
        id: 2,
        title: "Lumini Residence",
        bairro: "Nazaré",
        tipo: "Apartamento",
        quartos: 3,
        area: 180,
        status: "Em Obras",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
        carouselImages: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Tecnologia de ponta e automação residencial completa no coração de Nazaré. Próximo aos melhores centros de conveniência, aliando sofisticação arquitetônica com sustentabilidade eficiente.",
        benefits: ["Varanda gourmet integrada", "Carregador para carro elétrico", "Tratamento acústico nas lajes", "Portaria inteligente 24h"]
    },
    {
        id: 3,
        title: "Splendore Maison",
        bairro: "Batista Campos",
        tipo: "Cobertura",
        quartos: 4,
        area: 320,
        status: "Lançamento",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
        carouselImages: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "O ápice do luxo residencial contemporâneo de frente para a praça mais charmosa da cidade. Cobertura Linear exclusiva com piscina privativa suspensa e solarium privativo.",
        benefits: ["Piscina privativa na cobertura", "Elevador biométrico direto", "Dependência completa de serviço", "Acabamento Premium AAA"]
    }
];

let currentSlideIndex = 0;
let activeCarouselImages = [];

const propertiesGrid = document.getElementById('properties-grid');
const viewHome = document.getElementById('view-home');
const viewDetails = document.getElementById('view-details');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle Menu Mobile
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Renderização dos Cards
function renderProperties(data) {
    propertiesGrid.innerHTML = '';
    if (data.length === 0) {
        propertiesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Nenhuma oportunidade disponível com estes critérios.</p>`;
        return;
    }
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-img-box" style="background-image: url('${item.image}')">
                <span class="property-status">${item.status}</span>
            </div>
            <div class="property-info">
                <h3>${item.title}</h3>
                <p class="property-location"><i class="fa-solid fa-location-dot"></i> ${item.bairro}</p>
                <div class="property-specs">
                    <span><i class="fa-solid fa-bed"></i> ${item.quartos} Qtd</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${item.area} m²</span>
                    <span><i class="fa-solid fa-building"></i> ${item.tipo}</span>
                </div>
                <button class="btn btn-outline" style="width: 100%;" onclick="openDetails(${item.id})">Ver Detalhes</button>
            </div>
        `;
        propertiesGrid.appendChild(card);
    });
}

// Filtro de Busca
document.getElementById('btn-search').addEventListener('click', () => {
    const bairroVal = document.getElementById('filter-bairro').value;
    const tipoVal = document.getElementById('filter-tipo').value;
    const quartosVal = document.getElementById('filter-quartos').value;

    const filtered = propertiesData.filter(item => {
        return (!bairroVal || item.bairro === bairroVal) &&
               (!tipoVal || item.tipo === tipoVal) &&
               (!quartosVal || (quartosVal === "4" ? item.quartos >= 4 : item.quartos == quartosVal));
    });
    renderProperties(filtered);
});

// Navegação para Detalhes
function openDetails(id) {
    const item = propertiesData.find(p => p.id === id);
    if (!item) return;

    document.getElementById('detail-title').innerText = item.title;
    document.getElementById('detail-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.bairro}, Belém - PA`;
    document.getElementById('detail-status').innerText = item.status;
    document.getElementById('detail-description').innerText = item.description;

    const benefitsContainer = document.getElementById('detail-benefits');
    benefitsContainer.innerHTML = '';
    item.benefits.forEach(b => {
        benefitsContainer.innerHTML += `<li><i class="fa-solid fa-circle-check"></i> ${b}</li>`;
    });

    activeCarouselImages = item.carouselImages;
    currentSlideIndex = 0;
    setupCarousel();

    viewHome.classList.add('hidden');
    viewDetails.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('btn-back-home').addEventListener('click', () => {
    viewDetails.classList.add('hidden');
    viewHome.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mecanismo Interno do Carrossel
function setupCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    activeCarouselImages.forEach((img, index) => {
        track.innerHTML += `<div class="carousel-slide" style="background-image: url('${img}')"></div>`;
        dotsContainer.innerHTML += `<span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>`;
    });
    updateCarouselView();
}

function updateCarouselView() {
    const track = document.getElementById('carousel-track');
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    const dots = document.querySelectorAll('#carousel-dots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

document.getElementById('carousel-next').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % activeCarouselImages.length;
    updateCarouselView();
});

document.getElementById('carousel-prev').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + activeCarouselImages.length) % activeCarouselImages.length;
    updateCarouselView();
});

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarouselView();
}

// Submissão de Lead Dinâmica (Gera o WhatsApp Estruturado)
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('lead-name').value;
    const phone = document.getElementById('lead-phone').value;
    const currentProperty = document.getElementById('detail-title').innerText;

    const message = `Olá Gabriel, gostaria de solicitar um atendimento exclusivo sobre o empreendimento *${currentProperty}*.\n\nNome: ${name}\nWhatsApp: ${phone}`;
    window.open(`https://wa.me/5591999999999?text=${encodeURIComponent(message)}`, '_blank');
});

// Fechar Menu Mobile ao clicar em links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    renderProperties(propertiesData);
});
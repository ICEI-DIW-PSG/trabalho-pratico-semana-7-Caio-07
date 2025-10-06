const lugaresData = [
    {
        id: 1,
        titulo: "Museu de Arte Moderna",
        imagem: "https://picsum.photos/id/100/600/400",
        descricao: "Exposições de arte contemporânea e clássica em um espaço arquitetonicamente impressionante.",
        detalhes: {
            endereco: "Av. Paulista, 1578 - São Paulo/SP",
            telefone: "(11) 3095-1234",
            horarios: "Terça a domingo, das 10h às 18h",
            preco: "R$ 25,00 (inteira) | R$ 12,50 (meia)",
            descricaoCompleta: "O Museu de Arte Moderna é referência nacional em arte contemporânea. Possui um acervo com mais de 5.000 obras, incluindo pinturas, esculturas, fotografias e instalações. Oferece visitas guiadas, workshops e programas educativos para todas as idades."
        }
    },
    {
        id: 2,
        titulo: "Museu de História Natural", 
        imagem: "https://picsum.photos/id/101/600/400",
        descricao: "Descubra a história do nosso planeta através de exposições interativas e educativas.",
        detalhes: {
            endereco: "Rua XV de Novembro, 234 - Rio de Janeiro/RJ",
            telefone: "(21) 2567-8901",
            horarios: "Quarta a segunda, das 9h às 17h",
            preco: "R$ 20,00 (inteira) | R$ 10,00 (meia)",
            descricaoCompleta: "Com mais de 50 anos de história, nosso museu abriga uma das maiores coleções de fósseis da América Latina. Destaque para o esqueleto completo de um tiranossauro rex e a exposição interativa sobre evolução humana."
        }
    },
    {
        id: 3,
        titulo: "Centro Cultural",
        imagem: "https://picsum.photos/id/102/600/400",
        descricao: "Um espaço vibrante que abriga diversas formas de expressão artística e cultural.",
        detalhes: {
            endereco: "Praça da Liberdade, 445 - Belo Horizonte/MG",
            telefone: "(31) 3456-7890",
            horarios: "Terça a domingo, das 9h às 21h",
            preco: "Entrada gratuita",
            descricaoCompleta: "O Centro Cultural é um espaço multifuncional que promove diversas manifestações artísticas. Contamos com teatro, cinema, galerias de arte, biblioteca e espaços para workshops. Mais de 100 eventos mensais, incluindo shows, peças teatrais e exposições temporárias."
        }
    }
];


function carregarLugares() {
    const lugaresContainer = document.getElementById('lugares-container');
    
    if (lugaresContainer) {
        lugaresContainer.innerHTML = '';
        
        lugaresData.forEach(lugar => {
            const card = `
                <article class="place-card">
                    <img src="${lugar.imagem}" alt="${lugar.titulo}">
                    <div class="place-content">
                        <h3>${lugar.titulo}</h3>
                        <p>${lugar.descricao}</p>
                        <a href="detalhes.html?id=${lugar.id}" class="read-more">Saiba mais →</a>
                    </div>
                </article>
            `;
            lugaresContainer.innerHTML += card;
        });
    }
}


function carregarDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const lugarId = parseInt(urlParams.get('id'));
    
    const lugar = lugaresData.find(l => l.id === lugarId);
    const detalhesContainer = document.getElementById('detalhes-container');
    
    if (lugar && detalhesContainer) {
        detalhesContainer.innerHTML = `
            <div class="detalhes-header">
                <img src="${lugar.imagem}" alt="${lugar.titulo}">
                <div class="detalhes-info">
                    <h1>${lugar.titulo}</h1>
                    <p class="descricao-principal">${lugar.descricao}</p>
                </div>
            </div>
            <div class="detalhes-content">
                <h2>Informações Detalhadas</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <h3>Endereço</h3>
                        <p>${lugar.detalhes.endereco}</p>
                    </div>
                    <div class="info-item">
                        <h3>Telefone</h3>
                        <p>${lugar.detalhes.telefone}</p>
                    </div>
                    <div class="info-item">
                        <h3>Horários de Funcionamento</h3>
                        <p>${lugar.detalhes.horarios}</p>
                    </div>
                    <div class="info-item">
                        <h3>Preços</h3>
                        <p>${lugar.detalhes.preco}</p>
                    </div>
                </div>
                <div class="descricao-completa">
                    <h3>Sobre o Local</h3>
                    <p>${lugar.detalhes.descricaoCompleta}</p>
                </div>
                <a href="index.html" class="btn-voltar">← Voltar para a Página Inicial</a>
            </div>
        `;
    } else if (detalhesContainer) {
        detalhesContainer.innerHTML = `
            <div class="erro">
                <h2>Lugar não encontrado</h2>
                <p>O lugar solicitado não foi encontrado em nossa base de dados.</p>
                <a href="index.html" class="btn-voltar">Voltar para a Página Inicial</a>
            </div>
        `;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhes();
    } else {
        carregarLugares();
    }
});
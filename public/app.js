const lugaresData = [
    {
        id: 1,
        titulo: "Museu de Arte Moderna",
        imagem: "https://picsum.photos/id/100/600/400",
        descricao: "Exposições de arte contemporânea e clássica em um espaço arquitetonicamente impressionante."
    },
    {
        id: 2,
        titulo: "Museu de História Natural", 
        imagem: "https://picsum.photos/id/101/600/400",
        descricao: "Descubra a história do nosso planeta através de exposições interativas e educativas."
    },
    {
        id: 3,
        titulo: "Centro Cultural",
        imagem: "https://picsum.photos/id/102/600/400",
        descricao: "Um espaço vibrante que abriga diversas formas de expressão artística e cultural."
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


document.addEventListener('DOMContentLoaded', function() {
    carregarLugares();
});
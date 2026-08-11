// ======================================
// APR GIGANTE OFERTAS - VERSÃO SHOPEE
// ======================================

const produtosShopee = [
    {
        nome: "Bicicleta Elétrica Scooter Mova Way 4.0 500w 48v Lítio",
        preco: 3518.91, // Corrigido: sem ponto nos milhares e com ponto nos centavos
        categoria: "Achados da Shopee",
        tipo: "oferta",
        destaque: true,
        imagem: "images/produtos/sh/bicicleta.jpeg",
        link: "https://s.shopee.com.br/4Ayy78MTs0"
    },
    {
    nome: "Localizador De Disjuntor",
    preco: 256.00,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Localizador De Disjuntor.jpeg",
    link: "https://meli.la/1X5jAke"
},
    {
        nome: "Alicate Torquês Turquesa Armador Profissional 12 Aço",
        preco: 51.31,
        categoria: "construcao",
        tipo: "vendido",
        destaque: true,
        imagem: "images/produtos/sh/Alicate Torquês Turquesa Armador Profissional 12 Aço.jpeg",
        link: "https://meli.la/2dK8zdd"
    } // Corrigido: vírgula removida do último objeto
];

// =========================
// ELEMENTOS DA PÁGINA
// =========================
const listaProdutos = document.getElementById("lista-produtos");
const listaVendidos = document.getElementById("lista-vendidos");
const listaRecomendados = document.getElementById("lista-recomendados");

// =========================
// CRIAR CARD
// =========================
function criarCard(produto) {
    return `
    <div class="produto">
        ${produto.destaque ? '<div class="selo">🔥 OFERTA</div>' : ''}
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p class="preco"> $ Consulte o preço atualizado </p>
        <a href="${produto.link}" target="_blank">Ver Oferta</a>
    </div>
    `;
}

// =========================
// EXIBIR PRODUTOS
// =========================
function exibirProdutos(categoria = "todos") {
    // Garante que os elementos existem na página antes de tentar limpá-los
    if (listaProdutos) listaProdutos.innerHTML = "";
    if (listaVendidos) listaVendidos.innerHTML = "";
    if (listaRecomendados) listaRecomendados.innerHTML = "";

    // Corrigido: Filtrando a partir de 'produtosShopee' em vez de 'produtos'
    let produtosFiltrados = categoria === "todos" 
        ? produtosShopee 
        : produtosShopee.filter(produto => produto.categoria === categoria);

    produtosFiltrados.forEach(produto => {
        if (produto.tipo === "oferta" && listaProdutos) {
            listaProdutos.innerHTML += criarCard(produto);
        }
        if (produto.tipo === "vendido" && listaVendidos) {
            listaVendidos.innerHTML += criarCard(produto);
        }
        if (produto.tipo === "recomendado" && listaRecomendados) {
            listaRecomendados.innerHTML += criarCard(produto);
        }
    });
}

// =========================
// FILTRO CATEGORIA
// =========================
function filtrarCategoria(categoria) {
    exibirProdutos(categoria);
}

// =========================
// INICIAR
// =========================
exibirProdutos();
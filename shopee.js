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
    nome: "Projetor HY300 Magcubic 4K HD WiFi Bluetooth Até 150 Polegadas Bivolt Celular TV Box Xbox PS5 PC Cinema Portátil",
    preco: 181.40,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Projetor HY300 Magcubic 4K HD WiFi Bluetooth Até 150 Polegadas Bivolt Celular TV Box Xbox PS5 PC Cinema Portátil.jpeg",
    link: "https://s.shopee.com.br/AUt8Qn3EJp"
},
{
    nome: "Mini Compressor de Ar Portatil Recarregavél Digital USB Calibrador Pneu Envio Imediato",
    preco: 63.99,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Mini Compressor de Ar Portatil Recarregavél Digital USB Calibrador Pneu Envio Imediato.jpeg",
    link: "https://s.shopee.com.br/9ANksmmZVt"
},
{
    nome: "Cortador De Chapas De Metal Elétrico Para Furadeira Chapa Aço Metal Adaptador",
    preco: 39.90,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Cortador De Chapas De Metal Elétrico Para Furadeira Chapa Aço Metal Adaptador.jpeg",
    link: "https://s.shopee.com.br/7KwHidb293"
},
{
    nome: "Conversor Adaptador De Esmerilhadeira De Alta Potencia Para Furadeira",
    preco: 99.99,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Conversor Adaptador De Esmerilhadeira De Alta Potencia Para Furadeira.jpeg",
    link: "https://s.shopee.com.br/1qbLAtI5cn"
},
{
    nome: "Kit 2 Chaves Inglesa Chave De Boca Tubo Mestra Universal 9 A 32mm Multifuncional Ajustável",
    preco: 20.50,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Kit 2 Chaves Inglesa Chave De Boca Tubo Mestra Universal 9 A 32mm Multifuncional Ajustável.jpeg",
    link: "https://s.shopee.com.br/70JRLWMjaJ"
},
{
    nome: "Carregador Portátil Solar 20000mAh Power Bank com Cabos Embutidos Display Digital USB Rápido",
    preco: 256.00,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Carregador Portátil Solar 20000mAh Power Bank com Cabos Embutidos Display Digital USB Rápido.jpeg",
    link: "https://s.shopee.com.br/AUt85rYr1t"
},
    {
    nome: "Adaptador Motosserra De Corrente Para Furadeira E Parafusadeira 4 Polegadas - Corte Madeira",
    preco: 39.99,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/sh/Adaptador Motosserra De Corrente Para Furadeira E Parafusadeira 4 Polegadas - Corte Madeira.jpeg",
    link: "https://s.shopee.com.br/5Arn9G8Cxj"
},
    {
    nome: "Adaptador Angular Longo 105 graus Para Furadeira Parafusadeira Metalico Profissional",
    preco: 29.29,
    categoria: "eletrica",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/sh/Adaptador Angular Longo 105 graus Para Furadeira Parafusadeira Metalico Profissional.jpeg",
    link: "https://s.shopee.com.br/4fvWZtsrHp"
},
    {
    nome: "Adaptador Serra Tico-Tico para Furadeira - Conversor para Corte de Madeira",
    preco: 8.99,
    categoria: "eletrica",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/sh/Adaptador Serra Tico-Tico para Furadeira - Conversor para Corte de Madeira.jpeg",
    link: "https://s.shopee.com.br/3g2yFk2SRM"
},
    {
        nome: "Sapateira com Portas Basculantes Vertical Armário para Quarto Sapato Sala Tênis Hall Entrada",
        preco: 166.39,
        categoria: "construcao",
        tipo: "vendido",
        destaque: true,
        imagem: "images/produtos/sh/Sapateira com Portas Basculantes Vertical Armário para Quarto Sapato Sala Tênis Hall Entrada.jpeg",
        link: "https://s.shopee.com.br/5VUSVFc7XP"
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

//// ======================================
// APR GIGANTE OFERTAS - VERSÃO 6.0
// ======================================

// TIPOS:
// oferta
// vendido
// recomendado

const produtos = [

{
    nome: "Case Adaptador Caddy HD 9,5mm",
    preco: 19.00,
    categoria: "ferramentas",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Caddy.jpeg",
    link: "https://meli.la/1eBqqHv"
},
{
    nome: "Parafusadeira Furadeira De Impacto The Black Tools Profissional TB-21PX 2 Baterias Com Maleta 60Hz Amarelo",
    preco: 168.00,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/Parafusadeira Furadeira De Impacto The Black Tools Profissional TB-21PX 2 Baterias Com Maleta 60Hz Amarelo.jpeg",
    link: "https://meli.la/124W3TA"
},
{
    nome: "Chave Soquete Ajustável Multifuncional Catraca 10 A 19 mm",
    preco: 37.03,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/Chave Soquete Ajustável Multifuncional Catraca 10 A 19mm.jpeg",
    link: "https://meli.la/2e12GYQ"
},
{
    nome: "Furadeira Industrial Impacto Rev 450w Gsb 450 Re Bosch + Kit",
    preco: 359.90,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/Furadeira Industrial Impacto Rev 450w Gsb 450 Re Bosch + Kit.jpeg",
    link: "https://meli.la/2NjBU5a"
},
{
    nome: "Trena Digital Laser Até 60 Metros Com Nível Alta Precisão",
    preco: 119.40,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/Trena Digital Laser Até 60 Metros Com Nível Alta Precisão.jpeg",
    link: "https://meli.la/1QSvQJJ"
},
{
    nome: "Serra Mármore 4.3/8 1300w C/ 2discos 4100NH3ZX2 Makita",
    preco: 349.00,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/Serra Mármore 4.38 1300w C 2discos 4100NH3ZX2 Makita.jpeg",
    link: "https://meli.la/18xZoX5"
},
{
    nome: "Alicate Universal 8 Pol Cromo Vanádio Gedore R28301200 1000V Cor Vermelho",
    preco: 45.00,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: false,
    imagem: "images/produtos/Alicate Universal 8 Pol Cromo Vanádio Gedore R28301200 1000V Cor Vermelho.jpeg",
    link: "https://meli.la/1GoQEGA"
},
{
    nome: "Alicate Universal Isolado Eletricista 8 Polegada Gedore",
    preco: 109.00,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: false,
    imagem: "images/produtos/Alicate Universal Isolado Eletricista 8 Polegada Gedore.jpeg",
    link: "https://meli.la/15H3ZGF"
},
{
    nome: "Caneta Detectora De Energia Elétrica Teste Tensão Sonora Bip Lanterna Led Luz fios tomadas",
    preco: 19.00,
    categoria: "eletrica",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Caneta Detectora  de Corrente Elétrica.jpeg",
    link: "https://meli.la/1YuYqts"
},
{
    nome: "Alicate De Bico Reto 8 Gedore Red",
    preco: 52.90,
    categoria: "eletrica",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Alicate De Bico Reto 8 Gedore Red.jpeg",
    link: "https://meli.la/2h35THr"
},
{
    nome: "Kit 12 Jogo Chaves Isoladas Imã Fenda E Phillips Eletricista",
    preco: 48.87,
    categoria: "eletrica",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Kit Fenda e Philips.jpeg",
    link: "https://meli.la/1UgDA38"
},
{
    nome: "Alicate Amperímetro Brasfort",
    preco: 47.94,
    categoria: "eletrica",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Alicate Amperímetro Brasfort.jpeg",
    link: "https://meli.la/1oRPamy"
},
{
    nome: "Guia Passa Fios C/ 20 Metros Pvc Com Alma De Aço Vonder",
    preco: 29.00,
    categoria: "eletrica",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Passa Fio Alma de Aço.jpeg",
    link: "https://meli.la/1bcSVwY"
},
{
    nome: "Chuveiro Elétrico",
    preco: 116.91,
    categoria: "eletrica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/Chuveiro Elétrico.jpeg",
    link: "https://meli.la/2a6mKbW"
},
{
    nome: "Scanner Parede Detector Metal Cano Agua Fio Tubo Pvc Madeira",
    preco: 247.48,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Scanner Parede Detector Metal Cano Agua Fio Tubo Pvc Madeira.jpeg",
    link: "https://meli.la/1hPy7Z5"
},
{
    nome: "Bits Jogo 50 Ponteira Aço Parafusadeira Sextavado Torx Ima",
    preco: 54.10,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Jogo De Bits 50 Peças Magnético Ponteira.jpeg",
    link: "https://meli.la/2aN8W1h"
},
{
    nome: "Dobradeira Estribo Reforçada Vergalhão 10mm Até 40cm",
    preco: 129.19,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Dobradeira Estribo Reforçada Vergalhão 10mm Até 40cm.jpeg",
    link: "https://meli.la/2yNxK7E"
},
{
    nome: "Pistola De Fixação Finca Pino Manual Rebites + Acessórios",
    preco: 61.11,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Pistola De Fixação Finca Pino Manual Rebites + Acessórios.jpeg",
    link: "https://meli.la/2ZLNSMn"
},
{
    nome: "Adaptador Angular Magnético Para Furadeira Parafusadeira 105 Graus",
    preco: 21.29,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Adaptador Angular Magnético Para Furadeira Parafusadeira 105 Graus.jpeg",
    link: "https://meli.la/32ZoAoh"
},
{
    nome: "Afiador de Brocas Evotek Ferramentas Portátil 2mm a 12,5mm",
    preco: 19.39,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Afiador de Brocas Evotek Ferramentas Portátil 2mm a 12,5mm.jpeg",
    link: "https://meli.la/1B5ex3c"
},
{
    nome: "Esquadro Gabarito Marcação Angulo Corte Dobra Metalon Perfil Prateado",
    preco: 29.99,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Esquadro Gabarito Marcação Angulo Corte Dobra Metalon Perfil Prateado.jpeg",
    link: "https://meli.la/1k4ZXkV"
},
{
    nome: "Raspador Plaina Placas Gesso Drywall Madeira 6 Polegadas  Acabamento Bordas Lâmina 65mm ABS Profissional Gesso Acartonado",
    preco: 45.99,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Raspador Plaina Placas Gesso Drywall Madeira 6 Polegadas  Acabamento Bordas Lâmina 65mm ABS Profissional Gesso Acartonado.jpeg",
    link: "https://meli.la/1G5TxTe"
},
{
    nome: "Chave Tigre Com 8 Bocas Universal 48 Em 1 Combinada Soquete 360 Em Aço Inoxidável Cromado",
    preco: 30.83,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Chave Tigre Com 8 Bocas Universal 48 Em 1 Combinada Soquete 360 Em Aço Inoxidável Cromado.jpeg",
    link: "https://meli.la/1vDr4Q7"
},
{
    nome: "Chave Hidráulica Multifuncional Pias Canos 8x1 Com Nível",
    preco: 27.89,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Chave Hidráulica Multifuncional Pias Canos 8x1 Com Nível.jpeg",
    link: "https://meli.la/1imVHQb"
},
{
    nome: "Broca Escalonada Cone De 4 A 32mm De Aço Rapido Espiral",
    preco: 37.29,
    categoria: "ferramentas",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Broca Escalonada Cone De 4 A 32mm De Aço Rapido Espiral.jpeg",
    link: "https://meli.la/2UMpgJz"
},
{
    nome: "Pegador Para Blocos De Concreto E Tijolos Vonder",
    preco: 69.44,
    categoria: "construcao",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Pegador Para Blocos De Concreto E Tijolos Vonder.jpeg",
    link: "https://meli.la/2uVkWYK"
},
{
    nome: "Gabarito Caixa Meia Esquadria Serrote Costa 30 cm Idea",
    preco: 38.90,
    categoria: "construcao",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Gabarito Caixa Meia Esquadria Serrote Costa 30 cm Idea.jpeg",
    link: "https://meli.la/13FDaSq"
},
{
    nome: "Gabarito Copiador Modelador Contornos Azulejo Cerâmica Piso",
    preco: 41.00,
    categoria: "construcao",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Gabarito Copiador Modelador Contornos Azulejo Cerâmica Piso.jpeg",
    link: "https://meli.la/1wRJPTU"
},
{
    nome: "Rodo Desempenadeira Dentada 60 X 12 Cm Dentes De 15mm",
    preco: 47.92,
    categoria: "construcao",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Rodo Desempenadeira Dentada 60 X 12 Cm Dentes De 15mm.jpeg",
    link: "https://meli.la/1NGsHam"
},
{
    nome: "Níveis Bolhas Dobrável Magnético Multiuso Profissional 60cm",
    preco: 77.99,
    categoria: "construcao",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Níveis Bolhas Dobrável Magnético Multiuso Profissional 60cm.jpeg",
    link: "https://meli.la/28YFXnc"
},
{
    nome: "Regua Multi Ângulos Para Cortar Piso Azulejo Azulegista Tita",
    preco: 29.29,
    categoria: "construcao",
    tipo: "vendido",
    destaque: false,
    imagem: "images/produtos/Regua Multi Ângulos Para Cortar Piso Azulejo Azulegista Tita.jpeg",
    link: "https://meli.la/1wUF5CT"
},
{
    nome: "Torneira Gourmet Monocomando Cozinha Luxo Mesa Com Mola Super Com Corpo Em Metal Premium Altissima Qualidade",
    preco: 108.16,
    categoria: "hidraulica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/Torneira Gourmet.jpeg",
    link: "https://meli.la/1dPUN1n"
},
{
    nome: "Cortador Tubo Pvc Cano Frio Mang Alicate Ferramenta Profissional",
    preco: 67.99,
    categoria: "hidraulica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/Cortador Tubo Pvc Cano Frio Mang Alicate Ferramenta Profissional.jpeg",
    link: "https://meli.la/1FP6VMP"
},
{
    nome: "Alicate Pressão Chave Inglesa Grifo Profissional Hidráulica",
    preco: 69.00,
    categoria: "hidraulica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/Alicate Pressão Chave Inglesa Grifo Profissional Hidráulica.jpeg",
    link: "https://meli.la/1GSDGVG"
},
{
    nome: "Rebarbador Escariador Manual Tubo Cobre Alumínio Acabamento",
    preco: 25.35,
    categoria: "hidraulica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/Rebarbador Escariador Manual Tubo Cobre Alumínio Acabamento.jpeg",
    link: "https://meli.la/2z2Zizj"
},  
{
    nome: "Alicatechave Curva Para Instação De Torneiras Encanador",
    preco: 65.90,
    categoria: "hidraulica",
    tipo: "recomendado",
    destaque: true,
    imagem: "images/produtos/Alicatechave Curva Para Instação De Torneiras Encanador.jpeg",
    link: "https://meli.la/15K2b6u"
},
{
    nome: "Alicate Bomba D Agua 250mm 10 Gedore",
    preco: 78.00,
    categoria: "hidraulica",
    tipo: "vendido",
    destaque: true,
    imagem: "images/produtos/Alicate Bomba D Agua 250mm 10 Gedore.jpeg",
    link: "https://meli.la/2hCx1Kn"
},
{
    nome: "Carrinho De Mão Extra Forte 65 Litros  Tramontina Cor Cinza Claro",
    preco: 385.19,
    categoria: "construcao",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Carrinho De Mão Extra Forte 65 Litros 77714435 Tramontina Cor Cinza Claro.jpeg",
    link: "https://meli.la/1mLXYyf"
},
{
    nome: "Nível a Laser Verde 2 Linhas Com Tripé Para Profissional Autonivelante",
    preco: 126.07,
    categoria: "construcao",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Nível a Laser Verde 2 Linhas Com Tripé Para Profissional Autonivelante.jpeg",
    link: "https://meli.la/2b9UQcS"
},
{
    nome: "Martelete Perfurador Rompedor Professional 26mm 1100w Sds Plus 4j Com Acessorios Trm-2000 The Black Tools",
    preco: 433.10,
    categoria: "construcao",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Martelete Rompedor Perfurador Profissional Sds-plus 1100w.jpeg",
    link: "https://meli.la/18c8cku"
},
{
    nome: "Pneu Carrinho De Mão Não Fura Maciço Completo Universal Fb",
    preco: 72.40,
    categoria: "construcao",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Pneu Carrinho De Mão Não Fura Maciço Completo  Universal Fb.jpeg",
    link: "https://meli.la/2QL9dkX"
},
{
    nome: "Desempenadeira Aço Dentada Com Regulagem 430mm X 120mm",
    preco: 54.22,
    categoria: "construcao",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Desempenadeira Aço Dentada Com Regulagem 430mm X 120mm.jpeg",
    link: "https://meli.la/18DezuE"
},
{
    nome: "Alicate Torquês Turquesa Armador Profissional 12 Aço",
    preco: 51.31,
    categoria: "construcao",
    tipo: "oferta",
    destaque: true,
    imagem: "images/produtos/Alicate Torquês Turquesa Armador Profissional 12 Aço.jpeg",
    link: "https://meli.la/2dK8zdd"
},

]

// =========================
// ELEMENTOS DA PÁGINA
// =========================

const listaProdutos =
document.getElementById("lista-produtos");

const listaVendidos =
document.getElementById("lista-vendidos");

const listaRecomendados =
document.getElementById("lista-recomendados");

// =========================
// CRIAR CARD
// =========================

function criarCard(produto){

return `

<div class="produto">

${produto.destaque
    ? '<div class="selo">🔥 OFERTA</div>'
    : ''
}

<img
src="${produto.imagem}"
alt="${produto.nome}"
>

<h3>${produto.nome}</h3>

<p class="preco">
    💲 Consulte o preço atualizado
</p>

<a href="${produto.link}" target="_blank" class="botao">
    Ver Oferta
</a>

</div>

`;
}

// =========================
// EXIBIR PRODUTOS
// =========================

function exibirProdutos(categoria = "todos"){

listaProdutos.innerHTML = "";
listaVendidos.innerHTML = "";
listaRecomendados.innerHTML = "";

let produtosFiltrados =
categoria === "todos"
? produtos
: produtos.filter(
produto =>
produto.categoria === categoria
);

produtosFiltrados.forEach(produto => {

if(produto.tipo === "oferta"){

listaProdutos.innerHTML +=
criarCard(produto);

}

if(produto.tipo === "vendido"){

listaVendidos.innerHTML +=
criarCard(produto);

}

if(produto.tipo === "recomendado"){

listaRecomendados.innerHTML +=
criarCard(produto);

}

});

}

// =========================
// FILTRO CATEGORIA
// =========================

function filtrarCategoria(categoria){

exibirProdutos(categoria);

}

// =========================
// INICIAR
// =========================

exibirProdutos();

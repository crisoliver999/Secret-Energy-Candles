const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const dropdown = document.getElementById("dropdown");
const dropTextBtn = document.getElementById("drop-text");
const upTextBtn = document.getElementById("up-text");

function openNav(event) {
    menu.style.width = "250px";
    overlay.style.display = "block";
}

function closeNav() {
    menu.style.width = "0";
    overlay.style.display = "none";
}

function dropMenu() {
    dropdown.classList.toggle("show");
}

function dropText() {
    document.getElementById("short-text").classList.add("hidden");
    dropTextBtn.classList.add("hidden");
    document.getElementById("long-text").classList.remove("hidden");
    upTextBtn.classList.remove("hidden");
}

function upText() {
    document.getElementById("short-text").classList.remove("hidden");
    dropTextBtn.classList.remove("hidden");
    document.getElementById("long-text").classList.add("hidden");
    upTextBtn.classList.add("hidden");
}

function openTandC() {
    const tAndCHtml = `<a class="tandc-close-btn" href="javascript:void(0)" onclick="closeTandC()">
    <i class="fas fi-rr-cross-small"></i>
    </a>
<div class="tandc-container">
    <h2 class="section-title">termos e condi&ccedil;&otilde;es</h2>
    <div class="tandc-text-container">
        <p id="tandc-text" class="tandc-text">ASPETOS GERAIS</p>
        <p id="tandc-text" class="tandc-text">A utiliza&ccedilção do nosso site  atribui ,automaticamente, a condição de Utilizador e implica a aceitação, sem restrições, de todas as disposições incluídas nos Termos e Condições, por cada vez que acede ao nosso Site.</p>
        <p id="tandc-text" class="tandc-text">Caso o utilizador não aceite algumas das condições estabelecidas, não deve aceder, nem utilizar o nosso site.</p>
        <p id="tandc-text" class="tandc-text">Note-se que, ao consultar , ou utilizar o nosso site está a comprometer-se em como aceita as condições aqui referidas.</p>
        <p id="tandc-text" class="tandc-text">Poderá sempre utilizar o site sem se registar, no entanto, poderão haver funcionalidades indisponíveis, por não ter registo.</p>
        <p id="tandc-text" class="tandc-text"><br/></p>
        <p id="tandc-text" class="tandc-text">FUNCIONALIDADES DO SITE</p>
        <p id="tandc-text" class="tandc-text">. No caso do utilizador pretender registar-se:</p>
        <p id="tandc-text" class="tandc-text">O utilizador deverá preencher o formulário existente no site, que para além, de selecionar elementos opcionais, bem como: assunto, e ou mensagem a enviar á Secret Energy Canlde, deverá indicar, obrigatoriamente, os dados seguintes:</p>
        <p id="tandc-text" class="tandc-text">- Primeiro e Último nome;</p>
        <p id="tandc-text" class="tandc-text">- Endereço de correio eletrónico (email).</p>
        <p id="tandc-text" class="tandc-text">Toda a informação que o utilizador nos fornece deverá ser leal.</p>
        <p id="tandc-text" class="tandc-text">No caso, do utilizador alterar algumas das informações que forneceu ao nosso site, deverá proceder a uma atualização (caso assim o deseje). O utilizador responsabiliza-se por qualquer tipo de declarações falsas, incorretas ou incompletas que nos forneça e pelos prejuízos que estas possam provocar à empresa ou a terceiros, devido à informação que nos faculta ou facultou.</p>
        <p id="tandc-text" class="tandc-text"><br/></p>
        <p id="tandc-text" class="tandc-text">FUNCIONALIDADES DA CONTA</p>
        <p id="tandc-text" class="tandc-text">O Utilizador Registado terá, portanto, acesso a uma área pessoal, com os dados que terá facultado, no momento do registo.</p>
        <p id="tandc-text" class="tandc-text">Através do registo, poderá assim, aceder aos seus dados e proceder à alteração ou eliminação definitiva. Pode também consultar, as suas encomendas, devoluções e comunicações com a Secret Energy Canlde.</p>
        <p id="tandc-text" class="tandc-text"><br/></p>
        <p id="tandc-text" class="tandc-text">CATÁLOGO DOS PRODUTOS QUE VENDEMOS (LOJA ONLINE)</p>
        <p id="tandc-text" class="tandc-text">No nosso site, encontram-se disponíveis todos os produtos comercializados e realizados manualmente pela Carla Sofia Marques Pereira. A informação referida dos produtos no nosso site destina-se apenas a fornecer um curto resumo informativo, para que o utilizador se sinta mais informado quanto ao produto que pretende adquirir.</p>
        <p id="tandc-text" class="tandc-text">A equipa da Secret Energy Canlde, assume todas as providências para assegurar e  garantir que as informações e os dados contidos no Site são precisos e atualizados, na altura da sua introdução no mesmo. No entanto, não é garantida a atualização ou correção destas informações. A Secret Energy Canlde qualquer garantia, expressa ou implícita, quanto à exatidão ou integridade de qualquer informação (incluindo informação sobre bens e serviços) incluída no Site.</p>
        <p id="tandc-text" class="tandc-text">O utilizador tem o direito de apagar, alterar ou remover qualquer informação no Site, a qualquer momento, sem aviso prévio.</p>
        <p id="tandc-text" class="tandc-text">Os Utilizadores aceitam e reconhecem de modo expresso que:</p>
        <p id="tandc-text" class="tandc-text">- As fotografias apresentadas no Site têm caráter meramente ilustrativo, embora que reais,  devendo os Utilizadores consultar a informação detalhada sobre os produtos e as respetivas características/especificações que fornecemos;</p>
        <p id="tandc-text" class="tandc-text">- O preço exposto é o preço estipulado pela empresa, uma vez que, é tudo feito artesanalmente e é uma empresa que não trabalha com parcerias de quaisquer outras empresas,  podendo, contudo, existir erros ortográficos aos quais não podemos garantir a entrega, caso seja essa a situação;</p>
        <p id="tandc-text" class="tandc-text">- Asseguramos que faremos todos os esforços suficientes, para incluir informação exata e atualizada sobre todos os produtos no Site. Apesar de , não o podermos garantir;</p>
        <p id="tandc-text" class="tandc-text"><br/></p>
        <p id="tandc-text" class="tandc-text">PROPRIEDADE INTELECTUAL</p>
        <p id="tandc-text" class="tandc-text">Os conteúdos do site, bem como: textos, gráficos, fotografias têm direitos reservados à empresa, sendo proibida a sua utilização, com fins comerciais ou outros.</p>
        <p id="tandc-text" class="tandc-text"><br/></p>
        <p id="tandc-text" class="tandc-text">LIMITAÇÃO DE RESPONSABILIDADE</p>
        <p id="tandc-text" class="tandc-text">O Utilizador  deve saber, que será responsável pelo conteúdo da informação enviada para o Site.</p>
        <p id="tandc-text" class="tandc-text">É do conhecimento do Utilizador que a utilização do Site poderá não ser 100% segura, existindo a possibilidade das informações enviadas ou recebidas serem intercetadas por partes não autorizadas, não sendo a empresa responsável por falhas na segurança das comunicações e não assumindo qualquer responsabilidade pelo uso indevido da sua informação por terceiros.</p>
        <p id="tandc-text" class="tandc-text">O Utilizador reconhece também, que o acesso e utilização do Site poderá sofrer interrupções e que a informação do Site pode conter bugs, erros, falhas técnicas, problemas ou outras limitações. O Site pode conter ligações para outras páginas web ou até mesmo, ser acedido através de outras páginas eletrónicas. A empresa não pode ser responsabilizada pelas mesmas, nomeadamente pelo controlo dos conteúdos, disponibilidade, operacionalidade ou desempenho.</p>
        <p id="tandc-text" class="tandc-text">Nos termos máximos permitidos por lei, a empresa exclui qualquer responsabilidade, direta ou indireta, pela utilização do Site.</p>
        <p id="tandc-text" class="tandc-text"><br/></p>
        <p id="tandc-text" class="tandc-text">ADISPOSIÇÕES FINAIS</p>
        <p id="tandc-text" class="tandc-text">No caso de violação dos presentes Termos e Condições, reservamos o direito de exercer toda e qualquer ação legalmente prevista. Além disso, reservamos o direito de, arbitrariamente, dar como terminado o acesso ou utilização do Site, com ou sem notificação do Utilizador.</p>
        <p id="tandc-text" class="tandc-text">Os Termos e Condições de utilização do Site são regulados de acordo com as leis em vigor.</p>
        <p id="tandc-text" class="tandc-text">Se qualquer provisão aqui descrita for considerada ilegal, nula, ou por qualquer razão inexequível, essa provisão será eliminada ou reduzida nos termos da lei, não afetando a validade e exequibilidade das restantes provisões.</p>
        <p id="tandc-text" class="tandc-text">Reservamos o direito de alterar os presentes Termos e Condições sem aviso prévio. O Utilizador está vinculado à versão dos Termos e Condições no momento da sua utilização, pelo que recomendamos a sua consulta periódica.</p>
        </div>
</div>`;
    const tAndC = document.createElement("div");
    tAndC.id = "tandc";
    tAndC.innerHTML = tAndCHtml;
    document.body.appendChild(tAndC);
}

function closeTandC() {
    const tAndC = document.getElementById("tandc");
    tAndC.remove();
}

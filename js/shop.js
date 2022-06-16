const shop = document.getElementById("shop");

var carrinho = [];

async function getData() {
    const url = "https://secret-energy.pt/wp/wp-json/wc/v3/products";
    const fetchData = {
        method: "GET",
        headers: {
            Authorization: //key removed for security
        },
    };

    const promise = await fetch(url, fetchData);
    const data = await promise.json();

    let productsHtml = ``;
    shop.innerHTML = productsHtml;

    data.forEach((product) => {
        productsHtml += `<div class="product">
        <a href="javascript:void(0)" class="product-link" onclick="openItem(${product.id})">
                <img class="product-img" src="${product.images[0].src}"/>
            </a>
            <h2 class="product-name">${product.name}</h2>
            <p class="product-price">${product.price_html}</p></div>`;
    });
    shop.innerHTML = productsHtml;
    closeFilter();
}

const filterMenu = document.getElementById("filter-menu");

function openFilter() {
    filterMenu.style.width = "250px";
    overlay.style.display = "block";
}

function closeFilter() {
    filterMenu.style.width = "0px";
    overlay.style.display = "none";
}

async function getFilter() {
    const url = "https://secret-energy.pt/wp/wp-json/wc/v3/products/categories";
    const fetchData = {
        method: "GET",
        headers: {
            Authorization:
                "Basic Y2tfZThlZGMyNTEwM2Q1NTcxZTViZTMyZWUzZmZhMzRiMmU3MTgzYzVmZTpjc19hNmRhOGUyNWQ3MGJiMmM5MDNjMjdmYWIxODIyODIwNWI2YWY2OTlh",
        },
    };
    const categoriesPromise = await fetch(url, fetchData);
    const data = await categoriesPromise.json();
    const filterMenu = document.getElementById("filter-menu");

    let filterHtml = `<a href="javascript:void0" onclick="closeFilter()" class="close-menu menu-icon"
    ><i class="fas fi-rr-cross-small"></i
></a>
<a href="javascript:void(0)" onclick="getData()" class="menu-item">Todos</a>`;

    data.forEach((category) => {
        filterHtml += `<a href="javascript:void(0)" onclick="filterProducts(${category.id})" class="menu-item">${category.name}</a>`;
    });

    filterMenu.innerHTML = filterHtml;

    getData();
}

getFilter();

async function filterProducts(productId) {
    const url = "https://secret-energy.pt/wp/wp-json/wc/v3/products";
    const fetchData = {
        method: "GET",
        headers: {
            Authorization:
                "Basic Y2tfZThlZGMyNTEwM2Q1NTcxZTViZTMyZWUzZmZhMzRiMmU3MTgzYzVmZTpjc19hNmRhOGUyNWQ3MGJiMmM5MDNjMjdmYWIxODIyODIwNWI2YWY2OTlh",
        },
    };
    const categoriesPromise = await fetch(url, fetchData);
    const data = await categoriesPromise.json();

    while (shop.firstChild) {
        shop.removeChild(shop.lastElementChild);
    }
    let productsHtml = ``;
    shop.innerHTML = productsHtml;
    data.forEach((product) => {
        if (product.categories[0].id === productId) {
            productsHtml += `<div class="product">



            <a href="javascript:void0" class="product-link" onclick="openItem(${product.id})">
                <img class="product-img" src="${product.images[0].src}"/>
            </a>
            <h2 class="product-name">${product.name}</h2>
            <p class="product-price">${product.price_html}</p>
            </div>
        `;
        }
    });

    shop.innerHTML = productsHtml;
    closeFilter();
}

async function openItem(id) {
    const url = `https://secret-energy.pt/wp/wp-json/wc/v3/products/${id}`;
    const fetchData = {
        method: "GET",
        headers: {
            Authorization:
                "Basic Y2tfZThlZGMyNTEwM2Q1NTcxZTViZTMyZWUzZmZhMzRiMmU3MTgzYzVmZTpjc19hNmRhOGUyNWQ3MGJiMmM5MDNjMjdmYWIxODIyODIwNWI2YWY2OTlh",
        },
    };
    const productPromise = await fetch(url, fetchData);
    const data = await productPromise.json();

    let imgs = [];

    let aromaHtml = ``;
    let corHtml = ``;
    let pedraHtml = ``;
    let ceraHtml = ``;

    if (data.attributes.length > 0) {
        data.attributes.forEach((attributte) => {
            switch (attributte.name) {
                case "Aroma":
                    aromaHtml = `<div class="product-attribute"><label for="aroma">Aroma:</label><br/>
                    <select id="aroma" name="aroma">`;
                    attributte.options.forEach((option) => {
                        aromaHtml += `<option value="${option}">${option}</option>`;
                    });
                    aromaHtml += `</select></div>`;
                    break;
                case "Cera":
                    ceraHtml = `<div class="product-attribute"><label for="cera">Cera:</label><br/>
                    <select id="cera" name="cera">`;
                    attributte.options.forEach((option) => {
                        ceraHtml += `<option value="${option}">${option}</option>`;
                    });
                    ceraHtml += `</select></div>`;
                    break;
                case "Pedra":
                    pedraHtml = `<div class="product-attribute"><label for="pedra">Pedra:</label><br/>
                    <select id="pedra" name="pedra">`;
                    attributte.options.forEach((option) => {
                        pedraHtml += `<option value="${option}">${option}</option>`;
                    });
                    pedraHtml += `</select></div>`;
                    break;
                case "Cor":
                    corHtml = `<div class="product-attribute"><label for="cor">Cor:</label><br/>
                    <select id="cor" name="cor">`;
                    attributte.options.forEach((option) => {
                        corHtml += `<option value="${option}">${option}</option>`;
                    });
                    corHtml += `</select></div>`;
                    break;
            }
        });
    }

    data.images.forEach((img) => {
        imgs.push(img.src);
    });

    let index = 0;

    let productHtml = `
    <div class="product-container">
        <div class="left">
        <a class="close-btn" href="javascript:void(0)" onclick="closeItem()"><span class="chevron left"></span>Voltar</a><br/>
        <img id="product-img" src="${imgs[index]}" alt=""/>
        </div>
        <div class="right">
        <h2 id="product-name">${data.name}</h2>
        <p id="price">${data.price_html}</p>
        ${data.description}
        <h3>Dimens&atilde;o:</h3>
        <p>&Oslash;${data.dimensions.width}x${data.dimensions.height}cm</p>
        <h3>Peso:</h3>
        <p>${data.weight}gr</p>
        <form id="product-details" action="./cart-msg.html" onsubmit="addToCart(${data.id})" class="attributes">
        ${aromaHtml}
        <div class="product-attribute">
            <label for="quantidade">Quantidade:</label><br/>
            <div id="quantidade-container">
            <input type="number" id="quantidade" name="quantidade">
            </div>
        </div>
        ${corHtml}
        ${ceraHtml}
        ${pedraHtml}
        <button class="add-cart-btn" type="submit" id="submit">adicionar ao carrinho</button>
        </form>
        </div>
        </div>`;

    const newPost = document.createElement("div");
    newPost.id = "product";
    newPost.classList.add("product-details");
    newPost.innerHTML = productHtml;
    document.body.appendChild(newPost);

    setInterval(function () {
        if (index === imgs.length) {
            index = 0;
        }
        document.getElementById("product-img").src = imgs[index];
        index++;
    }, 3000);
}

function closeItem() {
    const post = document.getElementById("product");
    post.remove();
}

function addToCart(id) {
    const quantidade = document.getElementById("quantidade").value;

    let aroma = "xxx";
    let cor = "xxx";
    let cera = "xxx";
    let pedra = "xxx";

    if (document.getElementById("aroma")) {
        aroma = document.getElementById("aroma").value;
    }
    if (document.getElementById("cor")) {
        cor = document.getElementById("cor").value;
    }
    if (document.getElementById("cera")) {
        cera = document.getElementById("cera").value;
    }
    if (document.getElementById("aroma")) {
        pedra = document.getElementById("pedra").value;
    }

    let newProduct = {
        id: id,
        quantidade: quantidade,
        aroma: aroma,
        cor: cor,
        cera: cera,
        pedra: pedra,
    };

    const index = localStorage.length;

    localStorage.setItem(JSON.stringify(index), JSON.stringify(newProduct));
}

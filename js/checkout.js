let data = [];

let orderHtml = ``;

document.getElementById('subtotal').innerHTML = sessionStorage.getItem('subtotal');
sessionStorage.removeItem('subtotal');
document.getElementById('shipping').innerHTML = sessionStorage.getItem('shipping');
sessionStorage.removeItem('shipping');
document.getElementById('total').innerHTML = sessionStorage.getItem('total');
sessionStorage.removeItem('total');

for (i = 0; i < sessionStorage.length; i++) {
    data.push(JSON.parse(sessionStorage.getItem(i)));
}

data.forEach(async (product) => {
    const url = `https://secret-energy.pt/wp/wp-json/wc/v3/products/${product.id}`;
    const fetchData = {
        method: "GET",
        headers: {
            Authorization:
            "Basic Y2tfZThlZGMyNTEwM2Q1NTcxZTViZTMyZWUzZmZhMzRiMmU3MTgzYzVmZTpjc19hNmRhOGUyNWQ3MGJiMmM5MDNjMjdmYWIxODIyODIwNWI2YWY2OTlh",
        },
    };
    const productPromise = await fetch(url, fetchData);
    const data = await productPromise.json();

    nome = `&Nome: ${data.name}/`;

    quantidade = `Quantidade: ${product.quantidade}/`;

    if (product.cor) {
        cor = `- - ${product.cor}/`;
    }
    if (product.pedra) {
        pedra = `- - ${product.pedra}/`;
    }
    if (product.aroma) {
        aroma = `- - ${product.aroma}/`;
    }
    if (product.cera) {
        cera = `- - ${product.cera}/`;
    }

    if (data.sale_price === "") {
        preco = `${data.price}€`;
    } else {
        preco = `${data.sale_price}€`;
    }

    let item = nome + quantidade + cor + pedra + aroma + cera + preco;

    orderHtml += item;

    document.getElementById("order").innerHTML=orderHtml;
});

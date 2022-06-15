let data = [];

let subtotal = 0;
let shipping = 0;

const cartList = document.getElementById("cart-list");

const submit = document.getElementById("submit");

function printCart() {
    for (i = 0; i <= sessionStorage.length - 1; i++) {
        data.push(JSON.parse(sessionStorage.getItem(i)));
    }
    if (data.length >= 1) {
        let index = 0;
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

            const newProduct = document.createElement("div");
            newProduct.classList.add("list-item");

            if (data.shipping_class) {
                shipping = parseInt(data.shipping_class);
            }

            let cor,
                pedra,
                aroma,
                cera,
                preco = "";

            if (!product.cor) {
                cor = "";
            } else {
                cor = `${product.cor}`;
            }
            if (!product.pedra) {
                pedra = "";
            } else {
                pedra = `${product.pedra}`;
            }
            if (!product.aroma) {
                aroma = "";
            } else {
                aroma = `${product.aroma}`;
            }
            if (!product.cera) {
                cera = "";
            } else {
                cera = `${product.cera}`;
            }

            if (data.sale_price === "") {
                preco = data.price;
            } else {
                preco = data.sale_price;
            }

            subtotal += product.quantidade * preco;

            const productHtml = `<div class="product"><img class= "item-img" src="${data.images[0].src}" alt="">
        <div class="item-details">
            <p class="item-name">${data.name}</p>
            <p class="item-description">${cor} ${pedra} ${aroma} ${cera}</p>
        </div></div>
        <div class="quantity">
        <p>${product.quantidade}</p></div>
        <div class="price"><p>${preco}&euro;</p><a href="./cart.html" onclick="removeItem(${index})" class="menu-icon"
        ><i class="fas fi-rr-cross-small"></i
    ></a></div>`;

            newProduct.innerHTML = productHtml;
            cartList.appendChild(newProduct);
            index++;
            document.getElementById("subtotal").innerHTML = subtotal;
            document.getElementById("portes").innerHTML = `${shipping}.00`;

            let total = subtotal + shipping;
            document.getElementById("total").innerHTML = total;

            sessionStorage.setItem("shipping", JSON.stringify(shipping));
            sessionStorage.setItem("subtotal", JSON.stringify(subtotal));
            sessionStorage.setItem("total", JSON.stringify(total));
        });
        submit.style.display = "flex";
    } else {
        const emptyCart = document.createElement("p");
        emptyCart.classList.add("empty");
        emptyCart.classList.add("list-item");
        emptyCart.innerHTML = `O seu carrinho est&aacute; vazio.`;

        cartList.appendChild(emptyCart);

        submit.style.display = "none";
    }
}
function removeItem(index) {
    let newData = [];
    for (i = 0; i < data.length; i++) {
        if (i !== index) {
            newData.push(data[i]);
        }
    }

    if (!newData) {
        sessionStorage.clear();
    } else {
        sessionStorage.clear();
        let i = 1;

        newData.forEach((product) => {
            sessionStorage.setItem(i, JSON.stringify(product));
            i++;
        });
    }
}

function printTotal() {
    document.getElementById("subtotal").innerHTML = subtotal;
    // document.getElementById("shipping").innerHTML = shipping;
}
printCart();
setInterval(printTotal(), 100);

console.log(subtotal);

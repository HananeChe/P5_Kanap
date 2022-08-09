




let productsLink = document.querySelector("section a");
let imgProducts = document.querySelector("article img");
let nameProducts = document.querySelector("article h3");
let descriptionProducts = document.querySelector("article p");
let data = "";

const createItem = (item) => {
    let newArticle = document.createElement("article");
    document.querySelector("section").innerHTML +=
    `<a href= "http://127.0.0.1:5501/html/product.html?id=${item._id}">
    <article>
    <img src="${item.imageUrl}" alt="${item.altTxt}">
    <h3 class="productName">${item.name}</h3>
    <p class="productDescription">${item.description}
    </article>
    </a>`
};

const getProduct = () => {
    fetch ("http://localhost:3000/api/products")
    .then(res => res.json())
    .then(data => {

        //productsLink.innerHTML = `<a href= "http://127.0.0.1:5501/html/product.html?id=${data[0]._id}">`

        for (let i = 0; i< data.length; i++){
            createItem(data[i])
        }
        
    });
}

getProduct();


    
//imgProducts.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`
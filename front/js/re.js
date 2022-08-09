let data = "";
let imgProduct = document.querySelector(".item__img");
let nameProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorProduct = document.getElementById("colors");
let button = document.getElementById("addToCart");

//recuperation id du produit 

const getProduct = (id) => {
    fetch (`http://localhost:3000/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
           pushItem(data);
        console.log(data);
    });
}

const getId = () => {
    return new URL(location.href).searchParams.get("id")
    console.log(getId);
}

let id = getId(); 


getProduct(id); 
getId ();

// affichage du produit  

const pushItem = (data) => {
    imgProduct.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`
    nameProduct.innerHTML = `<h1 id="title">${data.name}</h1>`
    priceProduct.innerHTML = `<span id="price">${data.price}</span>`
    descriptionProduct.innerHTML = `<p id="description">${data.description}</p>`
    let colorData = data.colors;
    const selectedColor = () => {

    colorData.forEach((color) => {
    colorProduct.innerHTML += `<option value=${color}>${color}</option>`;
});
};
selectedColor();




//reinitalisation du panier 

initBasket = () => {
    let productsInBasket = JSON.parse(localStorage.getItem("selected"));
    if (productsInBasket == null) {
        productsInBasket = [];
        localStorage.setItem ("selected", JSON.stringify(productsInBasket));
    }
}


// ajout du produit dans le local storage 


document.querySelector(".addToCart").addEventListener("click", (e) => {
        e.preventDefault();
        initBasket();
        let product = {
            nom: data.name,
            id: data.id,
            colors: colors.value,
            quantity : parseInt(document.querySelector(".quantity").value),
        }
        saveProductInBasket(product);
    });




//enregistrer le panier 

saveProductInBasket = (product) => {

}
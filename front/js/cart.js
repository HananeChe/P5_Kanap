data = "";
totalQuantity = [];
totalPrice = [];



//recuperation donnee produit

//let local = JSON.parse(localStorage.getItem("basket"));


//recuperation fetch pour le prix 
const getProduct = () => {
    fetch (`http://localhost:3000/api/products`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let priceId = {};
        for (let i = 0; i < data.length; i++) {
            priceId[data[i]._id] = data[i].price 
        }



const localProducts = () => {
    let local = JSON.parse(localStorage.getItem("basket"));
    if(local != null) {
        for (let i = 0; i < local.length; i++) {
            console.log(local[i]);
    }
 }
}

// push dans le panier 

const pushProduct = () => {
    let local = JSON.parse(localStorage.getItem("basket"));
    let cartSection = document.querySelector("#cart__items");
    if(local != null) {
        for (let i = 0; i < local.length; i++) {
            const productPrice = priceId[local[i].id];

            cartSection.innerHTML += 
            `<article class="cart__item" data-id="${local[i].id}" data-color="${local[i].couleur}">
            <div class="cart__item__img">
              <img src="${local[i].image}" alt="${local[i].alt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${local[i].nom}</h2>
                <p>${local[i].couleur}</p>
                <p>${productPrice} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${local[i].quantite}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>`




// modification de la quantite 

const modifyQuantity = () => {
    let local = JSON.parse(localStorage.getItem("basket"));
    let itemQuantity = document.querySelectorAll(".itemQuantity");
    for (let i = 0; i < itemQuantity.length; i++) {
        const element = itemQuantity[i];

        itemQuantity[i].addEventListener('change', (e) => {
            e.preventDefault();
            const getArticle = e.target.closest("article");
            const getArticleId = getArticle.dataset.id;
            console.log(getArticleId);
            const getArticleColor = getArticle.dataset.color;
            console.log(getArticleColor);
            if(local[i].id === getArticleId && local[i].couleur === getArticleColor) {
                local[i].quantite = parseInt(itemQuantity[i].value);
            }
            localStorage.setItem ("basket", JSON.stringify(local));
            location.reload();
        }); 

    }
}
modifyQuantity();

//suppression d un produit 
const deleteItem = () => {
    let local = JSON.parse(localStorage.getItem("basket"));
    let deleteItem = document.querySelectorAll(".deleteItem");
    for (let i = 0; i < deleteItem.length; i++) {
            deleteItem[i].addEventListener('click',(e) => {
                e.preventDefault();
                const deleteArticleId = local[i].id;
                const deleteArticleColor = local[i].color;
                local = local.filter(
                    (element) => element.id != deleteArticleId || element.color != deleteArticleColor);
                console.log(local);
                e.target.closest("article").remove();
    
                localStorage.setItem ("basket", JSON.stringify(local));
                alert("Article supprimé du panier.");
                location.reload();
            });
        };
}
deleteItem();
}
    };

// totaux 
const sommes = () => {
    //let local = JSON.parse(localStorage.getItem("basket"));
    let somme = localProducts();
    console.log(somme);
    let quantityNumber = somme[i].quantite;
    let priceNumber = parseInt (productPrice * local[i].quantite);

    totalQuantity.push(quantityNumber);
    totalPrice.push(priceNumber);
    let sommeQuantity = totalQuantity.reduce(
        (accumulateur, valeurCourante) => accumulateur + valeurCourante
        , 0);

    let sommePrice = totalPrice.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante
    , 0);

    document.getElementById("totalQuantity").innerHTML += `${sommeQuantity}`;
    document.getElementById("totalPrice").innerHTML += `${sommePrice}`;

}
sommes ();



}
pushProduct();

});
};
getProduct();





//FORMULAIRE 

const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const adresse = document.getElementById("address");
const ville = document.getElementById("city");
const email = document.getElementById("email");
let prenomValue = "";
let nomValue = "";
let emailValue = "";


//regex 

const firstNameForm = () => {
    prenom.addEventListener("input", (e) => {
        if (e.target.value.length == 0) {
            console.log("nothing inside");
            prenomValue = null; 
        } else if (!e.target.value.match(/^[a-z A-Z]{3,90}$/)) {
            firstNameErrorMsg.innerHTML = "Prénom invalide (ex: Jon)";
        
        } else if 
            (e.target.value.match(/^[a-z A-Z]{3,90}$/)){
                prenomValue = e.target.value;
                firstNameErrorMsg.innerHTML = "";
                console.log("prenom enregistré");
                console.log(prenomValue);
            }
        }
    
    )
}

const lastNameForm = () => {
    nom.addEventListener("input", (e) => {
        if (e.target.value.length == 0) {
            console.log("nothing inside");
            nomValue = null; 
            console.log(nomValue);
        } else if (!e.target.value.match(/^[a-z A-Z]{3,90}$/)) {
            lastNameErrorMsg.innerHTML = "Nom invalide (ex: Snow)"
        
        } else if 
            (e.target.value.match(/^[a-z A-Z]{3,90}$/)){
                nomValue = e.target.value;
                lastNameErrorMsg.innerHTML = "";
                console.log("nom enregistré");
                console.log(nomValue);
            }
        }
    )
}
const addressForm = () => {
    adresse.addEventListener("input", (e) => {
        if (e.target.value.length == 0) {
            console.log("nothing inside");
            adresseValue = null; 
            console.log(adresseValue);
        } else if 
            (e.target.value.match(/^[a-zA-Z0-9.,-_ ]{5,50}[ ]{0,2}$/)){
                adresseValue = e.target.value;
                addressErrorMsg.innerHTML = "";
                console.log("adresse enregistrée");
                console.log(adresseValue);
        } else {
            addressErrorMsg.innerHTML = "Adresse invalide (ex: 41 rue des Hommes)";
        }
    }
    )
}

const cityForm = () => {
    ville.addEventListener("input", (e) => {
        if (e.target.value.length == 0) {
            console.log("nothing inside");
            villeValue = null; 
            console.log(villeValue);
        } else if 
            (e.target.value.match(/^[a-zA-Z.,-_ ]{5,50}[ ]{0,2}$/)){
                villeValue = e.target.value;
                cityErrorMsg.innerHTML = "";
                console.log("ville enregistrée");
                console.log(villeValue);
        } else {
            cityErrorMsg.innerHTML = "Ville invalide (ex: Winterfell)";
        }
    }
    )
}
const emailForm = () => {
    email.addEventListener("input", (e) => {
        if (e.target.value.length == 0) {
            console.log("nothing inside");
            emailValue = null; 
            console.log(emailValue);
        } else if 
            (e.target.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/)){
                emailValue = e.target.value;
                emailErrorMsg.innerHTML = "";
                console.log("email enregistré");
                console.log(emailValue);
        } else {
            emailErrorMsg.innerHTML = "E-mail invalide (ex: snowj@contact.fr)";
        }
    }
    )
}
firstNameForm();
lastNameForm();
emailForm();
addressForm();
cityForm();

//ENVOI AU LOCAL STORAGE 

//initialisation du tableau contact

initContact = () => {
    let localFormulaire = JSON.parse(localStorage.getItem("contact"));
    if (localFormulaire === null){
        localFormulaire = [];
        localStorage.setItem ("contact", JSON.stringify(localFormulaire));
    }
}


// event au bouton commander 

const btnSubmit = document.querySelector(".cart__order__form__submit");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    initContact();
    let contact = {
        firstName: prenom.value,
        lastName: nom.value,
        address: adresse.value, 
        city: ville.value, 
        email: email.value,
    };
    let products = [];
    saveContact(contact, products);
    sendToServer(contact, products);
});


// sauvegarde des données du formulaire

    const saveContact = (contact, products) => {
        let isValid = true;
        if (prenomValue && nomValue && emailValue ) {
            console.log("that's good");
            isValid = true;       
            let localFormulaire = JSON.parse(localStorage.getItem("contact"));
            console.log(localFormulaire);
        } else {
            console.error("Veuillez remplir le formulaire");
        }
        localStorage.setItem("contact", JSON.stringify(contact));
    }



// ENVOI AU SERVEUR
    const sendToServer = (contact, products) => {
      fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      body: JSON.stringify({ contact, products }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(server => {
        const orderId = server.orderId;
        console.log(orderId);

        if (orderId != null) {
            //setItem sur le panier et je le vide 
            console.log("confirmation en cours");
            location.href = "confirmation.html?id=" + `${orderId}`;
        }
      });

  }




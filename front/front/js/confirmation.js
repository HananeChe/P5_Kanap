

//récupération id de commande

const getId = () => {
    return new URL(location.href).searchParams.get("id")
};
let id = getId();
console.log(id);


// push ID dans le html 

    document.querySelector("#orderId").innerHTML = `<span id="orderId">${id}</span>`

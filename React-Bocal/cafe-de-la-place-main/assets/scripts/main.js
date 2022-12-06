/**
 * Script principal
 */

/*******************************************/
/*         Prototypes des produits         */
/*******************************************/

/**
 * Prototype produit
 * @param {String} name
 * @param {String} type
 * @param {Number} buyingPrice
 * @param {Number} sellingPrice
 * @param {Number} vat
 * @param {Number} stock
 */
function Product(name, type, buyingPrice, sellingPrice, vat, stock) {
    /* Propriétés */
    // Création d'un identifiant unique à partie de la date et
    // du nom formatté sans espaces ni caractères spéciaux
    this.id = new Date().getTime() + name.replace(/[^\w\s]/gi, "");
    this.name = String(name); // Nom (conversion en chaine de caractères)
    this.type = String(type); // Type (conversion en chaine de caractères)
    this.buyingPrice = Number(buyingPrice).toFixed(2); // Prix d'achat HT (conversion en chaine de caractères à 2 décimales)
    this.sellingPrice = Number(sellingPrice).toFixed(2); // Prix de vente HT (conversion en chaine de caractères à 2 décimales)
    this.vat = Number(vat); // TVA (conversion en nombre)
    this.stock = stock >= 0 ? parseInt(stock) : 0; // Stock (conversion en nombre entier supérieux ou égal à 0)
}

/**
 * Mise à jour des propriétés calculées
 * @param {Product} product
 * @returns
 */
Product.updateValues = (product) => {
    product.sellingPriceWithVat = (
        Math.round(product.sellingPrice * (1 + product.vat / 100) * 100) / 100
    ).toFixed(2); // Calcul du prix de vente TTC
    product.margin = (product.sellingPrice - product.buyingPrice).toFixed(2); // Calcul de la marge

    return product;
};

/**
 * Prototype boisse alcoolisée
 * @param {String} name
 * @param {String} type
 * @param {Number} buyingPrice
 * @param {Number} sellingPrice
 * @param {Number} vat
 * @param {Number} stock
 * @param {Number} abv
 */
function AcoholicDrink(name, type, buyingPrice, sellingPrice, vat, stock, abv) {
    /* Appel du prototype Produit */
    Product.call(this, name, type, buyingPrice, sellingPrice, vat, stock);

    /* Propriétés */
    this.abv = Number(abv);
}

/*******************************************/
/*                 Fonctions               */
/*******************************************/

/**
 * Récupération des produits depuis le localStorage
 * @returns Array
 */
function getProductsFromLocalStorage() {
    try {
        let products = localStorage.getItem("@cafeDeLaPlace:products"); // Récupération des produits au format JSON
        products = JSON.parse(products); // Lecture des produits sous forme d'objet

        return Array.isArray(products) ? products : []; // Retourne products si c'est un tableau sinon retourne un tableau vide
    } catch (e) {
        console.log(e); // Affichage de l'erreur
        return [];
    }
}

/**
 * Affichage du message
 * @param {String} message
 */
function showMessage(message, type) {
    /* Récupération du conteneur du message */
    const messageContainer = document.querySelector("#addProductMessage");

    /* Affichage du message */
    messageContainer.innerText = message; // Modification du texte

    // Changement du style selon le type de message
    if (type === "error") {
        messageContainer.classList.add("error");
        messageContainer.classList.remove("success");
    } else {
        messageContainer.classList.add("success");
        messageContainer.classList.remove("error");
    }

    /* Effacement du message après 2 secondes */
    setTimeout(() => {
        messageContainer.innerText = "";
    }, 2000);
}

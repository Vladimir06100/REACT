/**
 * Script pour l'édition de produit
 */
(function () {
    /*******************************************/
    /*                 Variables               */
    /*******************************************/

    let products; // Produits
    let product; // Produit
    let productIndex; // Index du produit
    let editProductForm = document.querySelector("#editProductForm");

    /*******************************************/
    /*                 Evènements              */
    /*******************************************/

    /* Chargement de la page */
    document.addEventListener("DOMContentLoaded", () => {
        /* Récupération des produits depuis le localStorage */
        products = getProductsFromLocalStorage();

        /* Récupération de l'id dans les parmaètres d'url */
        const params = new URLSearchParams(
            document.location.search.substring(1)
        ); // Création d'un object URLSearchParams
        const id = params.get("id"); // Récupération de l'id

        /* Récupération du produit */
        productIndex = products.findIndex((element) => element.id === id); // Récupération de l'index du produit

        // Si l'index du produit n'est pas trouvé
        if (productIndex === -1) {
            window.location.href = "index.html"; //Redirection vers la page stock
        }

        product = products[productIndex]; // Récupération du produit

        /* Affichage des valeurs du produit dans le formulaire */
        for (let property in product) {
            let productInput = editProductForm.querySelector(
                "input[name=" + property + "]"
            ); // Récupération du champ de saisie par son nom

            if (productInput) {
                productInput.value = product[property];
            }
        }
    });

    /* Validation de l'édition de produit */
    editProductForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut, la page de rechargera pas

        /* Récupération des données */
        const data = new FormData(e.target);

        /* Edition du produit */
        product.name = data.get("name");
        product.type = data.get("type");
        product.buyingPrice = data.get("buyingPrice");
        product.sellingPrice = data.get("sellingPrice");
        product.vat = data.get("vat");
        product.stock = data.get("stock");
        if (product.type === "Boisson Alcoolisée") {
            product.abv = data.get("abv");
        }

        Product.updateValues(product); // Mise à jour des propriétés calculées

        /* Stockage du produit dans le localStorage */
        try {
            let products = getProductsFromLocalStorage(); // Récupération des produits depuis le localStorage

            // Si l'index est différent de -1
            if (productIndex != -1) {
                products[productIndex] = product; // Modification du produit

                localStorage.setItem(
                    "@cafeDeLaPlace:products",
                    JSON.stringify(products)
                ); // Stockage des produits dans le localStorage au format JSON

                showMessage("Produit modifié", "success"); // Message de succès
            }
        } catch (e) {
            console.log(e); // Affichage de l'erreur
            showMessage("Une erreur s'est produite", "error"); // Message d'erreur
        }
    });
})();

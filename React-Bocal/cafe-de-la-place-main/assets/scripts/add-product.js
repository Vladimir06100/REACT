/**
 * Script pour l'ajout de produit
 */
(function () {
    /*******************************************/
    /*                 Evènements              */
    /*******************************************/

    /* Validation de l'ajout de produit */
    document
        .querySelector("#addProductForm")
        .addEventListener("submit", (e) => {
            e.preventDefault(); // Empêche le comportement par défaut, la page de rechargera pas

            /* Récupération des données */
            const data = new FormData(e.target);

            /* Création du produit */
            let product;
            if (data.get("type") === "Boisson Alcoolisée") {
                product = new AcoholicDrink(
                    data.get("name"),
                    data.get("type"),
                    data.get("buyingPrice"),
                    data.get("sellingPrice"),
                    data.get("vat"),
                    data.get("stock"),
                    data.get("abv")
                );
            } else {
                product = new Product(
                    data.get("name"),
                    data.get("type"),
                    data.get("buyingPrice"),
                    data.get("sellingPrice"),
                    data.get("vat"),
                    data.get("stock")
                );
            }

            Product.updateValues(product); // Mise à jour des propriétés calculées

            /* Stockage du produit dans le localStorage */
            try {
                let products = getProductsFromLocalStorage(); //Récupération des produits depuis le localStorage

                products.push(product); // Ajout du produit dans le tableau

                localStorage.setItem(
                    "@cafeDeLaPlace:products",
                    JSON.stringify(products)
                ); // Stockage des produits dans le localStorage au format JSON

                showMessage("Produit créé", "success"); // Message de succès

                e.target.reset(); // Réinitialisation du formulaire
            } catch (e) {
                console.log(e); // Affichage de l'erreur
                showMessage("Une erreur s'est produite", "error"); // Message d'erreur
            }
        });
})();

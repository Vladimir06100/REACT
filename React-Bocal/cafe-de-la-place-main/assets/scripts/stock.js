/**
 * Script pour la gestion du stock
 */
(function () {
    /*******************************************/
    /*                 Fonctions               */
    /*******************************************/

    /**
     * Affichage des produits
     * @param {Node} container
     * @param {Array} products
     */
    function renderProducts(container, products) {
        /* Si produits contient un tableau */
        if (Array.isArray(products)) {
            /* Affichage des lignes de produits */
            products.forEach((product, index) => {
                /* Affichage de la ligne produit */
                let productLine = document.createElement("tr"); // Création de la ligne produit
                productLine.innerHTML = `
                    <tr>
                        <td>${product.name}</td>
                        <td><input type="number" class="stock-input ${
                            product.stock < 5 ? "low" : ""
                        }" min="0" step="1" value="${product.stock}" /></td>
                        <td>${product.type}</td>
                        <td>${product.buyingPrice}€</td>
                        <td>${product.sellingPrice}€ (${
                    product.sellingPriceWithVat
                }€)</td>
                        <td>${product.margin}€</td>
                        <td>
                            <button class="stock-action edit"><span class="material-icons">edit</span></button>
                            <button class="stock-action delete"><span class="material-icons">delete</span></button>
                        </td> 
                    </tr>
                `; // Création du contenu
                container.appendChild(productLine); // Ajout de la ligne produit

                /* Modification de stock */
                productLine
                    .querySelector(".stock-input")
                    .addEventListener("input", (e) => {
                        /* Mise à jour du stock du produit */
                        const stock = e.target.value; // Récupération du stock

                        // Si le stock est supérieur ou égal à 0
                        if (stock >= 0) {
                            products[index].stock = e.target.value; // Mise à jour du stock

                            // Modification de la couleur du champ de saisie du stock
                            if (stock < 5) {
                                e.target.classList.add("low");
                            } else {
                                e.target.classList.remove("low");
                            }
                        } else {
                            e.target.value = 0; // Changement de la valeur à 0
                        }

                        /*  Stockage des produits dans le localStorage au format JSON */
                        localStorage.setItem(
                            "@cafeDeLaPlace:products",
                            JSON.stringify(products)
                        );
                    });

                /* Edition du produit */
                productLine
                    .querySelector(".stock-action.edit")
                    .addEventListener("click", (e) => {
                        /* Redirection vers la page d'édition du produit */
                        window.location.href =
                            "edit-product.html?id=" + product.id;
                    });

                /* Suppression du produit */
                productLine
                    .querySelector(".stock-action.delete")
                    .addEventListener("click", () => {
                        /* Suppression du produit */
                        products.splice(index, 1); // Suppression du produit dans le tableau produits
                        productLine.remove(); // Suppression de la ligne produit

                        /*  Stockage des produits dans le localStorage au format JSON */
                        localStorage.setItem(
                            "@cafeDeLaPlace:products",
                            JSON.stringify(products)
                        );
                    });
            });
        }
    }

    /*******************************************/
    /*                 Evènements              */
    /*******************************************/

    /* Chargement de la page */
    document.addEventListener("DOMContentLoaded", () => {
        /* Récupération du conteneur des lignes du tableau de stock */
        const stockContainer = document.querySelector(".stock-table tbody");

        /* Récupération des produits depuis le localStorage */
        const products = getProductsFromLocalStorage();

        /* Affichage des produits */
        renderProducts(stockContainer, products);
    });
})();

import "./ProductView.css";

/**
 * ProductView est un composant qui affiche un produit dans mon magasin
 */
function ProductView(props) {
  return (
    <div className="product_view">
      <h2>Nom du produit: {props.name}</h2>
      <p>Prix: {props.price} €</p>
      <details value="Voir description">
        <summary>Voir description</summary>
        Description: {props.description}
      </details>

      <p>Catégorie: {props.category}</p>

      <figure>
        <img alt="Un Produit" src={props.image} />
        <figcaption>{props.name}</figcaption>
      </figure>
      
    </div>
  );
}

export default ProductView;

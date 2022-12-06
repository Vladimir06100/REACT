import "./Section.css";
import ProductView from "../ProductView/ProductView";

/**
 * Section est un composant
 * Ce composant affiche tous les produits de notre magasin
 */
function Section() {
  const productList = [
    {
      name: "Redbull",
      price: "15.00",
      description: "Bla bla donne des ailes",
      category: "Drink",
      image:
        "https://media.istockphoto.com/photos/red-bull-picture-id458716829?k=20&m=458716829&s=170667a&w=0&h=jFckBoQiXrRsyNfvEhVXM0ZHCffZi3KkKKy85edPmmY=",
    },
    {
      name: "Monster",
      price: "10.00",
      description: "Lui donne pas d'ailes, transforme en monstre.",
      category: "Drink",
      image:
        "https://media.auchan.fr/A0220140313000590166PRIMARY_2048x2048/B2CD/",
    },
    {
        name: "L'eau de vie",
        price: "25.00",
        description: "Tu prends la Vodka et tu deviens la Vodka",
        category: "Drink",
        image:
          "https://www.distillerie-salamandre.com/wp-content/uploads/2015/04/eau-de-vie-kiwi.jpg",
      },
  ];

  return (
    <section className="section">
      {
        productList.map(productObject => <ProductView name={productObject.name} price={productObject.price} description={productObject.description} category={productObject.category} image={productObject.image} />)
      }
    </section>
  );
}

export default Section;

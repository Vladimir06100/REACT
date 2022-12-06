import {Link} from "react-router-dom";
function Menu() {
  return (
    <div className="Menu">
      <button>
        <Link to="/accueil">Accueil</Link>
      </button>
      <button>
        <Link to="/connexion">Connexion</Link>
      </button>
      <button>
        <Link to="/contact">Contacts</Link>
      </button>
    </div>
  );
}

export default Menu;

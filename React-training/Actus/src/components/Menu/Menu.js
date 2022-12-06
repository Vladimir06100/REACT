import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/search">Recherche</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;

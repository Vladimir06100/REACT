import "./App.css";
import Accueil from "./json/Accueil";
import Contact from "./json/Contact";
import Connexion from "./json/Connexion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Accueil />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/connexion",
		element: <Connexion />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

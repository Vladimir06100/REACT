import { useState } from "react";

function Search({ addHistory }){
    // Création d'une variable d'état firstName
    const [firstName , setFirstName] = useState("");

    /**
     * Mettre à jour ma variable d'état quand l'input est modifié
     */
    function handleInputChange(e){
        let inputValue = e.target.value;
        setFirstName(inputValue);
    }

    /**
     * il faut utiliser l'api https://api.agify.io?name=bella
     */
    async function handleValidate(){
        // Appel de l'API
        let response = await fetch(`https://api.agify.io?name=${firstName}`);

        // Transformation de la réponse en un objet utilisable
        let responseData = await response.json();

        let name = responseData.name;
        let age = responseData.age;

        // Je renvoie l'information à App
        addHistory({
            firstName: name, 
            age: age
        });
    }

    return(
        <div id="search">
            <label>Prénom</label>
            <input type="text" onChange={handleInputChange} value={firstName} />
            <button onClick={handleValidate}>Valider</button>
        </div>
    )
}

export default Search;
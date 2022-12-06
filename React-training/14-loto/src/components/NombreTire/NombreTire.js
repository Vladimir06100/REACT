import "./NombreTire.css";

function NombreTire(props){
    return(
        <span className="nombre_tire">{ props.number }</span>
    )
}

export default NombreTire
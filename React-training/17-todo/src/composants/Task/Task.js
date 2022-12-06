/**
 * Composant qui affiche une seule tâche
 */
function Task(props){
    return(
        <li>
            <p>{props.content}</p>
        </li>
        
    )
}

export default Task;
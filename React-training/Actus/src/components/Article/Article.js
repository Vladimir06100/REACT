import "./Article.css"

function Article({ title, description }){
    return(
        <li className="article">
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default Article;
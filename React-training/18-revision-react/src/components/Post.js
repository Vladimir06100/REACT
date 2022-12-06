function Post(props) {
  return (
    <article>
      <h2>{props.titre}</h2>
      <p>{props.contenu}</p>
      <p>
        Par {props.prenom} {props.nom}
      </p>
      <p>Le {props.date}</p>
      <button onClick={props.sabotage}>Sabotage</button>
    </article>
  );
}

export default Post;


function Book(props) {
	let imageAlt = `Image de ${props.title}`;
	return (
		<div>
			<p>{props.title}</p>
			<p>{props.author}</p>
			<p>{props.dateOfPublication}</p>
			<p>Ma note : {props.note}</p>
			<img alt={imageAlt} src={props.image} style={{ width: "100px" }} />
		</div>
	);
}

export default Book;

//! =>
/* function foisDeux(num) {
	return num * 2;
}
const foisDeux = (num) => num * 2;
 */

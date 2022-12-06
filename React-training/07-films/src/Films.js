import "./App.css";
function Film(props) {
	return (
		<div className="boxFilm">
			<div className="Element">
				<video
					src={props.video}
					controls
					width="200px"
					type="video/mp4"></video>
				<h1>{props.title}</h1>
				<p>{props.resume}</p>
				<p>
					{props.date}
					{props.heure}
				</p>
			</div>
		</div>
	);
}

export default Film;

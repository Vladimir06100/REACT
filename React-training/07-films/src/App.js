import Film from "./Films";


const FilmArray = [
  {
    video:
      "/Users/vladimirsinkevitch/Desktop/React/filme-a-la-affiche/src/IMG_7604.MP4",
    title: "House of dragon",
    resume: "Cool",
    date: "04/10/2022",
    heure: "19h00, 21h30, 23h00",
  },
  {
    video:
      "/Users/vladimirsinkevitch/Desktop/React/filme-a-la-affiche/src/IMG_7604.MP4",
    title: "Games of Throne",
    resume: "Cool",
    date: "04/10/2022",
    heure: "19h00, 21h30, 23h00",
  },
  {
    video:
      "/Users/vladimirsinkevitch/Desktop/React/filme-a-la-affiche/src/IMG_7604.MP4",
    title: "Rick and Morty",
    resume: "Cool",
    date: "04/10/2022",
    heure: "19h00, 21h30, 23h00",
  },
  {
    video:
      "/Users/vladimirsinkevitch/Desktop/React/filme-a-la-affiche/src/IMG_7604.MP4",
    title: "007",
    resume: "Cool",
    date: "04/10/2022",
    heure: "19h00, 21h30, 23h00",
  },
  {
    video:
      "/Users/vladimirsinkevitch/Desktop/React/filme-a-la-affiche/src/IMG_7604.MP4",
    title: "Deadpool 3",
    resume: "Cool",
    date: "04/10/2022",
    heure: "19h00, 21h30, 23h00",
  },
];

function App() {
  return (
    <div className="App">
      {FilmArray.map((filmObject) => {
        return (
          <Film
            video={filmObject.video}
            title={filmObject.title}
            resume={filmObject.resume}
            heure={filmObject.heure}
          />
        );
      })}
    </div>
  );
}

export default App;

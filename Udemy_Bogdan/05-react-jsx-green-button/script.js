const App = ({initialButtonText, initialButtonClass}) => {
  // const App = (props) => {
 // console.log(props)
  // const { initialButtonText } = props
  // console.log('called');
  let [buttonText, setButtonText] = React.useState(initialButtonText);
  let [classesList, setClassesList] = React.useState(initialButtonClass);



  const onButtonClick = () => {
    setButtonText('Hello from React')
    setClassesList('green-btn')
  }
  //setButtonText(`Hello from React, ${Math.random}`  )
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}
//	const helloWorldHeading = /*#__PURE__*/React.createElement("h1", null, "Hello from react");
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="click ME" initialButtonClass="" />);
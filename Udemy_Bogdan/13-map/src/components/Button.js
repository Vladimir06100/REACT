function Button({ onClick, text }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{text}</button>;
}
export default Button;

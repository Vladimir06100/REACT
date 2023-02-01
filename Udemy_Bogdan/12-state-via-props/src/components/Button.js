function Button({ onClick }) {
  console.log('Button rendered')
  return <button onClick={onClick}>Click me</button>;
}
export default Button;
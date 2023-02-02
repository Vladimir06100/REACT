import { useState } from 'react';
function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();

    // const userData = {
    //   username,
    //   password,
    //password: event.target.password.value,
    // };
    console.log(data);
    alert(JSON.stringify(data));
  }
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => handleInputChange(e, 'username')}
            value={data.username}
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => handleInputChange(e, 'password')}
            value={data.password}
            type="password"
            autoComplete="on"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;

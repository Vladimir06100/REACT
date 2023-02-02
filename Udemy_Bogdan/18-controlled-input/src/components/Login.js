import { useState } from 'react';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();

    const userData = {
      username,
      password,
      //password: event.target.password.value,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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

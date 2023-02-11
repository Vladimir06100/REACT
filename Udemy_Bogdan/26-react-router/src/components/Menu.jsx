import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <Link to="/">Go to home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Menu;

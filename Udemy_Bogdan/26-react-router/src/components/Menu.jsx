import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      {/* / при абсолютной навигации */}
      <Link to=".">Go to home</Link>
      {/* добавляем / если абсолютно */}
      <Link to="about">About</Link>
      <Link to="contacts">Contacts</Link>
    </nav>
  );
};

export default Menu;

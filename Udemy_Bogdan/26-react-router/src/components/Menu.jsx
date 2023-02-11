import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      {/* / при абсолютной навигации */}
      <NavLink to=".">Go to home</NavLink>
      {/* добавляем / если абсолютно */}
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;

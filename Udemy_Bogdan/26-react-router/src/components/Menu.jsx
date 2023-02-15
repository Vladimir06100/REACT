import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      {/* / при абсолютной навигации */}
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        }
        // либо так
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="."
        end>
        Home
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
      {/* добавляем / если абсолютно */}
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
        About
      </NavLink>
      <NavLink
        to="contacts"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;

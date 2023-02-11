import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>About</h1>
      {/* вместо a href  */}
      <Link to="/">Go to home</Link>
      <br />
      <Link to="/contacts">Go to Contacts</Link>
    </>
  );
};

export default About;

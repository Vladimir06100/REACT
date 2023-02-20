import UserContext from '../context/UserContext';
import { useContext } from 'react';
function ChangeUser() {
  const { user, setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser(user === 'Bogdan' ? 'Alice' : 'Bogdan')}>
      Change User 777
    </button>
  );
}

export default ChangeUser;

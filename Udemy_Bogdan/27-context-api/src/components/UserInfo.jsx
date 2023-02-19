import UserContext from '../context/UserContext';
//import UserName from './UserName';
import { useContext } from 'react';

function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <h1>{user}</h1>
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}

export default UserInfo;

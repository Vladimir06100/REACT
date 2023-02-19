import UserContext from '../context/UserContext';

function UserInfo() {
  return (
    <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}

export default UserInfo;

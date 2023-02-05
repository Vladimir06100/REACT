import './Post.css';
function Post(props) {
  const { id, title, userId, body } = props;
  console.log(props);
  // return <h1>This is post</h1>;
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User : {userId}</h3>
    </div>
  );
}
export default Post;

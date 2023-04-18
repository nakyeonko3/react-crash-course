function Post(props) {
  return (
    <div className="post">
      <p>{props.name}</p>
      <p>{props.src}</p>
    </div>
  );
}

export default Post;

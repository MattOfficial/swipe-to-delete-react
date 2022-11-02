function Box(props) {
  return (
    <div style={props.style}>
      <h4>{props.item.title}</h4>
      <p>{props.item.body}</p>
      <p>{props.item.date}</p>
    </div>
  );
}

export default Box;

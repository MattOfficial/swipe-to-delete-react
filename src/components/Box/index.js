function Box(props) {
  return (
    <div
      style={{
        background: 'yellow',
        width: '100vw',
        height: '100px',
        justifyContent: 'center',
      }}
    >
      <h4>{props.item.title}</h4>
      <p>{props.item.body}</p>
      <p>{props.item.date}</p>
    </div>
  );
}

export default Box;

import "./Card.css";

function Card(props) {
  const allClases = "card " + props.className;
  return <div class={allClases}>{props.children}</div>;
}

export default Card;

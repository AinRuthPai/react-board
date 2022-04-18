import { Link } from "react-router-dom";

function Aside(props) {
  return (
    <aside>
      <ul>
        {props.data.map((array, i) => {
          return (
            <li>
              <Link to={`/web${i}`}>{props.data[i].title}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;

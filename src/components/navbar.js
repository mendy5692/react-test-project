import { items } from "../data/items";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-list">
      <ul className="navbar-item-list">
        {items.map((list_item) => (
          <Navitem item={list_item} />
        ))}
      </ul>
    </div>
  );
}

function Navitem({ item }) {
  return (
    <li>
      <a className="item" href={item.href}>
        {item.title}
      </a>
    </li>
  );
}

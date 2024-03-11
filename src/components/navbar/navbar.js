import { items } from "./data/items";
import "./navbar.css";
import { nanoid } from "nanoid";

export default function Navbar() {
  return (
    <div className="nav-list">
      <ul className="navbar-item-list">
        {items.map((list_item) => (
          <Navitem key={nanoid()} item={list_item} />
        ))}
      </ul>
    </div>
  );
}

function Navitem({ item }) {
  return (
    <li>
      <a
        className={`item ${
          window.location.pathname === item.href ? "current" : ""
        }`}
        href={item.href}
      >
        {item.title}
      </a>
    </li>
  );
}

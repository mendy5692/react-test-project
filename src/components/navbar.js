import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-list">
      <ul className="navbar-item-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Sales</a>
        </li>
        <li>
          <a href="/">Shopping</a>
        </li>
        <li>
          <a href="/">orders</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
      </ul>
    </div>
  );
}

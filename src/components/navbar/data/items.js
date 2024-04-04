import Contact from "../../../screens/contact";
import Home from "../../../screens/home";
import Decorations from "../../../screens/decorations";
import Art from "../../../screens/art";
import { GiCandleHolder } from "react-icons/gi";
import Judaica from "../../../screens/Judaica";
import { GrUserAdmin } from "react-icons/gr";
import Admin from "../../../screens/admin";
import "../navbar.css";
import { IoMdHome } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { MdMarkunread } from "react-icons/md";

export const items = [
  {
    title: (
      <div className="disply_nav_item">
        <p>Home</p>
        <p className="icon_inline">
          <IoMdHome />
        </p>
      </div>
    ),
    href: "/",
    element: <Home />,
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Art</p>
        <p className="icon_inline">
          <IoColorPaletteSharp />
        </p>
      </div>
    ),
    href: "/art",
    element: <Art />,
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Judaica</p>
        <p className="icon_inline">
          <GiCandleHolder />
        </p>
      </div>
    ),
    href: "/Judaica",
    element: <Judaica />,
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Decorations</p>
        <p className="icon_inline">
          <MdCategory />
        </p>
      </div>
    ),
    href: "/Decorations",
    element: <Decorations />,
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Contact</p>
        <p className="icon_inline">
          <MdMarkunread />
        </p>
      </div>
    ),
    href: "/contact",
    element: <Contact />,
  },
  {
    title: (
      <div className="disply_nav_item">
        <p>Admin</p>
        <p className="icon_inline">
          <GrUserAdmin />
        </p>
      </div>
    ),
    href: "/Admin",
    element: <Admin />,
  },
];

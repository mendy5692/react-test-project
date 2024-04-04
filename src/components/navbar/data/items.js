import Contact from "../../../screens/contact";
import Home from "../../../screens/home";
import Decorations from "../../../screens/decorations";
import Art from "../../../screens/art";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PaletteSharpIcon from "@mui/icons-material/PaletteSharp";
import { GiCandleHolder } from "react-icons/gi";
import CategoryIcon from "@mui/icons-material/Category";
import Judaica from "../../../screens/Judaica";
import { GrUserAdmin } from "react-icons/gr";
import Admin from "../../../screens/admin";
import "../navbar.css";

export const items = [
  {
    title: (
      <div className="disply_nav_item">
        <p>Home</p>
        <p className="icon_inline">
          <HomeSharpIcon style={{ fontSize: '2.5vw' }}/>
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
          <PaletteSharpIcon style={{ fontSize: '2.5vw' }}/>
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
          <CategoryIcon style={{ fontSize: '2.5vw' }}/>
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
          <MarkunreadIcon style={{ fontSize: '2.5vw' }}/>
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

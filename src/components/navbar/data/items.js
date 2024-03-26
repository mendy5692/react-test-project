import Contact from "../../../screens/contact";
import Home from "../../../screens/home";
import Decorations from "../../../screens/decorations/decorations";
import Art from "../../../screens/art/art";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PaletteSharpIcon from "@mui/icons-material/PaletteSharp";
import { GiCandleHolder } from "react-icons/gi";
import CategoryIcon from "@mui/icons-material/Category";
import Judaica from "../../../screens/judaica/Judaica";
import { GrUserAdmin } from "react-icons/gr";
import Admin from "../../../screens/admin/admin";

export const items = [
  {
    title: (
      <div className="row">
        <p>Home</p>
        <p className="icon_inline">
          <HomeSharpIcon />
        </p>
      </div>
    ),
    href: "/",
    element: <Home />,
  },
  {
    title: (
      <div className="row">
        <p>Art</p>
        <p className="icon_inline">
          <PaletteSharpIcon />
        </p>
      </div>
    ),
    href: "/art",
    element: <Art />,
  },
  {
    title: (
      <div className="row">
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
      <div className="row">
        <p>Decorations</p>
        <p className="icon_inline">
          <CategoryIcon />
        </p>
      </div>
    ),
    href: "/Decorations",
    element: <Decorations />,
  },
  {
    title: (
      <div className="row">
        <p>Contact</p>
        <p className="icon_inline">
          <MarkunreadIcon />
        </p>
      </div>
    ),
    href: "/contact",
    element: <Contact />,
  },
  {
    title: (
      <div className="row">
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

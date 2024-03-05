import Contact from "../screens/contact";
import Home from "../screens/home";
import Orders from "../screens/orders";
import Sales from "../screens/sales";
import Shopping from "../screens/shopping";

export const items = [
  {
    title: "Home",
    href: "/",
    element: <Home />,
  },
  {
    title: "Sales",
    href: "/sales",
    element: <Sales />,
  },
  {
    title: "Shopping",
    href: "/shopping",
    element: <Shopping />,
  },
  {
    title: "Orders",
    href: "/orders",
    element: <Orders />,
  },
  {
    title: "Contact",
    href: "/contact",
    element: <Contact />,
  },
];

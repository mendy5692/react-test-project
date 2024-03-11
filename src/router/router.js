import { BrowserRouter, Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid";
import { items } from "../components/navbar/data/items";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {items.map((list_item) => (
          <Route
            key={nanoid()}
            path={list_item.href}
            element={list_item.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

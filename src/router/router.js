import { BrowserRouter, Route, Routes } from "react-router-dom";
import { items } from "../data/items";

export default function MyRouter() {
    return (
        <BrowserRouter>
        <Routes>
          {items.map((list_item) => (
            <Route path={list_item.href} element={list_item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    )
}
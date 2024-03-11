import Grid from "../../components/grid/grid";
import Navbar from "../../components/navbar/navbar";
import { Art_grid_data_list } from "./art_grid_data/art_data";
import "./art.css";

export default function Art() {
  return (
    <div>
      <Navbar />
      <div className="grid_container">
        <div className="grid">
          <Grid grid_items_list={Art_grid_data_list} />
        </div>
      </div>
    </div>
  );
}

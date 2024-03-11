import Navbar from "../../components/navbar/navbar";
import Grid from "../../components/grid/grid";
import { Decorations_grid_data_list } from "./decorations_grid_data/decorations_data";


export default function Decorations() {
  return (
    <div>
      <Navbar />
      <div className="grid_container">
        <div className="grid">
          <Grid grid_items_list={Decorations_grid_data_list} />
        </div>
      </div>
    </div>
  );
}

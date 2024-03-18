import Grid from "../../components/grid/grid";
import Navbar from "../../components/navbar/navbar";
import { Art_grid_data_list } from "./art_data";

export default function Art() {
  return (
    <div>
      <Navbar />
      <div className="heroImg"></div>
      <Grid grid_items_list={Art_grid_data_list} />
    </div>
  );
}

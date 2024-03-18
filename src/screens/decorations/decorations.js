import Navbar from "../../components/navbar/navbar";
import Grid from "../../components/grid/grid";
import { Decorations_grid_data_list } from "./decorations_data";


export default function Decorations() {
  return (
    <div>
      <Navbar />
      <div className="heroImg"></div>
      <Grid grid_items_list={Decorations_grid_data_list} />
    </div>
  );
}

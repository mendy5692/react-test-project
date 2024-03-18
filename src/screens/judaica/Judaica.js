import Grid from "../../components/grid/grid";
import Navbar from "../../components/navbar/navbar";
import { judaica_grid_data_list } from "./judaica_data";

export default function Judaica() {
  return (
    <div>
      <Navbar />
      <div className="heroImg"></div>
      <Grid grid_items_list={judaica_grid_data_list} />
    </div>
  );
}

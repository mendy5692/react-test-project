import { useEffect, useState } from "react";
import Grid from "../components/grid/grid";
import Navbar from "../components/navbar/navbar";
import { useLoadingContext } from "../contexts/loadingContext";
import axios from "axios";

export default function Art() {
  const [products, setProducts] = useState([]);
  const { setLoading } = useLoadingContext();
  useEffect(() => {
    const getAllart = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/art`);
        setProducts(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllart();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="heroImg"></div>
      <Grid grid_items_list={products} />
    </div>
  );
}

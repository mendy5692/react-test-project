import { useEffect, useState } from "react";
import Grid from "../../components/grid/grid";
import Navbar from "../../components/navbar/navbar";
import { useLoadingContext } from "../../contexts/loadingContext";
import axios from "axios";

export default function Judaica() {
  const [products, setProducts] = useState([]);
  const { setLoading } = useLoadingContext();
  useEffect(() => {
    const getAllJudaica = async () => {
      try {
        setLoading(true);
        const result = await axios.get("http://localhost:3001/products");
        setProducts(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllJudaica();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="heroImg"></div>
      <Grid grid_items_list={products} />
    </div>
  );
}

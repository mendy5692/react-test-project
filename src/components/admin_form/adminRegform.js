import { Button, TextField } from "@mui/material";
import "./adminRegform.css";
import { createNewProduct } from "../utils/apiCalls";

function handleAdd(page_name, e) {
  try {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
    createNewProduct(page_name, [
      {
        title: data["title"],
        manufacturer: data["manufacturer"],
        desc: data["desc"],
        img_url: data["img_url"],
        price: data["price"],
      },
    ]);
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function ARF({ page_name }) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleAdd(page_name, e)}>
        <h2>add {page_name} product:</h2>

        <TextField name="title" type="text" label="title..." min={2} />
        <TextField
          name="manufacturer"
          type="text"
          label="manufacturer..."
          min={2}
        />
        <TextField name="desc" type="text" label="description..." min={2} />
        <TextField name="img_url" type="url" label="img url..." />
        <TextField name="price" type="number" label="price..." />

        <Button variant="outlined" type="submit">
          Add +
        </Button>
      </form>
    </div>
  );
}
export default function AdminRegForm() {
  return (
    <div>
      <ARF page_name={"Art"} />
      <ARF page_name={"Judaica"} />
      <ARF page_name={"Decorations"} />
    </div>
  );
}

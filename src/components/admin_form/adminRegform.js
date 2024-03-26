import { Button, TextField } from "@mui/material";
import "./adminRegform.css";

function handleAdd(e) {
  e.preventDefault();

  e.target.reset();
}

function ARF({page_name}) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleAdd}>
        <h2>add {page_name} product:</h2>

        <TextField required name="title" type="text" label="title..." min={2} />
        <TextField name="desc" type="text" label="description..." min={2} />
        <TextField required name="img_url" type="url" label="img url..."/>
        <TextField required name="price" type="number" label="price..."/>

        <Button variant="outlined" type="submit">
          Add +
        </Button>
      </form>
    </div>
  );
}
export default function AdminRegForm(){
  return <div>
  <ARF page_name={'Art'}/>
  <ARF page_name={'Judaica'}/>
  <ARF page_name={'Decorations'}/>
  </div>

}

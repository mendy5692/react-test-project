import { Button, TextField } from "@mui/material";
import "./regform.css";

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  e.target.reset();
}

export default function RegForm() {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register:</h2>
        <TextField required name="name" type="text" label="Name..." min={2} />
        <TextField
          required
          name="num"
          type="tel"
          label="Phone..,"
          min={9}
          max={20}
        />
        <TextField
          name="dob"
          type="text"
          label="date of birdt..,"
          min={9}
          max={20}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <TextField required name="email" type="email" label="Email..." />
        <TextField
          required
          name="pass"
          type="password"
          label="Pass..."
          min={3}
          max={20}
        />
        <Button variant="outlined" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
}

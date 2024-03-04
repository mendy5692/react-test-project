import { TextField } from "@mui/material";
import "./regform.css";

export default function RegForm() {
  return (
    <div className="form-container">
      <form className="form">
        <h3>Register:</h3>
        <TextField name="name" type="text" label="Name..." min={2} />
        <TextField name="num" type="tel" label="Phone..," min={9} max={20} />
        <TextField
          name="dob"
          type="text"
          label="date of birdt..,"
          min={9}
          max={20}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <TextField name="email" type="email" label="Email..." />
        <TextField
          name="pass"
          type="password"
          label="Pass..."
          min={3}
          max={20}
        />
      </form>
    </div>
  );
}

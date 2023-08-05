import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";


export default function Form() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    course: "",
    gender: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  let FormSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (

    <div style={{ marginTop: "20px", paddingLeft: "700px" }}>
      <Typography variant="h4" color={"red"}>
        Login From
      </Typography>

      <form onSubmit={FormSubmit}>
        <TextField
          name="name"
          type="text"
          variant="outlined"
          label="Enter Name"
          id="outlined-basic"
          sx={{ margin: "20px" }}
          value={input.name}
          size="small"
          onChange={handleChange}
        />
        <br />

        <TextField
          name="email"
          type="email"
          variant="outlined"
          id="outlined-basic"
          size="small"
          sx={{ margin: "20px" }}
          label="Enter Email"
          value={input.email}
          onChange={handleChange}
        />

        <br />
        <TextField
          name="password"
          type="password"
          variant="outlined"
          id="outlined-basic"
          size="small"
          label="Enter Password"
          sx={{ margin: "20px" }}
          value={input.password}
          onChange={handleChange}
        />

        <br />
        <br />
        <FormGroup>
          <FormControlLabel
            label="I Agree Terms And Conditions"
            control={
              <Checkbox
                onChange={() =>
                  setInput((preState) => ({
                    ...preState,
                    terms: !input.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <br />

        <FormControl sx={{ width: "250px" }}>
          <InputLabel id="menu">Course</InputLabel>
          <Select
            labelId="menu"
            id="menu-list"
            value={input.course}
            onChange={handleChange}
            name="course"
            label="course"
          >
            <MenuItem value={"Mongodb"}>MongoDb</MenuItem>
            <MenuItem value={"Express"}>Express</MenuItem>
            <MenuItem value={"Nodejs"}>NodeJs</MenuItem>
            <MenuItem value={"React"}>React-next</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            defaultValue={"male"}
            onChange={handleChange}
          >
            <FormControlLabel value={"male"} label="Male" control={<Radio />} />
            <FormControlLabel
              value={"Female"}
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel
              value={"other"}
              label="Other"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type="submit" variant="contained" sx={{ margin: "40px" }}>
          Login
        </Button>
      </form>
    </div>
  );
}

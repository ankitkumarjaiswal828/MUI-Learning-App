import React from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";


export default function TextFiels() {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px" }}>
      <TextField
        variant="outlined"
        type="text"
        id="outlined-basic"
        label="Enter Name"
      />
      <br />
      <br />

      <TextField
        variant="filled"
        type="password"
        id="filled-basic"
        label="Enter password"
        autoComplete="current-password"
      />
      <br />
      <br />

      <TextField
        variant="standard"
        type="email"
        id="standard-basic"
        label="Enter Email"
      />
      <br />
      <br />

      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />

      <br />
      <br />
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        error
        id="filled-error"
        label="Error"
        defaultValue="Hello World"
        variant="filled"
      />
      <TextField
        error
        id="filled-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="filled"
      />
      <br />
      <br />

      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
      />

      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="standard"
      />

      <br />
      <br />

      <TextField
        id="outlined-select-currency-native"
        select
        label="Native select"
        defaultValue="EUR"
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <br />
      <br />

      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <br />

      <TextField id="input-with-sx" label="With sx" variant="standard" />
      <br />
      <br />

      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      />

      <br />
      <br />
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />

      <br />
      <br />
      <TextField fullWidth label="fullWidth" id="fullWidth" />

     
    </div>
  );
}

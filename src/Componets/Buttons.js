import React from 'react'
import { Button } from '@mui/material';
import { Send,Delete } from '@mui/icons-material';
export default function Buttons() {
  return (
    <div>
     <br />
      <Button variant="contained">Click me conatined</Button>
      <br /> <br />
      <Button variant="text">cliked me text</Button>
      <br />
      <br />
      <Button variant="outlined" color="success">
        cliked me outline
      </Button>
      <br />
      <br />
      <Button variant="contained" size="large ">
        Click size
      </Button>
      <br />
      <br />
      <Button variant="text" size="medium">
        cliked me text
      </Button>
      <br />
      <br />
      <Button variant="outlined" color="error">
        error
      </Button>
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<Send />}>
        Send
      </Button>
    </div>
  );
}

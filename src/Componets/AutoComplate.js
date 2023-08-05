import React from 'react'
import { Autocomplete, TextField ,B} from '@mui/material'

export default function AutoComplate() {
    const arr = ["MongoDb","Expressjs", "ReactJs","Nodejs","nextjs","PHP","Python","Java"]

  return (
    <div>
      <Autocomplete
        sx={{ width: 200 }}
        options={arr}
        renderInput={(arr) => <TextField {...arr} label="Select course" />}
      />

      <br />
      <br />

     
    </div>
  );
}


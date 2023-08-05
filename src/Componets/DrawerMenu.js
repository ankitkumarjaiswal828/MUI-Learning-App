import {MoveToInbox,Mail } from '@mui/icons-material'
import { Button, ListItemText ,ListItemButton,List, Drawer,ListItemIcon, Snackbar,
    Box, Alert, CircularProgress, LinearProgress, Typography, Rating,Stack} from '@mui/material'
import React, { useState } from 'react'

export default function DrawerMenu() {
    const [open,setOpen] = useState(false)
    const menu   = ['Index','Starred','Send Mail','Drafts','All Mail','Trash','Spam']
    const [rating,setRating] = useState()
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };


    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          open
        </Button>

        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            {menu.map((menu, index) => (
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={menu} />

                <ListItemIcon style={{ alignItems: "start" }}>
                  {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <br />
        <br />
        <Snackbar open={true} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is Alert in SnackBar
          </Alert>
        </Snackbar>
        <br />
        <br />

        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          This is progress bar
        </Typography>
        <br />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
          <br />
          <CircularProgress color="success" />
          <CircularProgress color="secondary" />
          <CircularProgress color="inherit" />
          <CircularProgress variant="determinate" value={25} />
          <CircularProgress variant="determinate" value={50} />
          <CircularProgress variant="determinate" value={75} />
          <CircularProgress variant="determinate" value={100} />
        </Box>

        <br />
        <br />
        <LinearProgress />
        <br />
        <LinearProgress color="success" />
        <br />
        <LinearProgress color="secondary" />
        <br />
        <LinearProgress color="inherit" />
        <br />
        <br />

        <div sx={{ display: "flex", justifyContent: "center" }}>
          <br />
          <Typography variant="h6">Rating bar</Typography>
          <br />
          <Rating value={rating} onChange={(e, val) => setRating(val)} precision={0.5}/>
          <br />
          <Typography>Rating of {rating !== undefined ? rating : 0}</Typography>
        </div>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rating name="size-small" defaultValue={2} size="small" />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rating name="size-medium" defaultValue={2} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rating name="size-large" defaultValue={2} size="large" />
        </Box>

        <br /><br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={1}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" max={10} />
          </Stack>
        </Box>

      </div>
    );
}

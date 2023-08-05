import React, { useState } from 'react'
import { Modal,Button, Box ,Typography, Link} from '@mui/material'

export default function Model() {
    const [open,setOpen] = useState(false)

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position={"absolute"} top="50%" left="50%" sx={style}>
          <Typography style={{ textAlign: "justify" }}>
            A modal (also called a modal window or lightbox) is a web page
            element that displays in front of and deactivates all other page
            content. To return to the main content, the user must engage with
            the modal by completing an action or by closing it. Modals are often
            used to direct users’ attention to an important action or piece of
            information on a website or application. The purpose of modals can
            be summed up in one word: focus. If you need visitors to focus on
            something simple, a modal window is one of the most effective means
            to do so. Users must either close the modal, or complete a specific
            action within it (e.g., reading a message and clicking “OK”, filling
            out a form, etc.).
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            style={{ marginTop: "15px" }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      
      <br />
      <br />
      <Link
        variant="h6"
        color="primary"
        underline="hover"
        href="https://mui.com/material-ui/react-link/#basic-links"
      >
        Go To MUI
      </Link>

      <br />
      <Link
        variant="h6"
        color="primary"
        underline="none"
        href="https://mui.com/material-ui/react-link/#basic-links"
      >
        Go To MUI
      </Link>
      <br />
      <Link
        variant="h6"
        color="primary"
        underline="always"
        href="https://mui.com/material-ui/react-link/#basic-links"
      >
        Go To MUI
      </Link>   
    </div>
  );
}

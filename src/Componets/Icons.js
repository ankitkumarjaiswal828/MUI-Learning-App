import React from 'react'
import {Delete, Home,FingerprintOutlined,
    MailOutlineOutlined,LanguageRounded ,LibraryAddCheck ,LocalPhoneTwoTone ,ProductionQuantityLimitsTwoTone,
     BookmarkSharp,DarkModeSharp} from "@mui/icons-material";
import { IconButton, Typography } from '@mui/material';
export default function Icons() {
  return (
    <div style={{margin:'20px'}}>
      MUI ICONS
      <br />
      <br />
      <Typography>Filled icons</Typography>
      <IconButton onClick={()=>alert("Are You Sure Delete")}>
        <Delete color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <IconButton>
        <Home color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <br />
      <br />
      <Typography>Outlined icons</Typography>
      <IconButton>
        <FingerprintOutlined color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <IconButton>
        <MailOutlineOutlined color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <br />
      <br />
      <Typography>Rounded icons</Typography>
      <IconButton>
        <LanguageRounded color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <IconButton>
        <LibraryAddCheck color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <br />
      <br />
      <Typography>Two Tone icons</Typography>
      <IconButton>
        <LocalPhoneTwoTone color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <br />
      <br />
      <Typography>Sharp icons</Typography>
      <IconButton>
        <BookmarkSharp color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
      <IconButton>
        <DarkModeSharp color="secondary" sx={{ fontSize: 50 }} />
      </IconButton>
    </div>
  );
}

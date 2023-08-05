import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button ,Tabs,Tab} from "@mui/material";
import { Phone, Favorite ,PersonPin,PhoneMissed } from "@mui/icons-material";
import Cards from "./Cards";

export default function Appbaar() {

     const [value, setValue] = useState()
  return (
    <div>
      <div style={{ marginTop: "120px", marginBottom: "-15px" }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h4">LOGO</Typography>

            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => {
                setValue(val);
              }}
              aria-label="secondary tabs example"
            >
              <Tab label="Home" />
              <Tab label="About" />
              <Tab label="Contact" />
              <Tab icon={<Phone />} iconPosition="start" label="phone call" />
              <Tab icon={<Favorite />} iconPosition="start" label="favorite" />
              <Tab icon={<PersonPin />} iconPosition="start" label="profile" />
              <Tab
                icon={<PhoneMissed />}
                iconPosition="start"
                label="MissedCall"
              />
            </Tabs>

            <Button
              variant="contained"
              color="secondary"
              sx={{ marginLeft: "auto" }}
            >
              SignIn
            </Button>
          </Toolbar>
        </AppBar>

        <div style={{ marginTop: "-120px" }}>
          <Cards />
        </div>
      </div>
    </div>
  );
}

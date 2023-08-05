import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Links from "./Links";
import Buttons from "./Componets/Buttons";
import Typograpy from "./Componets/Typograpy";
import TextFiels from "./Componets/TextFiels";
import Form from "./Componets/Form";
import Navbar from "./Componets/Appbaar";
import List from "./Componets/LIstcom"
import Cards from "./Componets/Cards";
import Model from "./Componets/Model";
import Containerss from "./Componets/Containerss";
import Accordiannn from "./Componets/Accordiannn";
import AutoComplate from "./Componets/AutoComplate";
import { Typography } from "@mui/material";
import DrawerMenu from "./Componets/DrawerMenu";
import Icons from "./Componets/Icons";
import Theme from "./Componets/Theme";
import DataGrid from "./Componets/DataGrid";
import ResponsiveGrid from "./Componets/ResponsiveGrid";

function App() {
  return (
    <div>
      <Typography variant="h2" textAlign={"center"} fontFamily={"sans-serif"}>
        Material UI
      </Typography>
      <BrowserRouter>
        <Links />
        <Routes>

          <Route path="/buttons" element={<Buttons />} />
          <Route path="/typo" element={<Typograpy />} />
          <Route path="/textfield" element={<TextFiels />} />
          <Route path="/form" element={<Form />} />
          <Route path="/app" element={<Navbar/>} />
          <Route path="/list" element={<List/>}/>
          <Route path="cards" element={<Cards/>}/>
          <Route path="/model" element={<Model/>}/>
          <Route path="/con" element={<Containerss/>}/>
          <Route path="/accord" element={<Accordiannn/>}/>
          <Route path="/auto"  element={<AutoComplate/>}/>
          <Route path='/draw' element={<DrawerMenu/>}/>
          <Route path="/icons" element={<Icons/>}/>
          {/* <Route path="/theme" element={<Theme/>}/> */}
          <Route path="/dgd" element={<DataGrid/>}/>
          <Route path="/responsivegrid" element={<ResponsiveGrid/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

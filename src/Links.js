import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <Link to="/buttons">
            <h2>Button Of MUI</h2>
          </Link>
        </div>
        <div>
          <Link to="/typo">
            <h2>TypoGraphy of MUI</h2>
          </Link>
        </div>
        <div>
          <Link to="/textfield">
            <h2>TextField of MUI</h2>
          </Link>
        </div>
        <div>
          <Link to="/form">
            <h2>Form of MUI</h2>
          </Link>
        </div>
        <div>
          <Link to="/app">
            <h2>AppBar-Tabs of MUI</h2>
          </Link>
        </div>
        <div>
          <Link to="/list">
            <h2>List of MUI</h2>
          </Link>
        </div>
        <div>
          <Link to="/cards">
            <h2>cards of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/model">
            <h2>Model of MUI</h2>
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <div>
          <Link to="/con">
            <h2>Container of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/accord">
            <h2>Accordian of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/auto">
            <h2>AutoComplete of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/draw">
            <h2>Drawer of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/icons">
            <h2>ICONS of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/theme">
            <h2>Themeing of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/dgd">
            <h2>DataGrid of MUI</h2>
          </Link>
        </div>

        <div>
          <Link to="/responsivegrid">
            <h2>DataGrid of MUI</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

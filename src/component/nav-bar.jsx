import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Badge from "@mui/material/Badge";
import * as Micon from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="nav-bar-lan">
      <div className="menu-toggle-lan col-5">
        <Icon.List></Icon.List>
      </div>
      <div className="col-3">
        <form className="search-box">
          <input type="search" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="notif-lan col-1">
        <Badge badgeContent={4} color="error">
          <Micon.Notifications color="action" />
        </Badge>
      </div>
      <div className="profile-lan col-1">
        <div className="profile-circle">
          <Icon.PersonCircle></Icon.PersonCircle>
        </div>
      </div>
      <div className="col-2">
        Mehrnoush Rayejian
        <Icon.ChevronDown className="chevron-icon"></Icon.ChevronDown>
      </div>
    </div>
  );
};

export default Navbar;

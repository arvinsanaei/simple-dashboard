import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Agreements from "./../pages/agreements";
import Profile from "./../pages/profile";
const Sidebar = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav
          className="col-md-2 d-none d-md-block  sidebar"
          activeKey="/agreements"
        >
          <div className="sidebar-sticky"></div>
          <div className="tr-glass">T&R GLASS</div>
          <Nav.Item>
            <Nav.Link>
              <div className="icon-dash">
                <Icon.Arrow90degUp></Icon.Arrow90degUp>
              </div>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <div className="icon-dash">
                <Icon.Person></Icon.Person>
              </div>
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/agreements" eventKey="link-2">
              <div className="icon-dash">
                <Icon.ShopWindow></Icon.ShopWindow>
              </div>
              Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/agreements" eventKey="disabled">
              <div className="icon-dash">
                <Icon.JournalCheck></Icon.JournalCheck>
              </div>
              Agreements
            </Nav.Link>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <div className="icon-dash">
                  <Icon.FileEarmarkRichtext></Icon.FileEarmarkRichtext>
                </div>
                Invoices
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <div className="icon-dash">
                  <Icon.CurrencyDollar></Icon.CurrencyDollar>
                </div>
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <div className="icon-dash">
                  <Icon.ArrowLeftSquare></Icon.ArrowLeftSquare>
                </div>
                Log out
              </Nav.Link>
            </Nav.Item>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route exact path="/" element={<Agreements />} />
          <Route exact path="/agreements" element={<Agreements />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Sidebar;

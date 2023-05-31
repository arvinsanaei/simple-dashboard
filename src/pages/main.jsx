import logo from "./../logo.svg";
import "./../App.css";
import Sidebar from "./../component/side-bar";
import Navbar from "./../component/nav-bar";
import { useState } from "react";
import Agreements from "./../pages/agreements";
import "./../style/dashboard.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  NavLink,
  useLocation,
  useNavigate,
  useMatch,
} from "react-router-dom";
import Profile from "./../pages/profile";
const Main = (props) => {
  //const [active, setActive] = useState("profile");
  //   onSelect={(selectedKey) => setActive(selectedKey)}
  const Location = useLocation();
  const navigate = useNavigate();
  const match = useMatch("write-the-url-you-want-to-match-here");
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Nav
              className="col-md-2 d-none d-md-block  sidebar"
              activeKey={Location.pathname}
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
                <Nav.Link href="/profile">
                  <div className="icon-dash">
                    <Icon.Person></Icon.Person>
                  </div>
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/agreements" eventKey="link-2">
                  <div className="icon-dash">
                    <Icon.ShopWindow></Icon.ShopWindow>
                  </div>
                  Orders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/agreements">
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
          </Col>

          <Col xs={10} id="page-content-wrapper">
            <Navbar></Navbar>

            <Routes>
              <Route exact path="/" element={<Agreements />} />
              <Route exact path="/agreements" element={<Agreements />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>

            {/* <Agreements></Agreements> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

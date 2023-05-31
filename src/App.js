import logo from './logo.svg';
import './App.css';
import Sidebar from './component/side-bar';
import Navbar from './component/nav-bar';
import {useState} from 'react';
import Agreements from './pages/agreements';
import './style/dashboard.css';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link, Routes,NavLink,Router } from "react-router-dom"; 
import Profile from "./pages/profile";
import Main from "./pages/main";
function App() {  
  return (
    <BrowserRouter >
    <Main></Main>
     </BrowserRouter >
  );
}
export default App;

import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

import '../style/navbar.scss';



export const NavigationBar = () => (

    <Navbar expand="lg">
      <Navbar.Brand  href="/">My Dragon Pal <i className="fas fa-dragon"></i> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="right-links">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/Order">Order</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
)
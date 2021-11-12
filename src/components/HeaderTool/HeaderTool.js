import React from 'react';
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';


import classes from './HeaderTool.module.css';
import { useSelector } from 'react-redux';


const HeaderTool = () => {
  const cartQuantity = useSelector(state => state.cartObject.totalQuantity);
  return (
    <Navbar className={classes.navbar} >
      <Container className={classes.container}>
        <Navbar.Brand className={classes.brand}><Link className={classes.link} to="/">Shopping App </Link></Navbar.Brand>
        <Nav className={classes.nav}>
          <NavItem className={classes.navitem}>
            <Link className={classes.link} to="/">
              <i className="fa fa-home"></i>
            </Link>
          </NavItem>
          <NavItem className={classes.navitem} >
            <Link className={classes.link} to="/whilst">
              <i className="fa fa-heart"></i>
            </Link>
          </NavItem>
          <NavItem className={classes.navitem}>
            <Link className={classes.link} to="/cart">
              <i className="fa fa-shopping-cart"><Badge className={classes.badge}>{cartQuantity}</Badge></i>
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default HeaderTool;
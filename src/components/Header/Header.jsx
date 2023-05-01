import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="logo">
                        <img src="../../images/logo.png" alt="" />
                    </NavLink>
                    <Nav className="m-0 justify-content-end align-items-center" >
                        <NavLink to="/" className="text-decoration-none me-3">Home</NavLink>
                        <NavLink to="/Products" className="text-decoration-none me-3">Products</NavLink>
                        <NavLink to="/AddToCart" className="text-decoration-none me-3">Add To Cart +</NavLink>
                        <Button> Add To Cart</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import './Products.css'
import { useNavigate } from "react-router-dom";
function Products() {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();


    // const handleClick =() =>{
    //     navigate("/")
    // }

    useEffect(() => {
        axios.get("http://localhost:2900/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <Row>
            {products.map((product) => (
                <Col key={product.id} xxl={4} xl={4} lg={3} md={6} xs={12}>
                    <Card>
                        <Card.Img variant="top" src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.date}</Card.Text>
                            <Button> Add To Cart</Button>
                            <Button className="mx-3 bg-danger">View Product Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Products;

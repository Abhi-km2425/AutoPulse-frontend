// src/Login.jsx
import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
<>
        <div className="d-flex align-items-center justify-content-center vh-100 bg-black">
          <Container style={{ maxWidth: "400px" }}>
            <Card
              className="p-4 shadow"
              style={{
                backgroundColor: "#121212",
                border: "1px solid #1f1f1f",
                color: "#fff",
              }}
            >
              <h2 className="text-center mb-4" style={{ color: "#00d084" }}>
                AutoPulse Login
              </h2>
              <Form>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="bg-dark text-light border-0"
                  />
                </Form.Group>
    
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="bg-dark text-light border-0"
                  />
                </Form.Group>
    
             <Link to="/">
                    <Button
                      variant="success"
                      type="submit"
                      className="w-100"
                      style={{
                        backgroundColor: "#00d084",
                        border: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </Button>
             </Link>
              </Form>
            </Card>
          </Container>
         
        </div>
     <Footer/>
</>    
  );
}

export default Login;

import React, { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';


function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                Log In
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='bottom' style={{ height: '60vh' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title align='center'>
                        <h2>
                            Log in!
                        </h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enter
                        </Button>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Login;


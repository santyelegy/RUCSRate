import React, { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';


function Signup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                Sign Up
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='bottom' style={{ height: '40vh' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title align='center'>
                        <h2>
                            We don't need everyone to sign up for RUCS right now.
                        </h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>
                        Considering that registering an account will make the process of commenting more troublesome, anonymization can also ensure that comments are more objective.
                        <br></br>
                        We are prohibiting IP addresses from repeatedly commenting on courses to prevent malicious comments and ensure the validity of comments.
                    </p>
                    <Form>
                        <fieldset disabled>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            {/*<Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>*/}
                        </fieldset>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Signup;

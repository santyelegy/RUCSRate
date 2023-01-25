import React, { useState } from 'react';
import { Button, Offcanvas, Form } from 'react-bootstrap';


function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                Help and Policy
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='bottom' style={{ height: '40vh' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title align='center'>
                        <h2>
                            Help and Policy
                        </h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h4>
                        Wanna add your department? Wanna correct information in this site?
                    </h4>
                    <p>
                        Feel free to send your feedback and request! <a href="mailto:@gamail.com">Send Email</a>
                    </p>

                    <h4>
                        Please respect RU community values in your comments.
                    </h4>
                    <p>
                        Any insults and personal attacks to RU Ratings faculty and Scarlet Knights are not acceptable.
                        RU Ratings may block the toxic review and IP of particular users.
                        <br></br>
                        If you have problem about the content of your review, feel free to contact us <a href="mailto:@gamail.com">Send Email</a>
                    </p>

                    <Form>
                        {/*<Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enter
                        </Button>*/}
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Login;


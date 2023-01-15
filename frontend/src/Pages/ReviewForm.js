import courselist from '../sample_data/CourseList.json'
import proflist from '../sample_data/ProfessorList.json'
import { useEffect, useState } from 'react';

import { Typeahead } from 'react-bootstrap-typeahead';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReviewForm() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [content, setContent] = useState("");
    const [score0, setScore0] = useState('');
    const [score1, setScore1] = useState('');
    const [score2, setScore2] = useState('');
    const [score3, setScore3] = useState('');
    const [course, setCourse] = useState([]);
    const [professor, setProfessor] = useState("");

    const [allcourses, setAllCourses] = useState([]);
    useEffect(() => {
        if (allcourses.length === 0) {
            let subarray = []
            for (let i = 0; i < courselist.length; i++) {
                subarray.push(...courselist[i]["cources"]);
            }
            setAllCourses(subarray);
        }
    }, [allcourses])

    const scorelist0 = ["", "5 (Strongly Recommended)", "4 (Recommended)", "3 (Good)", "2 (Below Average)", "1 (Awful Feeling)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })
    const scorelist1 = ["", "5 (Very Easy)", "4 (Easy)", "3 (Acceptable)", "2 (Hard)", "1 (Extremely Hard)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })
    const scorelist2 = ["", "5 (Very Helpful)", "4 (Helpful)", "3 (Good)", "2 (Limited)", "1 (Useless)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })

    let callapi = async () => {

        let realscore0 = parseInt(score0.substring(0, 1));
        let realscore1 = parseInt(score1.substring(0, 1));
        let realscore2 = parseInt(score2.substring(0, 1));
        let realscore3 = parseInt(score3.substring(0, 1));

        const returnObject = { 'content': content, 'score0': realscore0, 'score1': realscore1, 'score2': realscore2, 'score3': realscore3 }
        fetch(`http://127.0.0.1:8000/api/createReview/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(returnObject)
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
        }).catch(error => {
            console.log(error)
        })
    }

    const prof = proflist.map((val, index) => {
        let find = false;
        for (const c of val.course) {
            if (course.length > 0 && c === course[0]["code"]) {
                find = true;
            }
        }
        return find ? (<option value={val.name} key={index}>{val.name}</option>) : <></>
    })

    function handleSubmit(event) {
        event.preventDefault();

        if (score0.length < 1 || score1.length < 1 || score2.length < 1 || score3.length < 1) {
            handleShow();
        } else {
            callapi();
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Label><h5>Course</h5></Form.Label>
                <Typeahead
                    id='course'
                    labelKey="code"
                    onChange={setCourse}
                    selected={course}
                    options={allcourses}
                    placeholder="Choose a course..."
                />
                <Form.Label><h5>Professor</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setProfessor(e.target.value)}>
                    {prof}
                </Form.Control>

                <Row>
                    <Col>
                        <Form.Group controlId="score0">
                            <Form.Label><h5>Overall Quality</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setScore0(e.target.value)}>
                                {scorelist0}
                            </Form.Control>
                            <Form.Text>
                                Overall recommendation for this course.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="score1">
                            <Form.Label><h5>Professor</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setScore1(e.target.value)}>
                                {scorelist0}
                            </Form.Control>
                            <Form.Text>
                                Overall recommendation for this professor.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="score2">
                            <Form.Label><h5>Course Difficulty</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setScore2(e.target.value)}>
                                {scorelist1}
                            </Form.Control>
                            <Form.Text>
                                Difficulty ratings for classes, assignments and exams.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="score3">
                            <Form.Label><h5>Future Help</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setScore3(e.target.value)}>
                                {scorelist2}
                            </Form.Control>
                            <Form.Text>
                                How much it will help you in your future academic study and career.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <br></br>

                <Form.Group controlId="content">
                    <Form.Label><h5>Review content</h5></Form.Label>
                    <Form.Control type="text" placeholder="Enter content"
                        onChange={(e) => setContent(e.target.value)}
                        as="textarea"
                        style={{ height: '100px' }} />
                    <Form.Text>
                        Please respect RU community values in your comments.<br />
                        Insults and personal attacks are not acceptable.
                    </Form.Text>
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Wrong input!</Modal.Title>
                </Modal.Header>
                <Modal.Body>No empty input admitted.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default ReviewForm;
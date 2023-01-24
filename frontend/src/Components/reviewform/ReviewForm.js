import { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function ReviewForm(props) {
    //fetch data
    const [courseList, setCourseList] = useState([]);
    const [professorList, setProfessorList] = useState([]);
    //form data
    const [content, setContent] = useState("");
    //four scores
    const [preference, setPreference] = useState('');
    const [difficulty, setDifficulty] = useState('');
    //this is the professor score, not professor
    const [prof, setProf] = useState('');
    const [helpfulness, setHelpfulness] = useState('');
    //course and professor
    const [course, setCourse] = useState([]);
    const [professor, setProfessor] = useState("");
    //popout modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //same IP modal
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);

    //do not allow course and professor select when enter from course page
    //fetch data if no course and professor selected
    const fixedCourse = ("course" in props);
    useEffect(() => {
        if (fixedCourse) {
            //set Course and Professor
            setProfessor(props.course.prof);
            setCourse([{ "_id": props.courseId, "code": props.course.code }]);
        } else {
            //fetch data 
            let getCourseList = async () => {
                let response = await fetch('http://127.0.0.1:8080/course/all');
                let data = await response.json();
                setCourseList(data);
            }
            let getProfessorList = async () => {
                const response = await fetch("http://127.0.0.1:8080/professor/all");
                const data = await response.json();
                setProfessorList(data);
            }
            getCourseList();
            getProfessorList();
        }
    }, [fixedCourse, props])

    //filter professor by course
    const professorFiltered = professorList.length === 0 ? <></> : professorList.map((subprofessor, index) => {
        let find = false;
        for (const professorCourse of subprofessor.course) {
            if (course.length > 0 && professorCourse["course_code"] === course[0]["code"]) {
                find = true;
            }
        }
        return find ? (<option value={subprofessor} key={index}>{subprofessor.name}</option>) : <></>
    })

    const preferencelist = ["", "5 (Strongly Recommended)", "4 (Recommended)", "3 (Good)", "2 (Below Average)", "1 (Awful Feeling)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })
    const difficultylist = ["", "5 (Very Easy)", "4 (Easy)", "3 (Acceptable)", "2 (Hard)", "1 (Extremely Hard)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })
    const helpfulnesslist = ["", "5 (Very Helpful)", "4 (Helpful)", "3 (Good)", "2 (Limited)", "1 (Useless)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })

    //post form data to backend
    let postData = async () => {

        let preferenceScore = parseInt(preference.substring(0, 1));
        let difficultyScore = parseInt(difficulty.substring(0, 1));
        let profScore = parseInt(prof.substring(0, 1));
        let helpfulnessScore = parseInt(helpfulness.substring(0, 1));
        const returnObject = { 'content': content, 'courseId': course[0]._id, 'preference': preferenceScore, 'difficulty': difficultyScore, 'prof': profScore, 'helpfulness': helpfulnessScore }
        fetch(`http://127.0.0.1:8080/review/save`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(returnObject)
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if (jsonResponse === false) {
                setShow1(true)
            }
        }).catch(error => {
            console.log(error);
        })
    }
    function handleSubmit(event) {
        event.preventDefault();

        if (course.length < 1 || preference.length < 1 || difficulty.length < 1 || prof.length < 1 || helpfulness.length < 1) {
            handleShow();
        } else {
            postData();
        }
    }
    // show / not show data base on entry point
    const professorAndCourseForm = fixedCourse ? <></> : (
        <Form.Group controlId='course&prof'>
            <Form.Label><h5>Course</h5></Form.Label>
            <Typeahead
                id='course'
                labelKey="code"
                onChange={setCourse}
                selected={course}
                options={courseList}
                placeholder="Choose a course..."
            />
            <Form.Label><h5>Professor</h5></Form.Label>
            <Form.Control as="select" onChange={(e) => setProfessor(e.target.value)}>
                {professorFiltered}
            </Form.Control>
        </Form.Group>
    );

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {professorAndCourseForm}
                <Row>
                    <Col>
                        <Form.Group controlId="score0">
                            <Form.Label><h5>Overall Quality</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setPreference(e.target.value)}>
                                {preferencelist}
                            </Form.Control>
                            <Form.Text>
                                Overall recommendation for this course.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="score1">
                            <Form.Label><h5>Professor</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setProf(e.target.value)}>
                                {preferencelist}
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
                            <Form.Control as="select" onChange={(e) => setDifficulty(e.target.value)}>
                                {difficultylist}
                            </Form.Control>
                            <Form.Text>
                                Difficulty ratings for classes, assignments and exams.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="score3">
                            <Form.Label><h5>Future Help</h5></Form.Label>
                            <Form.Control as="select" onChange={(e) => setHelpfulness(e.target.value)}>
                                {helpfulnesslist}
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

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Too frequently!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please don't submit the review too frequently.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default ReviewForm;
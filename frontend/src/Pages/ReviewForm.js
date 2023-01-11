import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Course from '../sample_data/Course.json'
import Prof from '../sample_data/Professor.json'
import { useState } from 'react';

function ReviewForm() {

    const [content, setContent] = useState("");
    const [score, setScore] = useState(0);
    let callapi = async () => {
        const returnObject = { 'content': content, 'score': score }
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
    function handleSubmit(event) {
        event.preventDefault();
        callapi();
    }

    /*const code = Course.code.map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })*/

    const code = ["", "16:198:512", "16:198:513", "16:198:514"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })

    const prof = ["", "A", "B", "C"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })

    const scorelist = ["", "5 (Strongly Recommended)", "4 (Recommended)", "3 (Good)", "2 (Below Average)", "1 (Awful Feeling)"].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="course">
                <Form.Label><h5>Course Code</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {code}
                </Form.Control>
                <Form.Label><h5>Professor</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {prof}
                </Form.Control>
                <br></br>
                <br></br>
            </Form.Group>

            <Form.Group controlId="score1">
                <Form.Label><h5>Overall Quality</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {scorelist}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="score2">
                <Form.Label><h5>Course Difficulty</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {scorelist}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="score3">
                <Form.Label><h5>Professor</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {scorelist}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="score4">
                <Form.Label><h5>Future Help</h5></Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {scorelist}
                </Form.Control>
                <br></br>
            </Form.Group>

            <Form.Group controlId="content">
                <Form.Label><h5>Review content</h5></Form.Label>
                <Form.Control type="text" placeholder="Enter content" onChange={(e) => setContent(e.target.value)} />
                <br></br>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default ReviewForm;
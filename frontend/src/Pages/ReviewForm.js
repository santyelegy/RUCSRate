import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function ReviewForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [score, setScore] = useState(0);
    function handleSubmit(event) {
        event.preventDefault();
        console.log(title);
        console.log(content);
        console.log(score);
    }
    const scorelist = [0, 1, 2, 3, 4, 5].map((val, index) => {
        return (<option value={val} key={index}>{val}</option>);
    })
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Review title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="score">
                <Form.Label>Review score</Form.Label>
                <Form.Control as="select" onChange={(e) => setScore(e.target.value)}>
                    {scorelist}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Review content</Form.Label>
                <Form.Control type="text" placeholder="Enter content" onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default ReviewForm;
import { stripBasename } from '@remix-run/router';
import { useState, useEffect, React } from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

function SingleReview(props) {

    const [review, setReview] = useState([])
    const web = " http:/localhost:8080/review/getByCourse/" + props.cid
    const fetchData = async () => {
        const response = await fetch(web)
        const data = await response.json()
        setReview(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (review.length > 0) {
        return (
            <>
                <Card style={{ width: '48rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>{review.course}</Card.Title>
                            </Col>
                            <Col>
                                <Card.Title>{review.professor}</Card.Title>
                            </Col>
                        </Row>

                        <Card.Subtitle className="mb-2 text-muted">Code</Card.Subtitle>

                        <ListGroup horizontal className='Listgroup'>
                            <ListGroup.Item className='Listitem'>
                                Overall Quality: <b>{review.score0}</b>
                            </ListGroup.Item>
                            <ListGroup.Item className='Listitem'>
                                Professor: <b>{review.score1}</b>
                            </ListGroup.Item>
                            <ListGroup.Item className='Listitem'>
                                Course Difficulty: <b>{review.score2}</b>
                            </ListGroup.Item>
                            <ListGroup.Item className='Listitem'>
                                Future Help: <b>{review.score3}</b>
                            </ListGroup.Item>
                        </ListGroup>

                        <Card.Text>
                            <br></br>
                            {review.content}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </>
        );
    }
}
export default SingleReview;
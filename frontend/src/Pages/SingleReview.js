import review from '../sample_data/Review.json'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SingleReview() {
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

export default SingleReview;
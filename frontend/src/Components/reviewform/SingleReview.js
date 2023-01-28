import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

function SingleReview(props) {
    const review = props.review;

    var stringtime, time, day, min_1, min_2;
    time = "Post time: "
    if (review.time != null) {
        stringtime = review.time;
        day = stringtime.substring(2, 10);
        min_1 = parseInt(stringtime.substring(11, 13));
        min_2 = parseInt(stringtime.substring(14, 16));
        time += day + " " + min_1 + ":" + min_2;
    }


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

                    <ListGroup horizontal className='Listgroup'>
                        <ListGroup.Item className='Listitem'>
                            Overall Quality: <b>{review.preference}</b>
                        </ListGroup.Item>
                        <ListGroup.Item className='Listitem'>
                            Professor: <b>{review.prof}</b>
                        </ListGroup.Item>
                        <ListGroup.Item className='Listitem'>
                            Course Difficulty: <b>{review.difficulty}</b>
                        </ListGroup.Item>
                        <ListGroup.Item className='Listitem'>
                            Future Help: <b>{review.helpfulness}</b>
                        </ListGroup.Item>
                    </ListGroup>

                    <Card.Text>
                        <br></br>
                        {review.content}
                        <br></br>
                        <div align="right">
                            {time}
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    );
}
export default SingleReview;
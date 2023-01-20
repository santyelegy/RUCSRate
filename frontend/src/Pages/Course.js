import course from '../sample_data/Course.json'
import SingleReview from '../Components/reviewform/SingleReview.js'
import ReviewForm_second from '../Components/reviewform/ReviewForm_second.js'
import CustomToggle from '../Components/CustomToggle.js'

import { Accordion, Card, Row, Col } from 'react-bootstrap';

function Course() {

    return (
        <>
            <Card style={{ width: '72rem' }}>
                <Card.Body>

                    <div>
                        <h4>Course Code: {course.code}</h4>
                        <h4>Course Name: {course.name}</h4>
                        <h4>Professor: {course.prof}</h4>
                    </div>

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header >
                                <Row>
                                    <Col>
                                        <CustomToggle eventKey="1">
                                            Add your own review for this course!
                                        </CustomToggle>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Row>
                                                <Col align='center'>
                                                    Course Code: {course.code}
                                                </Col>
                                                <Col align='center'>
                                                    Professor: {course.prof}
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>

                                </Row>


                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ReviewForm_second />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Card.Text>
                        <br></br>
                        <h3>
                            Here are the comments:
                        </h3>
                    </Card.Text>


                    <SingleReview cid={"abc"} />
                </Card.Body>
            </Card>



        </>
    );
}

export default Course;
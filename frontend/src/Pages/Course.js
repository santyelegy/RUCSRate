import course from '../sample_data/Course.json'
import SingleReview from '../Pages/SingleReview.js'
import ReviewForm_second from '../Pages/ReviewForm_second.js'
import CustomToggle from '../Pages/CustomToggle.js'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Course() {

    return (
        <>
            <Card style={{ width: '72rem' }}>
                <Card.Body>

                    <div>
                        <h4>Course Code: {course[0].code}</h4>
                        <h4>Course Name: {course[0].name}</h4>
                        <h4>Professor: {course[0].prof}</h4>
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
                                                    Course Code: {course[0].code}
                                                </Col>
                                                <Col align='center'>
                                                    Professor: {course[0].prof}
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


                    <SingleReview />
                </Card.Body>
            </Card>



        </>
    );
}

export default Course;
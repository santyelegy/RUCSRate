import SingleReview from '../Components/reviewform/SingleReview.js'
import ReviewForm from '../Components/reviewform/ReviewForm.js'
import CustomToggle from '../Components/CustomToggle.js'
import { useParams } from 'react-router-dom';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Course() {
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    const [score, setScore] = useState([]);
    //fetch data
    let getScore = async () => {
        if (id === null) {
            return;
        }

        let response = await fetch('http://localhost:8080/review/getByCourse/' + id + '/average_score')
        //console.log(response)
        let data = await response.json()
        //console.log("data", data)
        setScore(data)

    }
    let getCourse = async () => {
        if (id === null) {
            return;
        }
        let response = await fetch('http://127.0.0.1:8080/course/findid/' + id)
        let data = await response.json()
        setCourse(data)
    }


    useEffect(() => {
        getScore();
    }, [id])
    useEffect(() => {
        getCourse();
    }, [id])



    let reviewList = <></>;
    if (course.length !== 0) {
        if (course.review.length !== 0) {
            reviewList = course.review.map((reviewcontent, index) => {
                return <SingleReview key={index} review={reviewcontent} />;
            });
        }
    }

    var score0 = "None", score1 = "None", score2 = "None", score3 = "None";
    if (score.avg_preference != null || score.avg_difficulty != null || score.avg_prof != null || score.avg_helpfulness != null) {
        score0 = score.avg_preference.toString()
        score0 = score0.substring(0, 4)
        score1 = score.avg_difficulty.toString()
        score1 = score1.substring(0, 4)
        score2 = score.avg_prof.toString()
        score2 = score2.substring(0, 4)
        score3 = score.avg_helpfulness.toString()
        score3 = score3.substring(0, 4)
    }


    return (
        <>
            <Card style={{ width: '72rem' }}>
                <Card.Body>

                    <div>
                        <h4>Course Code: {course.code}</h4>
                        <h4>Course Name: {course.name}</h4>
                        <h4>Professor: {course.prof}</h4>
                    </div>

                    <Row>
                        <Col>
                            <h5>
                                Overall Quality: {score0}
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                Professor: {score1}
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                Course Difficulty: {score2}
                            </h5>
                        </Col>
                        <Col>
                            <h5>
                                Future Help: {score3}
                            </h5>
                        </Col>
                    </Row>

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
                                    <ReviewForm course={course} courseId={id} />
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
                    {reviewList}
                </Card.Body>
            </Card>



        </>
    );
}

export default Course;
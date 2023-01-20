import professor from '../sample_data/Professor.json'
import SingleReview from '../Components/reviewform/SingleReview.js'
import ReviewForm from '../Components/reviewform/ReviewForm.js'
import CustomToggle from '../Components/CustomToggle.js'

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, React } from "react"

import { Accordion, Card, Row, Col } from 'react-bootstrap';

function Professor() {

    const { pid } = useParams();
    const [prof, setProf] = useState([])
    const web = "http://127.0.0.1:8080/findname/" + pid
    const fetchData = async () => {
        const response = await fetch(web)
        const data = await response.json()
        setProf(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    let reviewList = <></>;
    if (prof.length !== 0) {
        if (prof.review.length !== 0) {
            reviewList = prof.review.map((reviewcontent, index) => {
                return <SingleReview key={index} review={reviewcontent} />;
            });
        }
    }

    return (
        <>
            <Card style={{ width: '72rem' }}>
                <Card.Body>
                    <div>
                        <h4>Professor: {prof.name}</h4>
                        <h4>Overall Score: {prof.score}</h4>
                    </div>

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header >
                                <CustomToggle eventKey="1">
                                    Add your own review for this professor!
                                </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ReviewForm />
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

export default Professor;
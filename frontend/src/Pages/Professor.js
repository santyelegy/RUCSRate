import professor from '../sample_data/Professor.json'
import SingleReview from '../Components/reviewform/SingleReview.js'
import ReviewForm from '../Components/reviewform/ReviewForm.js'
import CustomToggle from '../Components/CustomToggle.js'

import { Accordion, Card, Row, Col } from 'react-bootstrap';

function Professor() {

    return (
        <>
            <Card style={{ width: '72rem' }}>
                <Card.Body>
                    <div>
                        <h4>Professor: {professor.name}</h4>
                        <h4>Overall Score: {professor.score}</h4>
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

                    <SingleReview />
                </Card.Body>
            </Card>

        </>
    );
}

export default Professor;
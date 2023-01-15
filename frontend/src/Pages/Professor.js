import professor from '../sample_data/Professor.json'
import SingleReview from '../Pages/SingleReview.js'
import ReviewForm from '../Pages/ReviewForm.js'
import CustomToggle from '../Pages/CustomToggle.js'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
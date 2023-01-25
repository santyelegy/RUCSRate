import { Card } from 'react-bootstrap'

function Contributors() {
    return (
        <>

            <div padding='10px'>
                <Card style={{ width: '55vw' }}>
                    <Card.Header><h2>
                        Hello Scarlet Knights
                    </h2></Card.Header>
                    <Card.Body>

                        <p><font size="4">
                            <i>RU Ratings</i> is built by a group of master's students from various backgrounds at Rutgers University.
                            When some of us registered for courses for our 2023 Spring semester in December, we found a need for more information about courses and professors at Rutgers Graduate School. Some famous rating course websites still have a limited number of comments about RU graduate courses.
                        </font></p>

                        <p><font size="4">
                            We decide to design a website for students in RU to share their feedback with specific courses and professors.
                            After Christmas and New Year vacation, we made our idea real and worked on RU Ratings during the winter break of 2023. Despite our lack of ability in web application and the limited time, we still deployed the website before the deadline when we could drop the course and made the final decision about our course registration.
                        </font></p>
                        <p><font size="4">
                            However, <i>RU Ratings</i> could be better and still have some bugs. If you find any bugs or want us to change a detail in <i>RU Ratings</i>, feel free to contact us and send your feedback.
                        </font></p>
                        <p><font size="4">
                            I Hope <i>RU Ratings</i> can help you guys and that you can achieve success not only in academics but also in your career for study at Rutgers.
                        </font></p>
                    </Card.Body>
                </Card>
                <br></br>
            </div>

        </>
    );
}

export default Contributors;
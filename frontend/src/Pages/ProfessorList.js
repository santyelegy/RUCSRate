import professorlist from "../sample_data/ProfessorList.json"
import { Link } from "react-router-dom";
import { useState, useEffect, React } from "react";

import { Accordion, Form } from 'react-bootstrap';

function ProfessorList() {

    const [professors, setProf] = useState([])
    const web = "http://127.0.0.1:8080/professor/all"
    const fetchData = async () => {
        const response = await fetch(web)
        const data = await response.json()
        setProf(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [search, setSearch] = useState("");

    function subaccordion(professor, index) {
        const coursegroup = professor.course.map((course, i) => {
            return (
                <>
                    <Link to={"/courselist/course/".concat(course[0].course_id)} index={i}>{course[0].course_code}</Link>
                    <br />
                </>
            );
        });

        return (
            <Accordion.Item eventKey={index}>
                <Accordion.Header>
                    {professor.name.concat('  Score:', professor.score)}
                </Accordion.Header>
                <Accordion.Body>
                    <h3>
                        {<Link to={"/professor/".concat(professor.pid)}>{professor.name}</Link>}<br />
                    </h3>
                    Courses:<br />
                    {coursegroup}
                </Accordion.Body>
            </Accordion.Item>
        );
    }

    const all_professor = professorlist.map((professor, index) => {
        return professor.name.toLowerCase().startsWith(search.toLowerCase()) ? (subaccordion(professor, index)) : <></>;
    })

    return (
        <>
            <Form>
                <Form.Label>
                    Search
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Professor Name"
                    onChange={(e) => setSearch(e.target.value)} />
            </Form>
            <Accordion>
                {all_professor}
            </Accordion>
        </>
    );
}

export default ProfessorList;
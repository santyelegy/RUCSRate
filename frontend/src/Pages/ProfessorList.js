import professorlist from "../sample_data/ProfessorList.json"
import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Form from "react-bootstrap/Form";

function ProfessorList() {
  const [search, setSearch] = useState("");

  function subaccordion(professor, index) {
    const coursegroup = professor.course.map((course, i) => {
      return (
        <>
          <Link to={"/courselist/course/".concat(course)} index={i}>{course}</Link>
          <br />
        </>
      );
    });

    return (
      <Accordion.Item eventKey={index}>
        <Accordion.Header>
          {professor.name.concat('# score:', professor.score)}
        </Accordion.Header>
        <Accordion.Body>
          <h3>
            {<Link to={"/professor/".concat(professor.name)}>{professor.name}</Link>}<br />
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
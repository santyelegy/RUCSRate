import professorlist from "../sample_data/ProfessorList.json"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function ProfessorList() {
  const [search,setSearch]=useState("");
  function subaccordion(professor, index) {
    const coursegroup = professor.course.map((course, i) => {
      return (<><Link to={"/courselist/course/".concat(course)} index={i}>{course}</Link><br /></>);
    });
    return (
      <Accordion.Item eventKey={index}>
        <Accordion.Header>{<Link to={"/professor/".concat(professor.name)}>{professor.name.concat('# score:', professor.score)}</Link>}</Accordion.Header>
        <Accordion.Body>
          Courses:<br/>
          {coursegroup}
        </Accordion.Body>
      </Accordion.Item>
    );
  }
  const all_professor = professorlist.map((professor, index) => {
    return professor.name.startsWith(search)?(subaccordion(professor, index)):<></>;
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
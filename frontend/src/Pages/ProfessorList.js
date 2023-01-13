import professorlist from "../sample_data/ProfessorList.json"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
function ProfessorList() {
    function subaccordion(professor,index){
        const coursegroup=professor.course.map((course,i)=>{
            console.log(course);
            return (<><Link to={"/courselist/course/".concat(course)} index={i}>{course}</Link><br/></>);    
        });
        return (
            <Accordion.Item eventKey={index}>
          <Accordion.Header>{<Link to={"/professor/".concat(professor.name)}>{professor.name.concat('# score:',professor.score)}</Link>}</Accordion.Header>
          <Accordion.Body>
            {coursegroup}
          </Accordion.Body>
        </Accordion.Item>
        );
        
    }
    const all_professor=professorlist.map((professor,index)=>{
        return (subaccordion(professor,index));
    })
    return (
        <Accordion>
        {all_professor}
      </Accordion>
    );
}
export default ProfessorList;
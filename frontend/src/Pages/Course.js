import { useParams } from 'react-router-dom';
function Course(){
    const { id } = useParams();
    return(
        <div>Course</div>
    );
}

export default Course;
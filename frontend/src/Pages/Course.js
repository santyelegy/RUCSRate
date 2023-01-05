<<<<<<< HEAD
import course from '../sample_data/Course.json'

function Course() {
    return (
        <>
            <div>{course[0].code}</div>
            <div>{course[0].name}</div>
            <div>{course[0].prof}</div>
            <div>{course[0].score}</div>
            Here are the comments:
            <div>{course[0].review[0].content}</div>
            <div>{course[0].review[0].score}</div>
        </>
=======
import { useParams } from 'react-router-dom';
function Course(){
    const { id } = useParams();
    return(
        <div>Course</div>
>>>>>>> 4af6340552ba7243e5f260a4d6ff46b0b05d95e5
    );
}

export default Course;
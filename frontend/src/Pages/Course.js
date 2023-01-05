import { useParams } from 'react-router-dom';
import course from '../sample_data/Course.json'

function Course() {
    const { id } = useParams();
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
    );
}

export default Course;
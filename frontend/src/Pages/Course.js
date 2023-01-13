import { useParams, Link } from 'react-router-dom';
import course from '../sample_data/Course.json'
import Button from 'react-bootstrap/Button';

function Course() {
    const { id } = useParams();
    const courses = course[0].review.map((review, index) => {
        return (
            <div><div>{review.content}</div>
                <div>{review.score}</div>
                <Link to={"/reviews".concat("/", index.toString())}>To review</Link></div>
        );
    })
    return (
        <>
            <div>{course[0].code}</div>
            <div>{course[0].name}</div>
            <div>{course[0].prof}</div>
            <div>{course[0].score}</div>

            <Button variant="primary" type="submit">
                <Link to={"/reviews"}>Add Your Reviews</Link>
            </Button>

            <br></br>
            Here are the comments:
            <div>{courses}</div>
        </>
    );
}

export default Course;
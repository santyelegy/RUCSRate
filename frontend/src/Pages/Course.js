import { useParams, Link } from 'react-router-dom';
import course from '../sample_data/Course.json'
import ReviewForm from './ReviewForm';
function Course() {
    const { id } = useParams();
    const courses = course[0].review.map((review, index) => {
        return (
            <div><div>{review.content}</div>
                <div>{review.score}</div>
                <Link to={"/review".concat("/",index.toString())}>To review</Link></div>
        );
    })
    return (
        <>
            <div>{course[0].code}</div>
            <div>{course[0].name}</div>
            <div>{course[0].prof}</div>
            <div>{course[0].score}</div>
            <ReviewForm />
            Here are the comments:
            <div>{courses}</div>
        </>
    );
}

export default Course;
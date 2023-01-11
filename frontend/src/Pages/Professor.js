import professor from '../sample_data/Professor.json'
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Button from 'react-bootstrap/Button';

function Professor() {
    const { id } = useParams();

    const reviews = professor.reviews.map((review, index) => {
        return (
            <div><div>{review.course}</div>
                <div>{review.content}</div>
                <Link to={"/reviews".concat("/", index.toString())}>To review</Link></div>
        );
    })
    return (
        <>
            <div>Professor</div>
            <div>{professor.name}</div>
            <div>{professor.email}</div>
            <div>{professor.score}</div>

            <Button variant="primary" type="submit">
                <Link to={"/reviews"} className='mylink'>Add Your Reviews</Link>
            </Button>

            {reviews}
        </>
    );
}

export default Professor;
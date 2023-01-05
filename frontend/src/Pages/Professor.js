import professor from '../sample_data/Professor.json'
import { useParams,Link } from 'react-router-dom';
function Professor() {
    const { id } = useParams();
    //console.log(id);
    const reviews = professor.reviews.map((review, index) => {
        return (
            <div><div>{review.course}</div>
                <div>{review.content}</div>
                <Link to={"/review".concat("/",index.toString())}>To review</Link></div>
        );
    })
    return (
        <>
        <div>Professor</div>
        <div>{professor.name}</div>
        <div>{professor.email}</div>
        <div>{professor.score}</div>
        {reviews}
        </>
    );
}

export default Professor;
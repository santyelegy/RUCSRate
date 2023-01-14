import review from '../sample_data/Review.json'
import SingleReview from '../Pages/SingleReview.js'

function Review() {

    return (
        <>
            <div>Review</div>
            <div>{review.course}</div>
            <div>{review.professor}</div>
            <div>{review.score1}</div>
            <div>{review.score2}</div>
            <div>{review.score3}</div>
            <div>{review.score4}</div>
            <div>{review.content}</div>

            <SingleReview />
        </>
    );
}

export default Review;
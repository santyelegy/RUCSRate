import review from '../sample_data/Review.json'
function Review(){
    return(
        <>
        <div>Review</div>
        <div>{review.course}</div>
        <div>{review.professor}</div>
        <div>{review.score1}</div>
        <div>{review.score2}</div>
        <div>{review.score3}</div>
        <div>{review.score4}</div>
        <div>{review.content}</div>
        </>
    );
}

export default Review;
import professor from '../sample_data/Professor.json'
function Professor() {
    const reviews = professor.reviews.map((review, index) => {
        return (
            <div><div>{review.course}</div>
                <div>{review.content}</div></div>
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
import department from '../sample_data/Department.json'

function Department() {
    return (
        <>
            <div>
                <div>
                    {department[0].name}</div>
                <div>
                    Courses Avaliable: {department[0].num}</div>
            </div>
            <div>
                <div>
                    {department[1].name}</div>
                <div>
                    Courses Avaliable: {department[1].num}</div>
            </div>
            <div>
                <div>
                    {department[2].name}</div>
                <div>
                    Courses Avaliable: {department[2].num}</div>
            </div>
        </>
    );
}

export default Department;
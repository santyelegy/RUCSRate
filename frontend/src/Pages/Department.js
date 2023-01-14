import department from '../sample_data/Department.json'

function Department() {
    function dbutton(department) {
        return (
            <a href={"/courselist/".concat(department.name)}>
                <button className="DepartmentButton">
                    {department.name}<br />
                    {"Courses Avaliable: ".concat(department.num)}
                </button>
            </a>
        );
    }
    const allButtons = department.map((depart, index) => {
        return (
            dbutton(depart)
        );
    })
    return (
        <div className='department-group'>
            {allButtons}
        </div>
    );
}

export default Department;
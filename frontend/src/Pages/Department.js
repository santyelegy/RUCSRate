import department from '../sample_data/Department.json'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
function Department() {
    function dbutton(department){
        return(
            <button href={"/courselist/".concat(department.name) } className="DepartmentButton">
                {department.name}<br/>
                {"Courses Avaliable: ".concat(department.num)}
            </button>
        );
    }
    const allButtons=department.map((depart,index)=>{
        return(
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
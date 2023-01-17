import department from '../sample_data/Department.json'
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';

function Department() {
    function brand(department) {
        return (
            <>
                <Alert variant="primary">
                    <h2>
                        <Link to={"/courselist/".concat(department.name)}>
                            {department.name}
                        </Link>
                    </h2>
                    <hr />
                    <h5 className="mb-0">
                        {"Courses Avaliable: ".concat(department.num)}
                    </h5>
                </Alert>
            </>
        );
    }

    const allBrands = department.map((depart, index) => {
        return (
            brand(depart)
        );
    })

    return (
        <>
            <div className='department-group'>
                {allBrands}
            </div>
        </>
    );
}

export default Department;
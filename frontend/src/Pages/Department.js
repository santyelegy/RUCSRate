import { Link } from "react-router-dom";
import { Alert, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Department() {
    const [department, setDepartment] = useState([]);
    let getDepartment = async () => {
        let response = await fetch('http://127.0.0.1:8080/course/department')
        let data = await response.json()
        console.log("d", data);
        setDepartment(data);
        console.log("r", department);
    }
    useEffect(() => {
        getDepartment();
    }, [])
    function brand(departmentName, department) {


        return (
            <>
                <Card as="a" href={"/courselist/" + departmentName} style={{ textDecoration: 'none', borderColor: '#fff' }}>
                    <Alert variant="primary">
                        <h2>
                            {departmentName}
                        </h2>
                        <hr />
                        <h5 className="mb-0">
                            {"Courses Avaliable: ".concat(department[departmentName])}
                        </h5>
                    </Alert>
                </Card>
            </>
        );
    }
    const allBrands = Object.keys(department).map((depart, index) => {
        return (
            brand(depart, department)
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
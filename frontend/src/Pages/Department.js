import department from '../sample_data/Department.json'
import { Link } from 'react-router-dom';

function Department() {

    return (
        <>
            <div>
                <div>
                    <Link to={"/courselist/cs"}>{department[0].name}</Link></div>
                <div>
                    Courses Avaliable: {department[0].num}</div>
            </div>
            <div>
                <div>
                    <Link to={"/courselist/ds"}>{department[1].name}</Link></div>
                <div>
                    Courses Avaliable: {department[1].num}</div>
            </div>
            <div>
                <div>
                    <Link to={"/courselist/ece"}>{department[2].name}</Link></div>
                <div>
                    Courses Avaliable: {department[2].num}</div>
            </div>
        </>
    );
}

export default Department;
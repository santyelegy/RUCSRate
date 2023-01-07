import department from '../sample_data/Department.json'
import { useParams,Link } from 'react-router-dom';

function Department() {
    const { id } = useParams();

    
    return (
        <>
            <div>
                <div>
                <Link to={"/courselist"}>{department[0].name}</Link></div>
                <div>
                    Courses Avaliable: {department[0].num}</div>
            </div>
            <div>
                <div>
                    <Link to={"/courselist"}>{department[1].name}</Link></div>
                <div>
                    Courses Avaliable: {department[1].num}</div>
            </div>
            <div>
                <div>
                <Link to={"/courselist"}>{department[2].name}</Link></div>
                <div>
                    Courses Avaliable: {department[2].num}</div>
            </div>
        </>
    );
}

export default Department;
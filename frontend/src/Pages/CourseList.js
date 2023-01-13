import dept_course from '../sample_data/CourseList.json'
import { useParams, Link } from 'react-router-dom';

function CourseList() {
    const { department } = useParams();
    const course = dept_course[0].cources.map((cources, index) => {
        return (
            <div>
                <Link to={"/courselist/course/".concat(index)}>{dept_course[0].cources[0].code + " " + dept_course[0].cources[0].name}</Link></div>
        );
    })
    return (
        <>
            <div>
                <div>
                    {course}</div>
                <div>
                    {dept_course[0].cources[0].prof}</div>

                <div>
                    {course}</div>
                <div>
                    {dept_course[0].cources[1].prof}</div>
            </div>
        </>
    );
}

export default CourseList;
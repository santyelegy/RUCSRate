import dept_course from '../sample_data/CourseList.json'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

function CourseList() {
    const { department_id } = useParams();
    const [allcourses, setAllCourses] = useState([]);
    const [search, setSearch] = useState("");

    let [department, setDepartment] = useState([true, true, true]);
    useEffect(() => {
        if (department_id === "Computer Science") {
            setDepartment([true, false, false]);
        } else if (department_id === "Electrical and Computer Engineering") {
            setDepartment([false, true, false]);
        } else if (department_id === "Data Science") {
            setDepartment([false, false, true]);
        }
    }, [department_id])


    useEffect(() => {
        let subarray = []
        for (let i = 0; i < dept_course.length; i++) {
            if (department[i]) {
                subarray.push(...dept_course[i]["cources"]);
            }
        }
        setAllCourses(subarray);
    }, [JSON.stringify(department)])

    const courses = allcourses.map((course, index) => {
        let show = true;
        if (!course.code.toLowerCase().startsWith(search.toLowerCase()) &&
            !course.name.toLowerCase().startsWith(search.toLowerCase())) {
            show = false;
        }

        return show ? (<div index={index}>
            <Link to={"/courselist/course/".concat(course.code)}>{course.code.concat(" ", course.name)}</Link>
            <br />
        </div>) : <div index={index}></div>;
    })

    function handleBoxChange(event, index) {
        setDepartment((prev) => prev.map((el, i) => (i !== index ? el : event.target.checked)));
    }

    return (
        <>
            <div>
                <Form>
                    <Form.Label>
                        Search
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Course Name/Code"
                        onChange={(e) => setSearch(e.target.value)} />
                    <Form.Label>
                        Department Filter:
                    </Form.Label>
                    <Form.Check
                        inline
                        label="CS"
                        type='checkbox'
                        checked={department[0]}
                        onChange={(e) => handleBoxChange(e, 0)}
                    />
                    <Form.Check
                        inline
                        label="ECE"
                        type='checkbox'
                        checked={department[1]}
                        onChange={(e) => handleBoxChange(e, 1)}
                    />
                    <Form.Check
                        inline
                        label="DS"
                        type='checkbox'
                        checked={department[2]}
                        onChange={(e) => handleBoxChange(e, 2)}
                    />
                </Form>
                {courses}
            </div>
        </>
    );
}

export default CourseList;
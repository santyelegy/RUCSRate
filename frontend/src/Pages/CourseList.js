import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

function CourseList() {
    const { department_id } = useParams();
    const [allcourses, setAllCourses] = useState([]);
    const [search, setSearch] = useState("");
    const [dept_course,setDPT]=useState([])
    const [department, setDepartment] = useState([true, true, true]);
    //default filter
    useEffect(() => {
        if (department_id === "Computer Science") {
            setDepartment([true, false, false]);
        } else if (department_id === "Electrical and Computer Engineering") {
            setDepartment([false, true, false]);
        } else if (department_id === "Data Science") {
            setDepartment([false, false, true]);
        }
    }, [department_id])
    //fetch data
    let getAllCourse = async () => {
        let response = await fetch('http://127.0.0.1:8080/course/all')
        let data = await response.json()
        setDPT(data)
    }
    useEffect(()=>{
        getAllCourse();
    },[])
    //clean data by filter
    useEffect(() => {
        let subarray = []
        for (let i = 0; i < dept_course.length; i++) {
            // shitty code, remember to refactor
            if((dept_course[i].department==="Computer Science"&&department[0])||
               (dept_course[i].department==="Electrical and Computer Engineering"&&department[1])||
               (dept_course[i].department==="Data Science"&&department[2])){
                subarray.push(dept_course[i]);
            }
        }
        setAllCourses(subarray);
    }, [JSON.stringify(department),dept_course])
    // course list JSX
    const courses = allcourses.length===0?<></>:allcourses.map((course, index) => {
        let show = true;
        if (!course.code.toLowerCase().startsWith(search.toLowerCase()) &&
            !course.name.toLowerCase().startsWith(search.toLowerCase())) {
            show = false;
        }

        return show ? (<div index={index}>
            <Link to={"/courselist/course/".concat(course._id)}>{course.code.concat(" ", course.name)}</Link>
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
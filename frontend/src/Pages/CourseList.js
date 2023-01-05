import dept_course from '../sample_data/CourseList.json'

function CourseList() {

    return (
        <>
            <div><div>
                Department: {dept_course[0].Dcode + " " + dept_course[0].name}</div>
                <div>
                    {dept_course[0].cources[0].code} {dept_course[0].cources[0].name}</div>
                <div>
                    {dept_course[0].cources[0].prof}</div>

                <div>
                    {dept_course[0].cources[1].code} {dept_course[0].cources[1].name}</div>
                <div>
                    {dept_course[0].cources[1].prof}</div>
            </div>
        </>
    );
}

export default CourseList;
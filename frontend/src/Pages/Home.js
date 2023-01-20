import { Link } from "react-router-dom";
import { useState, useEffect, React } from "react"

function Home() {

    const [announcements, setName] = useState([])
    const web = "http://127.0.0.1:8080/announcement/"
    const fetchData = async () => {
        const response = await fetch(web)
        const data = await response.json()
        setName(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const content = announcements.map((announcement, index) => {

        return (

            <div>
                <h4>{announcement.title}</h4>
                <div>{announcement.content}</div>
            </div>
        );
    });

    if (announcements.length > 0) {
        return (
            <>
                <div>
                    <h1>Announcement</h1>
                    {content}
                    <h1><br></br>Menu for developer</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/department">Department</Link>
                        </li>
                        <li>
                            <Link to="/courselist">Courselist</Link>
                            <br></br>
                            <Link to="/courselist/course/:id">Detail Courses</Link>
                            <br></br>
                            <Link to="/courselist/cs">CourselistCS</Link>
                            <Link to="/courselist/ece">CourselistECE</Link>
                            <Link to="/courselist/ds">CourselistDS</Link>
                        </li>
                        <li>
                            <Link to="/professor">ProfessorList</Link>
                            <br></br>
                            <Link to="/professor/:id">Detail Professor</Link>
                        </li>
                        <li>
                            <Link to="/reviews">Add Reviews</Link>
                            <br></br>
                            <Link to="/reviews/0">Detail Review</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Home;
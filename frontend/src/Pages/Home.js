import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Homee() {
    return (
        <div>
                      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/announcement">Announcement</Link>
            </li>
            <li>
              <Link to="/courselist">CourseList</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link to="/department">Department</Link>
            </li>
            <li>
              <Link to="/professor">Professor</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
          </ul>
        </div>
        
    );
}

export default Homee;
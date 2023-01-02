import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Announcement from "./Pages/Announcement";
import Course from "./Pages/Course";
import CourseList from "./Pages/CourseList";
import Department from "./Pages/Department";
import Home from "./Pages/Home";
import Professor from "./Pages/Professor";
import Review from "./Pages/Review";

export default function App() {
  return (
    <Router>
      <div>
        {/*
        <nav>
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
        </nav>
  */}
        <Routes>
          <Route path="/announcement" element={<Announcement />}/>
          <Route path="/courselist" element={<CourseList />}/>
          <Route path="/course" element={<Course />}/>
          <Route path="/department" element={<Department />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/review" element={<Review />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

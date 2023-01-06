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

import AppLayout from '../src/Components/layout/AppLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/announcement' element={<Announcement />} />
          <Route path='/department' element={<Department />} />
          <Route path='/courselist' element={<CourseList />} />
          <Route path='/course' element={<Course />} />
          <Route path='/professor/:id' element={<Professor />} />
          <Route path='/review/:id' element={<Review />} />
        </Route>
      </Routes>
      <div>
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
          </ul>
        </nav>
      </div>
    </Router>
  );
}

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
import Contributors from "./Pages/Contributors";

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
          <Route path='/courselist/:id' element={<Course />} />
          <Route path='/professor/:id' element={<Professor />} />
          <Route path='/review/:id' element={<Review />} />
          <Route path='/aboutus' element={<Contributors />} />
        </Route>
      </Routes>
    </Router>
  );
}

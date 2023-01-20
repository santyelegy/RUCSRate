import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Course from "./Pages/Course";
import CourseList from "./Pages/CourseList";
import Department from "./Pages/Department";
import Home from "./Pages/Home";
import Professor from "./Pages/Professor";
import Review from "./Pages/Review";
import Addreviews from "./Pages/Addreviews";
import Contributors from "./Pages/Contributors";
import AppLayout from '../src/Components/layout/AppLayout';
import ProfessorList from './Pages/ProfessorList';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='/department' element={<Department />} />
					<Route path='/courselist' element={<CourseList />} />
					<Route path='/courselist/course/:id' element={<Course />} />
					<Route path='/courselist/:department_id' element={<CourseList />} />
					<Route path='/professor' element={<ProfessorList />} />
					<Route path='/professor/:id' element={<Professor />} />
					<Route path='/reviews/:id' element={<Review />} />
					<Route path='/reviews' element={<Addreviews />} />
					<Route path='/aboutus' element={<Contributors />} />
				</Route>
			</Routes>
		</Router>
	);
}

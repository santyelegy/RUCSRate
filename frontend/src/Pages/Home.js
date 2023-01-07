import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
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
          <Link to="/courselist">CourseList 新建department分类</Link>
        </li>
        <li>
          <Link to="/courselist/:id">Course 有问题</Link>
        </li>
        <li>
          <Link to="/department">Department</Link>
        </li>
        <li>
          <Link to="/professor">Professor 有问题</Link>
        </li>
        <li>
          <Link to="/review">Review 有问题</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </div>

  );
}

export default Home;
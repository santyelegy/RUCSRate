import {
  Link
} from "react-router-dom";
import announcements from '../sample_data/announcements.json'

function Home() {
  const content = announcements.map((announcement, index) => {
    return (
      <div>
        <h3>{announcement.title}</h3>
        <div>{announcement.content}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Announcement</h1>
      {content}

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
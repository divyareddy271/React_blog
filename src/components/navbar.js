import {Link} from 'react-router-dom';

function NavBar() {
    return (
      <div className="NavBar">
          <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/post/create-post">Create Post</Link>
              </li>
          </ul>
        
      </div>
    );
  }
  export default NavBar;
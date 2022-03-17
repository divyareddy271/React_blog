import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Home,PostDetails,CreatePost} from './';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/post/" element={<PostDetails/>} />
        <Route exact path= "/post/create-post" element={<CreatePost/>} />
      </Routes>  
    </div>
  );
}

export default App;

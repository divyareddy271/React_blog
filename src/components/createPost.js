import { useState } from "react";
import '../../src/index.css'

function CreatePost() {
  const [title,setTitle] = useState();
  const [subtitle,setsubTitle] = useState();
  const [content,setContent] = useState();
  function handleeventsubmit(e){
    e.preventDefault();
    console.log(title);
    return e;
  }
    return (
      <div className="Create-post">
        <div className="Heading">
        <h1>Create Post</h1>
        </div>
      <div className="Create-post-form">
        <form onSubmit={handleeventsubmit}>
        <div className="form-field">
            <label>Title</label>
            <input size="80" value={title} onChange={((e) => setTitle(e.target.value))}/>
          </div>

          <div className="form-field">
            <label>Sub title</label>
            <input size="80" value={subtitle} onChange={((e) => setsubTitle(e.target.value))} />
          </div>
          <div className="form-field">
            <label>content</label>
            <textarea rows="10" cols="1" value={content} onChange={((e) => setContent(e.target.value))}></textarea>
          </div>
          <button type="submit">Create a post</button>
        </form>
      </div>
      </div>
      
    );
  }
  
  export default CreatePost;
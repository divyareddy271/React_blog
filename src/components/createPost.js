import { useState } from "react";
import '../../src/index.css'
import { useFormInput } from '../hooks'
import {Firestore} from "./firebase";

function CreatePost() {
  const title = useFormInput("");
  const subtitle = useFormInput("");
  const content = useFormInput("");
  function handleeventsubmit(e) {
    e.preventDefault();
    console.log(title.value,subtitle.value,content.value);
    Firestore.collection('posts').add({
      title: title.value,
      subtitle : subtitle.value,
      content : content.value,
      createdAt : new Date(),
    })
    return e;
  }
  return (
    <div className="Create-post-form">
      <form onSubmit={handleeventsubmit}>
        <div className="form-field">
          <label>Title</label>
          <input size="80" {...title} />
        </div>

        <div className="form-field">
          <label>Sub title</label>
          <input size="80" {...subtitle} />
        </div>
        <div className="form-field">
          <label>content</label>
          <textarea rows="10" cols="1" {...content}></textarea>
        </div>
        <button type="submit">Create a post</button>
      </form>
    </div>
     /* </div >

      /*</div><div className="Create-post">
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
      </div >*/
      
    );
}

export default CreatePost;
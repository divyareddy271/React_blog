import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Firestore } from "./firebase";

function POstDetails() {
  const [post, setPosts] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    Firestore.collection('posts')
    .doc(postId)
    .get()
    .then((snapshot)=>{
      setPosts(snapshot.data());
    })
  })
    return (
      <div className="POstDetails">
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        </div>
      </div>
    );
  }
  
  export default POstDetails;
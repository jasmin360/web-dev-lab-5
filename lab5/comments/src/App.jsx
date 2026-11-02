import { useState } from 'react';
import ReactDOM from "react-dom";


import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function AddComment({ comments, setComments }) {
  const [commentcount, setcommentcount] = useState(0)
  const [comment, setComment] = useState("");
    

  return (
    <div>
    <input
          placeholder="send message"
          onChange={e => setComment(e.target.value)}/>
    <button type="submit" onClick={() => add({comment, comments, setComments, commentcount, setcommentcount})}>submit</button>
    <p>Number of comments: {commentcount}</p>
    </div>
  );
}

function add({comment, comments, setComments, commentcount, setcommentcount}) {
  setComments([...comments, comment]);
  setcommentcount(commentcount + 1);
}

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (<li>{comment}</li>))}
    </ul>
  );
}

function App() {
  const [comments, setComments] = useState([]);
  return (
    <div className="App">
      <h1>Comments</h1>
      <AddComment comments={comments} setComments={setComments} />
      <CommentList comments={comments} />
    </div>
  )
}

export default App

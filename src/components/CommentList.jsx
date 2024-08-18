import React, { useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import LoginForm from "./LoginForm";

const CommentsList = () => {
  const komen = useRef(null)
  const [user, setUser] = useState()
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ username: "", content: "" });
  const login = localStorage.getItem('user') ? true : false
  const [goLogin, setGoLogin] = useState(false)

  const handleLogin = () => {
    setGoLogin(prev => !prev)
  }
  const tamu = () => {
      fetch(`${import.meta.env.VITE_BACKEND_SERVER}/tamu`)
    .then(response => response.json())
    .then(result => {
      setUser(result[0])
    })
  }

  const komentar = () => {
    fetch(`${import.meta.env.VITE_BACKEND_SERVER}/users-comments`)
      .then(response => response.json())
      .then(result => {
        setComments(result.komentar)
      })
  }
  useEffect(() => {    
    tamu()
    if (user) {
      localStorage.setItem("user", user.id);
    }
  }, [])

  useEffect(() => {
    komentar()
  }, [newComment])


  const handleContentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({user: localStorage.getItem("user"), comment: newComment}),
    }
    fetch(`${import.meta.env.VITE_BACKEND_SERVER}/add-user-comment`, options)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            location.reload()
            komen.current.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.log("Komen gagal")
          }
          
        })
        .catch(error => console.error('Error fetching data:', error));
  };
  console.log(user)
  return (
    <div className="max-w-[800px] mx-auto p-4 bg-slate-200 rounded-lg shadow-md flex flex-col justify-between" ref={komen}>
      <div className="max-h-[500px] overflow-y-scroll">
        <h2 className="text-xl font-semibold mb-4 text-primary">Comments</h2>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            username={localStorage.getItem("user")}
            content={comment.komen}
          />
        ))}
      </div>
      {
        login ? 
        (
          <form onSubmit={handleSubmit} className="mt-4">
            <textarea
              required
              placeholder="Your comment"
              onChange={handleContentChange}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
            >
              Add Comment
            </button>
          </form>
        )
              : 
        (
         <>
           <div className="pt-6 text-center">
            <p className="text-blue-500 text-1xl font-semibold cursor-pointer" onClick={handleLogin}>Mau Chat? Login dulu!</p>
          </div>
          {
            goLogin ? ( <LoginForm setLogin={setGoLogin} /> ) : ''
          }
         </>
        )
      }
    </div>
  );
};

export default CommentsList;

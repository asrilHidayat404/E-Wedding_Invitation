import {useState} from 'react'

import React from 'react';

const Comment = ({ username, content }) => {
  const [countLike, setCountLike] = useState(0)
  const [isLike, setIsLike] = useState(false)

  const [countDisLike, setCountDisLike] = useState(0)
  const [isDisLike, setIsDisLike] = useState(false)
  
  return (
    <div className="mb-5">
      <div className="bg-gray-100 p-3 mb-2 rounded-lg">
        <h4 className="font-semibold text-primary">{username}</h4>
        <p className="text-gray-700 text-justify">{content}</p>
      </div>
    <div className="flex gap-3">
        <div 
          className="flex items-center bg-primary cursor-pointer rounded-lg py-1 p-5 border min-w-[40px] h-[40px] justify-center"
          onClick={() => {
            setIsLike(prev => !isLike)
            setCountLike(prev => prev+1)
          }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="17" 
            height="17" 
            fill="currentColor" 
            className={`bi bi-hand-thumbs-up-fill ${countLike ? 'text-slate-200' : "text-slate-200"}`} 
            viewBox="0 0 16 16"
            
            >
            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
          </svg>
          <div className=" p-1 rounded-full text-[14px] text-slate-200">
            <span>{countLike < 1 ? ""  : countLike}</span>
          </div>
        </div>
        <div 
          className="flex items-center cursor-pointer bg-primary rounded-lg py-1 p-5 border min-w-[40px] h-[40px] justify-center"
          onClick={() => {
            setIsDisLike(prev => !isLike)
            setCountDisLike(prev => prev+1)
          }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="17" 
            height="17" 
            fill="currentColor" 
            className={`bi bi-hand-thumbs-up-fill rotate-180 ${countLike ? 'text-slate-200' : "text-slate-200"}`} 
            viewBox="0 0 16 16"
            
            >
            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
          </svg>
          <div className=" p-1 rounded-full text-[14px] text-slate-200">
            <span>{countDisLike < 1 ? ""  : countDisLike}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

// ngrok config add-authtoken 2Z3xIYXL8ZS953O9ALs2LrHeo4N_6KHda5NYmTk4RzDHK6XiJ
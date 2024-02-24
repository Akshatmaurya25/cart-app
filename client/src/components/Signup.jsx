import React from 'react'

import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/signup', { username, email, password })
      .then(result => {
        console.log(result)
        alert("Submitted")

      })
    .catch(err=>console.log(err))
    
    setUsername(username);
    setEmail(email);
    setPassword(password)
    console.log(e)
  };
  return (
    <div className=''>
        <div className="bg-slate-600 p-12 flex items-start w-full flex-col  box-border">
      <div className="m-2 flex flex-col">
        <label htmlFor="email"> Username : </label>
        <input
          type="text"
          className="box-border w-full focus:outline-none focus:border-blue-500 border focus:border-2 text-black p-2 rounded-lg"
          value={username}
           onChange={(e) => setUsername(e.target.value)}
          name=""
          id=""
        />
      </div>
      <div className="m-2 flex flex-col">
        <label htmlFor="email"> Email : </label>
        <input
          type="email"
          className="box-border w-full focus:outline-none focus:border-blue-500 border focus:border-2 text-black p-2 rounded-lg"
          value={email}
              onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
        />
      </div>
      <div className="m-2 mb-3 flex flex-col">
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          className="box-border w-full focus:outline-none focus:border-blue-500 border focus:border-2 text-black p-2 rounded-lg"
          value={password}
              onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
        />
      </div>
      <div className="flex  w-full justify-center gap-3 ">
        <button className="bg-blue-700 p-3 rounded-xl active:bg-blue-500" onClick={handleSubmit}>
          <p>Submit</p>
        </button>
        <button className="bg-blue-700 p-3 rounded-xl active:bg-blue-500">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
    </div>
  )
}

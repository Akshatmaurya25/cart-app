import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-slate-600 p-12 flex items-start flex-col  box-border">
      <div className="m-2 flex flex-col">
        <label htmlFor="email"> Email : </label>
        <input
          type="email"
          className="box-border w-full focus:outline-none focus:border-blue-500 border focus:border-2 text-black p-2 rounded-lg"
          name=""
          id=""
        />
      </div>
      <div className="m-2 mb-3 flex flex-col">
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          className="box-border w-full focus:outline-none focus:border-blue-500 border focus:border-2 text-black p-2 rounded-lg"
          name=""
          id=""
        />
      </div>
      <div className="flex  w-full justify-center gap-3">
        <button className="bg-blue-700 p-3 rounded-xl active:bg-blue-500">
          <p>Submit</p>
        </button>
        <button className="bg-blue-700 p-3 rounded-xl active:bg-blue-500">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

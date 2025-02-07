import React from "react";

function Todoitems({ todo, ondelete }) {
  return (
    
    <div className="  mx-2 md:w-2/4 md:mx-auto flex flex-col gap-4">
      <li className="bg-blue-300 m-2 p-3 rounded-xl  flex justify-between items-center">
        <p className="text-xl flex text-black  items-center">{todo.title}</p>
        <button
          onClick={(e) => {
            ondelete(todo,e);
          }}
          className="bg-red-600   m-3 size-max   rounded-xl cursor-pointer hover:bg-red-700"
        >
          <i className="material-icons inline p-1 m-1">&#xe872;</i>
        </button>
      </li>
    </div>
  );
}

export default Todoitems;

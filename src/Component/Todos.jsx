import React  from "react";
import Todoitems from "./Todoitems";
import Addtodo from "./Addtodo";
import { useId } from 'react'; 

function Todos(props) {
   
  
  return (
    <div className="container mx-auto my-5 py-5 bg-blue-200 rounded-xl">
      <h1 className=" text-center text-3xl font-bold cursor-pointer">
        Your Task 
      </h1>

      {/* {console.log(props)} */}
      {/* <h1>{props.todos}</h1> */}

      <Addtodo todo={props.setto}/>

      {props.todos.length == 0 && (
        <p className="   text-center m-3 p-3 font-bold text-sm">
          NO items to dislay
        </p>
      )}

      {props.todos.map((todo) => {


        return (
          // console.log(id1)
          <Todoitems key={todo.sno} todo={todo} ondelete={props.ondelete} />
        );
      })}
    </div>
  );
}

export default Todos;

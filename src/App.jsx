import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Todos from "./Component/Todos";

function App() {
let inittodo;
  if (localStorage.getItem("todos")===null) {
    inittodo=[]
  }
  else{
    inittodo=JSON.parse(localStorage.getItem("todos"))
  }
    
  let ondelete = (todo  ) => {
    // console.log("Clicked on: ", todo);

    // let index=todos.indexOf(todo)
    // console.log(index)
    // todos.slice(index,1)

    settodos(todos.filter((e)=>{
      return e!==todo;
      localStorage.setItem("todos",JSON.stringify(todos))
    }))
  };

  let addtodo=(inputValue)=>{
    settodos([ { sno: todos.length + 1, title: inputValue },...todos ]);

    localStorage.setItem("todos",JSON.stringify(todos))
     
  }

  const [todos, settodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
   
  }, [todos])
  

  return (
    <>
      <Navbar />
      <Todos todos={todos} setto={addtodo} ondelete={ondelete} />
    </>
  );
}

export default App;

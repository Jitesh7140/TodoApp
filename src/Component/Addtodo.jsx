import React from "react"; 
import {useRef} from "react"; 

function Addtodo(props) { 
  // {console.log(todo)}

  const input1 = useRef(null)
  
  let additem=(e)=>{
    e.preventDefault();
    if (!input1.current.value) {
      alert("Add a Task and then Save")
      
    }
    else{
      // console.log("hello ",input1.current.value)
      props.todo(input1.current.value)
      input1.current.value=""
    }
     
  }

  return (
    <form className=" md:w-4/4    py-2 flex justify-center items-center">
      <div className="   w-4/4 md:w-2/4    py-2 flex justify-center items-center">

      <input
      ref={input1}
        type="text"
        
        className="w-60 md:w-4/4 border-2 rounded-sm border-blue-600 m-1 px-2 py-2"
        placeholder="Add a Task"
      />
      <button  onClick={additem} className="bg-red-600 m-2 px-4 py-2 font-bold rounded-xl cursor-pointer hover:bg-red-700">
        Save
      </button>

      </div>
       
    </form>
  );
}

export default Addtodo;

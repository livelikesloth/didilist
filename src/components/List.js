import React from "react";
import AddItem from "./AddItem";

const List = () =>{

  return(
  <>
    <div className="list-container">
       <ul>
        <li><a href="/read/1"> 안녕하세요? </a></li>
        <li><a href="/read/2"> 반가워요? </a></li>
        <li><a href="/read/3"> 잘 지냈나요? </a></li> 
       </ul>
    </div>
    <AddItem/>
  </>
  )
}

export default List;
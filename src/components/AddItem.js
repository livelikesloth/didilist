import React from "react";

const AddItem = () =>{

  return(
    <a href="/" className="button_" onClick={event=>{
      event.preventDefault();
    }}>+</a>
  )
}

export default AddItem;
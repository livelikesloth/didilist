import React from "react";

const AddItem = () =>{

  return(
    <a href="/" className="button_ add_button" onClick={event=>{
      event.preventDefault();
    }}>+</a>
  )
}

export default AddItem;
import React, {useState} from "react";

const Days=(props)=>{
  console.log(props)
  const [name, setName] = useState("sloth")
  function changeName(){
    setName(name === "sloth" ? "dubu" : "sloth");
  };
  return(
    <div>
      <h1>State</h1>
      <h2 id="name">{name}({props.age}세)</h2>
      <button onClick={changeName}>Change</button>
    </div>
  )
};
export default Days;
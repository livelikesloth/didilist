import React, {useState} from "react";

const List = () =>{
  let [글제목, 글제목변경] = useState([
    "제목1",
    "제목2",
    "제목3"
  ])
  return(
    <div>
      <div>
        <h3>{글제목[0]}</h3>
        <p>오늘은 뭐할까</p>
        <hr />
        <h3>{글제목[1]}</h3>
        <p>내일은 뭐할까</p>
        <hr />
        <h3>{글제목[2]}</h3>
        <p>글피는 뭐할까</p>
        <hr />
      </div>
    </div>
  )
}

export default List;
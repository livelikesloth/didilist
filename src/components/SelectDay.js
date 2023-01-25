import React, { useState } from "react";
import GameOver01 from "./GameOver01";
const SelectDay = () => {
  const [condition, setCondition] = useState(0)
  let bad = 0;
  const addBad=()=>{
    bad=bad+1;
  }
  const minusBad=()=>{
    bad=bad-1;
  }
  const checkBad=(bad)=>{
    setCondition
  } 

  return (
    <>
      <div className="selectDay_container" >
        <div className="item_list">
          <div className="items_">
            <div className="game_title">아침이다!</div>
            <button className="game_item" onClick={checkBad}>알람을 듣고 일어난다.</button> <br />
            <button className="game_item">알람을 끄고 다시 잔다.</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default SelectDay;

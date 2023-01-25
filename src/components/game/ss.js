import React, { useState } from "react";
import GameOver01 from "./game/GameOver01";
import GameOver02 from "./game/GameOver02";
import S2 from "./game/S2";
const SelectDay = () => {
  const [bad, setBad] = useState(0); //bad를 조작할 수 있게 함
  const [pressed, setPressed]=useState(false);//버튼을 눌렀을때만 기능을 작동하고 싶기 때문에 만든 스테이트
  
  const addBad=()=>{ //bad에 1 추가
    setBad(bad+1);
  };
  const minusBad=()=>{ //bad에 1 감소
    setBad(bad-1)
  }; 

  const checkOver=()=>{ //bad 수치에 따라서 game over 되는 조건을 단다.
    if({bad}>=0){ //bad가 5이상이면 배드엔딩 1
      return(<GameOver01/>)
    }else if({bad}==-1){ //bad가 -4이하이면 배드엔딩2
      return(<GameOver02/>)
    }

  };
  
         
  return (
    <>
      <div className="selectDay_container" >
        <div className="item_list">
          <div className="items_">
            <div className="game_title">아침이다!</div>
            <button className="game_item" onClick={()=>{addBad();}}>알람을 듣고 일어난다.</button> <br />
            <button className="game_item" onClick={()=>{minusBad();}}>알람을 끄고 다시 잔다.</button>
            <br /> {bad} 
          </div>
        </div>
        {checkOver()}
      </div>
    </>
  );
};

export default SelectDay;

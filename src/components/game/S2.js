import React from "react";
import GameOver01 from "./GameOver01";
import GameOver02 from "./GameOver02";

const S2=({bad},{pressed},{addBad},{minusBad},{addPress},{resetPress})=>{
  // resetPress()
  const checkOver1=()=>{ //bad 수치에 따라서 game over 되는 조건을 단다.
    if(pressed>=1){
      if(bad>4){ //bad가 5이상이면 배드엔딩 1
        return(<GameOver01/>)
      }else if(bad<-3){ //bad가 -4이하이면 배드엔딩2
        return(<GameOver02/>)
      }else{
        return(<div>hi</div>)
      }
    }
  };

  return(    
    <div>
      <div className="item_list">
          <div className="items_">
            hello
            <div className="game_title">아침이다!</div>
            <button className="game_item" onClick={()=>{addBad();addPress()}}>알람을 듣고 일어난다.</button> <br />
            <button className="game_item" onClick={minusBad}>알람을 끄고 다시 잔다.</button>
          </div>
          {checkOver1()}
        </div>
    </div>
  )
}
export default S2;
import React, { useState } from "react";
import GameOver01 from "./game/GameOver01";
import GameOver02 from "./game/GameOver02";
import S2 from "./game/S2";
const SelectDay = () => {
 const [scenario,setScenario] =useState('start');
 const changeScenario=(props)=>{
  setScenario(props)
 }
  
         
  return (
    <>
      <div className="selectDay_container" >
        <div className="item_list">
          
            {
              {
                start:
                  <div className="items_"><div className="game_title">침실</div>
                  <div>오전 7:30 손목시계에서 알람이 울린다.</div>
                    <button className="game_item" onClick={()=>{changeScenario("s2")}}>알람을 듣고 일어난다.</button> <br />
                    <button className="game_item" onClick={()=>{changeScenario("s2")}}>알람을 끄고 다시 잔다.</button>
                  </div>,
                s2:
                  <div className="items_"><div className="game_title">주방</div>
                    <button className="game_item" onClick={()=>{changeScenario("s3")}}>개들을 뒷마당으로 보내고 커피를 내린다.</button> <br />
                    <button className="game_item" onClick={()=>{changeScenario("s3")}}>커피를 내린다.</button>
                  </div>,
                s3:
                <div className="items_"><div className="game_title">거실</div>
                  <button className="game_item" onClick={()=>{changeScenario("s4")}}>저녁에 잊은 커밋을 한다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s4")}}>커밋 없이 그냥 작업한다.</button>
                </div>,
                s4:
                <div className="items_"><div className="game_title">거실</div>
                <div>강아지 두부의 예방접종과 건강검진을 위해 동물병원에 가야한다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s5")}}>프로젝트 중이지만 간다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s5")}}>프로젝트를 이어서 한다.</button>
                </div>,
                s5:
                <div className="items_"><div className="game_title">공부방</div>
                <div>와이프가 거실에서 회의중이라 공부방으로 왔다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s6")}}>집중해서 프로젝트를 한다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s6")}}>눈치보지않고 게임한다.</button>
                </div>,
                s6:
                <div className="items_"><div className="game_title">주방</div>
                <div>점심시간이 되었다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s7")}}>요리는 즐겁다 맛있는 점심을 먹고 휴식을 취한다.</button> <br />
                </div>,
                s7:
                <div className="items_"><div className="game_title">공부방</div>
                <div>점심을 먹고 돌아왔다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s8")}}>집중해서 프로젝트를 한다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s8")}}>눈치보지않고 게임한다.</button>
                </div>,
                s8:
                <div className="items_"><div className="game_title">공부방</div>
                <div>기능구현에 성공했다. 때마침 와이프가 방으로 올라왔다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s9")}}>와이프를 불러 자랑한다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s9")}}>와이프에게 자랑하지 않는다.</button>
                </div>,
                s9:
                <div className="items_"><div className="game_title">공부방</div>
                <div>저녁식사로 뭘 먹을지 대화를 한다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s10")}}>파파이스를 선택한다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s10")}}>키키리키-페루비안 치킨을 선택한다.</button>
                </div>,
                s10:
                <div className="items_"><div className="game_title">마트</div>
                <div>장을 보러 나왔다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s11")}}>라거를 고른다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s11")}}>에일을 고른다.</button>
                </div>,
                s11:
                <div className="items_"><div className="game_title">거실</div>
                <div>영화를 보며 저녁식사를 한다 호가든 한병은 조금 모자라는 느낌이 든다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s12")}}>한병 더 가져온다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s12")}}>더 마시지 않는다.</button>
                </div>,
                s12:
                <div className="items_"><div className="game_title">거실</div>
                <div>개들과 소파에 누워 영화를 본다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s13")}}>이럴때가 아닌데!! 프로젝트를 마무리 하러 간다.</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("s13")}}>편하게 영화를 끝까지 보고 마무리하러 간다.</button>
                </div>,
                s13:
                <div className="items_"><div className="game_title">공부방</div>
                <div>마지막으로 실행결과를 녹화해야한다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("s3")}}>여러번 실행해 보았는데 에러가 하나도 발견되지 않았다 꿈만같다!!</button> <br />
                  <button className="game_item" onClick={()=>{changeScenario("goodEnding")}}>몇개의 에러가 발견되었고 수정했다.</button>
                </div>,
                goodEnding:
                  <div className="items_"><div className="game_title">성공!!</div>
                  <div>축하합니다 오늘하루를 기똥차게 보냈습니다!!</div>
                    <button className="game_item" onClick={()=>{changeScenario("start")}}>다시 하기</button> <br />
                  </div>,
                badEnding01:
                  <div className="items_"><div className="game_title">실패</div>
                  <div>제 시간 안에 프로젝트를 끝내지 못했다</div>
                    <button className="game_item" onClick={()=>{changeScenario("start")}}>다시 하기</button> <br />
                  </div>,
                badEnding02:
                <div className="items_"><div className="game_title">실패</div>
                <div>꿈만같은 하루였군요.. 꿈에서 깹니다.</div>
                  <button className="game_item" onClick={()=>{changeScenario("start")}}>꿈에서 깬다.</button> <br />
                </div>,
              }[scenario]
            }
            
            
          
        </div>
      </div>
    </>
  );
};

export default SelectDay;

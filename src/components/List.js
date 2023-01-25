import React, { useState } from "react";
import ItemList from "./ItemList";

const List = (props) => {
  let [item, setItem] = useState(''); //입력중인 글 input태그에서 onChange 사용해 담기
  let [feedItems, setFeedItems] = useState([]); //글 리스트를 담으려고 만듬
  let [isValid, setIsValid] = useState(false); // 게시 가능여부(유효성 검사)
  let post = (e) => { // 유효성 검사 통화하고 실행시 발생하는 함수
    const copyFeedItems = [...feedItems]; //전개 연산자를 통해 feedItems에 담겨 있는 댓글 받아오기
    copyFeedItems.push(item); //기존 댓글 배열이 담겨있는 copyFeedItems에 입력한 item 값을 push
    setFeedItems(copyFeedItems); // 입력한 item이 담겨있을 feedItem 값을 setFeedItem로 변경
    setItem(''); //글창을 빈문자열로 초기화
  };
  const onEnter=(e)=>{
    if(e.key === 'Enter'){ //Enter 누르면 post실행하기
      post();
    }
  }
  return (
    <>
      <div className="list_container" >
        <div className="item_list">
          <input
            type="text"
            className="item_input"
            placeholder="오늘 무엇을 했는지 알려주세요!"
            onChange={(e) => {
              setItem(e.target.value); //입력창 상태가 변할 때 마다 setItem통해 item 값 바꾸기
            }}
            onKeyUp={(e)=>{ // 키를 눌렀다가 떼었을 때 길이가 0을 넘는지 유효성 검사 결과 값 담기
              e.target.value.length>0 ? setIsValid(true):setIsValid(false);
            }}
            onKeyDown={onEnter}
            value={item}
          />
          <button
            className="button_"
            onClick={()=>{post()}} // 클릭하면 위에 선언한 post 함수를 실행해서 feedItems에 담겨 다시 렌더된다.
            disabled={isValid?false:true} // 빈칸이면 게시 불가
          >+</button>
        </div>
        {feedItems.map((itemArr, i) => { // 반복적으로 추가되는걸 하나하나 담을 예정
          return (
              <ItemList //댓글을 담을 컴포넌트
                  userItem={itemArr} //feedItems에 담겨있는 댓글 배열을 담는다.
                  key={i} //순서
              />
          );
        })}

      </div>
    </>
  );
};

export default List;



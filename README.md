# 재밌게도 뭘 할지 적는 게 아니라 뭘 했는지 적는 곳
## 결과
### 기본 모양과 반응형
![image](https://user-images.githubusercontent.com/100043324/214217286-6aa1764e-7681-4b7a-b368-885fc1398336.png)
![image](https://user-images.githubusercontent.com/100043324/214217203-6915dfbc-7fb1-4c9f-8745-e9da485b2b4d.png)
![기본과반응형](https://user-images.githubusercontent.com/100043324/214219226-65d9a913-ceaa-47a3-9763-6104a02d4789.gif)

### 스크롤
![스크롤)](https://user-images.githubusercontent.com/100043324/214219228-56d430fa-b398-423d-9790-d001c683eac4.gif)

## 디자인
FIGMA로 간단하게 디자인 했습니다.

https://www.figma.com/file/AQ9NFkDQ1xlwc2gjGiK1e8/didilist?node-id=0%3A1&t=O63pEtTKLyNaaV1H-1

오래된 미국 애니메이션의 신나지만 정신없는 디자인을 바탕으로 만들었습니다.
심슨가족에 나오는 이치와 스크래치 같은 느낌이지만 조금은 다른 색을 원했습니다.
상상으로만 하던 색감을 찾는데 시간이 꽤나 오래 걸렸지만 결과적으로 만족스럽습니다.
원하는 폰트는 금방 찾을 수 있어서 아주 만족스럽습니다.
그림자 효과 특히 제목에 두번 들어간 그림자는 엄청 촌스러운 느낌을 줘서 좋았습니다.
![image](https://user-images.githubusercontent.com/100043324/214220189-537466ee-1045-4184-8c86-7e3c109ce695.png)

## 기능
댓글다는 기능처럼 새로운 박스를 만들어 위에서부터 쌓이도록 했다.
List.js
```js
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
    if(e.key == 'Enter'){ //Enter 누르면 post실행하기
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

```

ItemList.js
```js
import React from "react";

const ItemList = (props) => {

  return (
      <div className="item_list">
          < div className="items_">{props.userItem}</div>
      </div>
  );
};

export default ItemList;
```


항상 느끼는거지만 이리저리 가지고 노는게 아주 재밌습니다.

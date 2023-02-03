import React, { useState } from 'react';
import ItemList from './ItemList';

const List = () => {
    let [item, setItem] = useState(''); //입력중인 글 input태그에서 onChange 사용해 담기
    let [feedItems, setFeedItems] = useState([]); //글 리스트를 담으려고 만듬
    let [isValid, setIsValid] = useState(false); // 게시 가능여부(유효성 검사)
    //isEmpty라는 함수를 만들어 입력창의 값이 비어있으면 유효성 탈락
    const isEmpty = e => {
        if (e.target.value === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };
    let post = e => {
        if (isValid === true) {
            // 유효성 검사 통화하고 실행시 발생하는 함수
            const copyFeedItems = [...feedItems]; //전개 연산자를 통해 feedItems에 담겨 있는 댓글 받아오기
            copyFeedItems.push(item); //기존 댓글 배열이 담겨있는 copyFeedItems에 입력한 item 값을 push
            setFeedItems(copyFeedItems); // 입력한 item이 담겨있을 feedItem 값을 setFeedItem로 변경
            setItem(''); //글창을 빈문자열로 초기화
            setIsValid(false); //유효성 초기화
        }
    };
    // 이벤트를 처리하는 함수에 prefix 'on'을 붙이는건 조금 어색해보여요. 내장함수랑 비슷하면 헷갈릴 수 있으니.
    // postOnEnter라는 이름은 어떨까요? onKeyDownEnter 라고 짓는 게 일반적이기는 한데, 호불호가 있어요. 이름 짓는건 자유.
    // --수정완--
    // 키 눌렀을때 enter인지 확인하고 입력창이 빈칸이 아닌지 확인한뒤 맞으면  post실행하기
    const postOnEnter = e => {
        if (isValid === true && e.key === 'Enter') {
            post();
        }
    };

    return (
        <>
            <div className="list_container">
                <div className="item_list">
                    <input
                        type="text"
                        className="item_input"
                        placeholder="오늘 무엇을 했는지 알려주세요!"
                        onChange={e => {
                            setItem(e.target.value); //입력창 상태가 변할 때 마다 setItem통해 item 값 바꾸기
                        }}
                        // 키를 눌렀다가 떼었을 때 길이가 0을 넘는지 유효성 검사 결과 값 담기
                        // 삼항연산자를 많이 쓰는건 좋지 않아요. 함수를 만드는게 좋아요.
                        // 수정완
                        onKeyUp={isEmpty}
                        onKeyDown={e => {
                            postOnEnter(e);
                        }}
                        value={item}
                    />
                    <button
                        className="button_"
                        onClick={e => {
                            post(e);
                        }} // 클릭하면 위에 선언한 post 함수를 실행해서 feedItems에 담겨 다시 렌더된다.
                        // 내용을 한 번 추가하면, 두 번째 부터는 빈 내용이 추가돼요. 상태관리에 대해 다시 고민해보세요.
                        // --수정완-- 엔터키를 사용하면 빈칸일때도 수정이 되는오류도 있었는데 함께 수정했습니다.
                    >
                        +
                    </button>
                </div>
                {feedItems.map((itemArr, i) => (
                    // 반복적으로 추가되는걸 하나하나 담을 예정
                    // 소괄호를 이용해서 return이 사라졌습니다. // 화살표 함수는 괄호로 감싸진 부분이 return이 된다! 감사합니다.
                    <ItemList //댓글을 담을 컴포넌트
                        userItem={itemArr} //feedItems에 담겨있는 댓글 배열을 담는다.
                        key={i} //순서
                    />
                ))}
            </div>
        </>
    );
};

export default List;

import React from 'react';

/*
클릭이 가능하다고 표시하고 싶은건 알겠어요.
그럼 span tag 또는 div 태그에서 mouse cursor를 변경하면 될거 같아요.
용도에 맞는 코드를 정확히 사용하는게 좋아요. 이런 코드는 문제가 있어요.
--수정완--
*/
const AddItem = () => {
    return (
        <span
            href="/"
            className="button_"
            onClick={event => {
                event.preventDefault();
            }}
        >
            +
        </span>
    );
};

export default AddItem;

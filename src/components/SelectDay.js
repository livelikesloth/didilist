import React, { useState } from 'react';

const SelectDay = () => {
    const [scenario, setScenario] = useState('start');
    const changeScenario = props => {
        setScenario(props); // ?
    };
    const [bad, setBad] = useState(0);

    // 스코어를 표현하는 변수가 왜 e...?
    const addBad = e => {
        setBad(bad + e);
    };
    const minusBad = e => {
        setBad(bad - e);
    };
    const resetBad = () => {
        setBad(bad === 0);
    };
    const checkBad = () => {
        if (bad >= 3) {
            changeScenario('badEnding01');
        } else if (bad <= -2) {
            changeScenario('badEnding02');
        }
    };

    // 개발자가 만든 코드보다는 퍼블리셔가 만든 코드 같아요.
    // items_ 코드를 복사 / 붙여넣기 하기보다는 텍스트를 loop로 제어해보세요.

    return (
        <div className="game_item_list">
            {
                {
                    start: (
                        <div className="items_">
                            <div className="game_title">침실</div>
                            <div className="intro_">오전 7:30, 손목시계에서 알람이 울린다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    // arrow function이 필요하지 않아요.
                                    changeScenario('s2');
                                }}
                            >
                                알람을 듣고 일어난다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s1_1');
                                }}
                            >
                                알람을 끄고 다시 잔다.
                            </button>
                        </div>
                    ),
                    s1_1: (
                        <div className="items_">
                            <div className="game_title">침실</div>
                            <div className="intro_">개들이 오줌마렵다고 낑낑대서 얼마 안가 잠에서 깼다 </div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s2');
                                    checkBad();
                                }}
                            >
                                화장실을 사용하고 주방으로 향한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s2');
                                    checkBad();
                                }}
                            >
                                졸린 눈을 비비며 주방으로 향한다.
                            </button>
                        </div>
                    ),
                    s2: (
                        <div className="items_">
                            <div className="game_title">주방</div>
                            <div className="intro_">아침에 일어나면 커피를 마셔야 한다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s3');
                                    checkBad();
                                }}
                            >
                                개들을 뒷마당으로 보내고 커피를 내린다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s2_1');
                                    addBad(1);
                                }}
                            >
                                커피를 내린다.
                            </button>
                        </div>
                    ),
                    s2_1: (
                        <div className="items_">
                            <div className="game_title">주방</div>
                            <div className="intro_">개들이 소파옆에 오줌을 쌌다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s3');
                                    addBad(1);
                                    checkBad();
                                }}
                            >
                                오줌을 대충 닦고 거실로 향한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s3');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                오줌을 깨끗하게 닦고 거실로 향한다.
                            </button>
                        </div>
                    ),
                    s3: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">저녁에 못한 커밋이 생각났다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s4');
                                    checkBad();
                                }}
                            >
                                저녁에 잊은 커밋을 한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s3_1');
                                }}
                            >
                                어짜피 작업하는거 커밋 없이 그냥 작업한다.
                            </button>
                        </div>
                    ),
                    s3_1: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">
                                외계인의 습격으로부터 지구를 지키러 나가야 해서 결국 커밋을 하지 못했다.
                            </div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('badEnding02');
                                    resetBad();
                                }}
                            >
                                외계인이라니 꿈만같다!
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('badEnding01');
                                    resetBad();
                                }}
                            >
                                어떡하지?
                            </button>
                        </div>
                    ),
                    s4: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">강아지 두부의 예방접종과 건강검진을 위해 동물병원에 가야한다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s4_1');
                                    addBad(1);
                                }}
                            >
                                프로젝트 중이지만 간다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s4_2');
                                    addBad(1);
                                }}
                            >
                                프로젝트를 이어서 한다.
                            </button>
                        </div>
                    ),
                    s4_1: (
                        <div className="items_">
                            <div className="game_title">동물병원</div>
                            <div className="intro_">
                                두부는 이 동물병원에 기존 진료기록이 없어서 오늘은 백신을 맞을 수 없다고 한다.
                            </div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s5');
                                    checkBad();
                                }}
                            >
                                고속도로를 타고 집으로 돌아간다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s5');
                                    checkBad();
                                }}
                            >
                                국도를 타고 집으로 돌아간다.
                            </button>
                        </div>
                    ),
                    s4_2: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">체크를 언젠가는 해야한다는 생각이 가시질 않아 신경쓰인다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s5');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                다음번에 하면 된다고 생각한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s5');
                                    addBad(1);
                                    checkBad();
                                }}
                            >
                                계속 자책한다.
                            </button>
                        </div>
                    ),
                    s5: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">와이프가 거실에서 회의중이라 공부방으로 왔다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s6');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                집중해서 프로젝트를 한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s6');
                                    addBad(1);
                                    checkBad();
                                }}
                            >
                                눈치보지않고 게임한다.
                            </button>
                        </div>
                    ),
                    s6: (
                        <div className="items_">
                            <div className="game_title">주방</div>
                            <div className="intro_">점심시간이 되었다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s7');
                                }}
                            >
                                요리는 즐겁다! 맛있는 점심을 먹고 휴식을 취한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s7');
                                    minusBad(1);
                                }}
                            >
                                요리는 즐겁다! 맛있는 점심을 먹는다.
                            </button>
                        </div>
                    ),
                    s7: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">점심을 먹고 돌아왔다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s8');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                집중해서 프로젝트를 한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s8');
                                    addBad(1);
                                    checkBad();
                                }}
                            >
                                눈치보지않고 게임한다.
                            </button>
                        </div>
                    ),
                    s8: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">기능구현에 성공했다. 때마침 와이프가 방으로 올라왔다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s8_1');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                와이프를 불러 자랑한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s9');
                                    checkBad();
                                }}
                            >
                                와이프에게 자랑하지 않는다.
                            </button>
                        </div>
                    ),
                    s8_1: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">시연중에 에러를 발견해 수정할 수 있었다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s9');
                                    checkBad();
                                }}
                            >
                                배가 고프다
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s9');
                                    checkBad();
                                }}
                            >
                                목이 마르다.
                            </button>
                        </div>
                    ),
                    s9: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">저녁식사로 뭘 먹을지 대화를 한다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s10');
                                }}
                            >
                                파파이스를 선택한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s9_1');
                                }}
                            >
                                키키리키-페루비안 치킨을 선택한다.
                            </button>
                        </div>
                    ),
                    s9_1: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">와이프가 맥주 마시고 싶다면서 그냥 파파이스를 먹자고 한다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s10');
                                }}
                            >
                                맥주에는 닭튀김이지!
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s10');
                                }}
                            >
                                치맥이 최고!
                            </button>
                        </div>
                    ),
                    s10: (
                        <div className="items_">
                            <div className="game_title">마트</div>
                            <div className="intro_">장을 보러 나왔다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s10_1');
                                    minusBad(10);
                                }}
                            >
                                라거를 고른다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s10_2');
                                }}
                            >
                                에일을 고른다.
                            </button>
                        </div>
                    ),
                    s10_1: (
                        <div className="items_">
                            <div className="game_title">마트</div>
                            <div className="intro_">미국에서 카스를 찾다니!!</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s11');
                                    minusBad(10);
                                    checkBad();
                                }}
                            >
                                카스를 담는다. 꿈만 같다!
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s10_2');
                                    checkBad();
                                }}
                            >
                                의심을 하며 에일을 고른다.
                            </button>
                        </div>
                    ),
                    s10_2: (
                        <div className="items_">
                            <div className="game_title">마트</div>
                            <div className="intro_">오래간만에 호가든을 마시기로 한다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s11');
                                    checkBad();
                                }}
                            >
                                미국 맥주인 블루문과 비슷하다고 와이프에게 TMI를 선사한다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s11');
                                    checkBad();
                                }}
                            >
                                $2 저렴한 블루문을 살걸 후회한다.
                            </button>
                        </div>
                    ),
                    s11: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">
                                영화를 보며 저녁식사를 한다 호가든 한병은 조금 모자라는 느낌이 든다.
                            </div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s11_1');
                                    addBad(2);
                                    checkBad();
                                }}
                            >
                                한병 더 가져온다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s12');
                                    checkBad();
                                }}
                            >
                                더 마시지 않는다.
                            </button>
                        </div>
                    ),
                    s11_1: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">호가든 한병 더 마신다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s12');
                                    checkBad();
                                }}
                            >
                                이제 그만 마신다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s11_2');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                한병 더 가져온다
                            </button>
                        </div>
                    ),
                    s11_2: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">호가든 한병 더 마신다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s11_1');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                한병 더 가져온다
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s12');
                                    checkBad();
                                }}
                            >
                                이제 그만 마신다.
                            </button>
                        </div>
                    ),
                    s12: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">개들과 소파에 누워 영화를 본다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s12_1');
                                    addBad(1);
                                    checkBad();
                                }}
                            >
                                이럴때가 아닌데!! 프로젝트를 마무리 하러 간다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s12_2');
                                    minusBad(1);
                                    checkBad();
                                }}
                            >
                                편하게 영화를 끝까지 보고 마무리하러 간다.
                            </button>
                        </div>
                    ),
                    s12_1: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">술기운에 집중이 되지 않았다. </div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s13');
                                    checkBad();
                                }}
                            >
                                시간낭비를 한 것 같다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('badEnding02');
                                    checkBad();
                                }}
                            >
                                10분만 눈을 붙인다.
                            </button>
                        </div>
                    ),
                    s12_2: (
                        <div className="items_">
                            <div className="game_title">거실</div>
                            <div className="intro_">좋은 휴식을 취한 것 같다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s13');
                                    checkBad();
                                }}
                            >
                                기지개를 피며 돌아간다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('s13');
                                    checkBad();
                                }}
                            >
                                물을 한잔 마시고 돌아간다.
                            </button>
                        </div>
                    ),
                    s13: (
                        <div className="items_">
                            <div className="game_title">공부방</div>
                            <div className="intro_">마지막으로 실행결과를 녹화해야한다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('badEnding02');
                                }}
                            >
                                여러번 실행해 보았는데 에러가 하나도 발견되지 않았다 꿈만같다!!
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('goodEnding');
                                }}
                            >
                                몇개의 에러가 발견되었고 수정했다.
                            </button>
                        </div>
                    ),
                    goodEnding: (
                        <div className="items_">
                            <div className="game_title">성공!!</div>
                            <div className="intro_">축하합니다 오늘하루를 기똥차게 보냈습니다!!</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('start');
                                    resetBad();
                                }}
                            >
                                다시 하기
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('start');
                                    resetBad();
                                }}
                            >
                                한번 더 하기
                            </button>
                        </div>
                    ),
                    badEnding01: (
                        <div className="items_">
                            <div className="game_title">실패</div>
                            <div className="intro_">제 시간 안에 프로젝트를 끝내지 못했다</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('start');
                                    resetBad();
                                }}
                            >
                                다시 하기
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('start');
                                    resetBad();
                                }}
                            >
                                열받는데 한번 더 하기
                            </button>
                        </div>
                    ),
                    badEnding02: (
                        <div className="items_">
                            <div className="game_title">실패</div>
                            <div className="intro_">꿈만같은 하루였군요.. 꿈에서 깹니다.</div>
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('start');
                                    resetBad();
                                }}
                            >
                                꿈에서 깬다.
                            </button>{' '}
                            <br />
                            <button
                                className="game_item"
                                onClick={() => {
                                    changeScenario('start');
                                    resetBad();
                                }}
                            >
                                {' '}
                                조금 더 잔다.
                            </button>
                        </div>
                    ),
                }[scenario]
            }
        </div>
    );
};

export default SelectDay;

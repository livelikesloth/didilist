import React, { useState } from 'react';

const SelectDay2 = s => {
    const scenarioData = {
        start: {
            id: 1,
            title: '아침이다',
            intro: '오후이다',
            button1: '일어난다',
            button2: '더 잔다',
            score: 1,
            btn1Fnc: function changeScenario() {
                setScenario(scenarioData.s1);
            },
            btn2Fnc: function changeScenario() {
                setScenario(scenarioData.s1);
            },
        },
        s1: {
            id: 2,
            title: '잘잤다',
            intro: '커피마시고싶다',
            button1: '마신다.',
            button2: '오줌싼다.',
            btn1Fnc: function changeScenario() {
                setScenario(scenarioData.s2);
                addBad(1);
                console.log(bad);
            },
            btn2Fnc: function changeScenario() {
                setScenario(scenarioData.s2);
            },
        },
        s2: {
            id: 2,
            title: '잘잤다',
            intro: '커피마시고싶다',
            button1: '마신다.',
            button2: '오줌싼다.',
            btn1Fnc: function changeScenario() {
                setScenario(scenarioData.s2);
            },
            btn2Fnc: function changeScenario() {
                setScenario(scenarioData.s2);
            },
        },
    };
    const [scenario, setScenario] = useState(scenarioData.start);
    const [bad, setBad] = useState(0);
    const addBad = s => {
        setBad(bad + s);
    };
    const minusBad = score => {
        setBad(bad - score);
    };
    // const resetBad = () => {
    //     setBad(bad === 0);
    // };
    // const checkBad = () => {
    //     if (bad >= 3) {
    //         changeScenario('badEnding01');
    //     } else if (bad <= -2) {
    //         changeScenario('badEnding02');
    //     }
    // };

    return (
        <div className="game_item_list">
            <div>
                <div>{scenario.title}</div>
                <div>{scenario.intro}</div>
                <button
                    onClick={() => {
                        scenario.btn1Fnc();
                        addBad(scenarioData.score);
                        console.log(bad);
                    }}
                >
                    {scenario.button1}
                </button>
                <button onClick={scenario.btn2Fnc}>{scenario.button2}</button>
            </div>
        </div>
    );
};

export default SelectDay2;

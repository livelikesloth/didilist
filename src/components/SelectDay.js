import React, { useState } from 'react';
import ScenarioData from '../static/data/ScenarioData';

const SelectDay = () => {
    //scenario의 기본값은 ScenarioData 0번째 배열의 scene을 키값으로 둔 객체
    const [scenario, setScenario] = useState(ScenarioData[0].scene);
    const [score, setScore] = useState(0);
    const changeScenario1 = () => {
        // 버튼1번 함수
        // scenario의 값을 바꾸는데 ScenarioData의 배열번호는 ScenarioData[n].scene 객체 안의 button1 배열의 1번째 값으로 설정하고 그 배열의scene을 키값으로 둔 객체
        setScenario(ScenarioData[scenario.button1[1]].scene);
    };
    const changeScenario2 = () => {
        setScenario(ScenarioData[scenario.button2[1]].scene);
    };
    const changeScore1 = () => {
        //점수 바꾸는 함수1
        // 기존의 score값 + ScenarioData배열 번호는 현재 scenario의 button1의 값
        setScore(score + scenario.button1[2]);
    };
    const changeScore2 = () => {
        //점수 바꾸는 함수1
        // 기존의 score값 + ScenarioData배열 번호는 현재 scenario의 button1의 값
        setScore(score + scenario.button2[2]);
    };
    const resetScore = () => {
        setScore(score === 0);
    };
    const nextScenario1 = () => {
        changeScore1();
        changeScenario1();
    };
    const nextScenario2 = () => {
        changeScore2();
        changeScenario2();
    };
    const checkScore = () => {
        if (score >= 4) {
            setScenario(ScenarioData[27].scene);
            resetScore();
        } else if (score <= -3) {
            setScenario(ScenarioData[28].scene);
            resetScore();
        }
    };

    return (
        <div className="game_item_list">
            <div className="items_">
                <div className="game_title">{scenario.title}</div>
                <div className="intro_">{scenario.intro}</div>
                <button
                    className="game_item"
                    onClick={() => {
                        nextScenario1();
                        checkScore();
                    }}
                >
                    {scenario.button1[0]}
                </button>
                <button
                    className="game_item"
                    onClick={() => {
                        nextScenario2();
                        checkScore();
                    }}
                >
                    {scenario.button2[0]}
                </button>
            </div>
        </div>
    );
};

export default SelectDay;

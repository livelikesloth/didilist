import React, { useState } from 'react';
import ScenarioData from '../static/data/ScenarioData';

const SelectDay2 = () => {
    const [scenario, setScenario] = useState(ScenarioData[0].scene);
    const changeScenario1 = () => {
        setScenario(ScenarioData[scenario.button1[1]].scene);
    };
    const changeScenario2 = () => {
        setScenario(ScenarioData[scenario.button2[1]].scene);
    };
    const [score, setScore] = useState(0);
    const changeScore = () => {
        setScore(score + ScenarioData[scenario.button1[2]].scene);
    };
    // const addBad = s => {
    //     setBad(bad + s);
    // };
    // const minusBad = score => {
    //     setBad(bad - score);
    // };
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
                <button onClick={changeScenario1}>{scenario.button1[0]}</button>
                <button onClick={changeScenario2}>{scenario.button2[0]}</button>
            </div>
        </div>
    );
};

export default SelectDay2;

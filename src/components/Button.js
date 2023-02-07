import React, { useState } from 'react';

const Button = ({ scenario, nextScenario1, checkScore, nextScenario2 }) => {
    return (
        <>
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
        </>
    );
};

export default Button;

const ScenarioData = [
    {
        id: 0,
        scene: {
            title: '아침이다',
            intro: '오후이다',
            button1: ['일어난다', 1, 0],
            button2: ['더 잔다', 1, 0],
        },
    },
    {
        id: 1,
        scene: {
            title: '잘잤다',
            intro: '커피마시고싶다',
            button1: ['마신다.', 2, 1],
            button2: ['안마신다.', 2, -1],
        },
    },
    {
        id: 2,
        scene: {
            title: '잘잤다2',
            intro: '커피마시고싶다2',
            button1: ['마신다2', 2],
            button2: ['안마신다2', -2],
        },
    },
];

export default ScenarioData;

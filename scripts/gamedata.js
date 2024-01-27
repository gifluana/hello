const gameData = [
    // Stage 1 - Index 0
    {
        question: `▮▮▮▮▮▮! i need your help. can you type our secret code?`,
        answers: {
            "know": {
                response: `what? how you don't know, it's visible somewhere in this page, try to find it.`,
                nextStage: 0
            },
            "what": {
                response: `the code... you forgot it? it's visible somewhere in this page, try to find it.`,
                nextStage: 0
            },
            "code": {
                response: `yes, the code... it's visible somewhere in this page, try to find it. you always forget it.`,
                nextStage: 0
            },
            "hello": {
                response: `alright, it's really you.`,
                nextStage: 1
            }
        },
        defaultAnswer: `... is not that, i'm starting to think you're not ▮▮▮▮▮▮.`,
        acceptAnyInput: false,
        title: `hello`
    },
    // Stage 2 - Index 1
    {
        question: `man... everything is coming down, I don't know what to do, I'm so scared...`,
        answers: {
            "happened": {
                response: `it's... it's it again, it's coming back, it's coming back for me...`,
                nextStage: 2
            },
            "happen": {
                response: `it's... it's it again, it's coming back, it's coming back for me...`,
                nextStage: 2
            },
            "happening": {
                response: `it's... it's it again, it's coming back, it's coming back for me...`,
                nextStage: 2
            },
            "down": {
                response: `our facility is going down, it's coming back, it's coming back for me...`,
                nextStage: 2
            }
        },
        defaultAnswer: `...`,
        acceptAnyInput: true,
        nextStage: 2,
        title: `[start connection]`
    },
    // Stage 3 - Index 2
];

export default gameData;
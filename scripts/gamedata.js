const gameData = [
    // Stage 1 - Index 0
    {
        question: `▮▮▮▮▮▮! i need your help, can you type our secret code?`,
        answers: {
            "know": {
                response: `what? how you don't know, it's visible somewhere in this page, try to find it.`,
                nextStage: 0
            },
            "what": {
                response: `the code... you forget it? it's visible somewhere in this page, try to find it.`,
                nextStage: 0
            },
            "hello": {
                response: `alright, it's really you.`,
                nextStage: 1
            }
        },
        defaultAnswer: `... is not that, i'm starting to think you're not ▮▮▮▮▮▮.`,
        acceptAnyInput: false
    },
    // Stage 2 - Index 1
    {
        question: `man... everything is coming down, I don't know what to do, I'm so scared...`,
        answers: {
            "happened": {
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
        nextStage: 2
    },
    // Stage 3 - Index 2
    {
        question: `What's your favorite color?`,
        answers: {
            "red": {
                response: `Yes! Red is the right answer!`,
                nextStage: 4
            },
            "your": {
                response: `Oh, you're right, I don't know how to spell right yet.`,
                nextStage: 3
            }
        },
        defaultAnswer: `Nope, that's not it.`,
        acceptAnyInput: false
    },
    //Stage 3/Variable - Index 3
    {
        question: `What's my favorite color?`,
        answers: {
            "red": {
                response: `Yes! Red is the right answer!`,
                nextStage: 4
            }
        },
        defaultAnswer: `Nope, that's not it.`,
        acceptAnyInput: false
    },
    //Stage 4 - Index 4
    {
        question: `someones favorite color is red`,
        answers: {
            "who": {
                response: `my creator, he created me, and he loves red.`,
                nextStage: 5
            },
            "someone": {
                response: `Yeah, someone, my creator, he created me, and he loves red.`,
                nextStage: 5
            },
        },
        defaultAnswer: `...`,
        acceptAnyInput: true,
        nextStage: 5
    },
    //Stage 5 - Index 5
    {
        question: `What's your favorite food?`,
        answers: {
            "pizza": {
                response: `Yes! Pizza is the right answer!`,
                nextStage: 6
            },
            "your": {
                response: `Oh, you're right, I don't know how to spell right yet.`,
                nextStage: 5
            },
        },
        defaultAnswer: `Nope, that's not it.`,
        acceptAnyInput: false
    },
];

export default gameData;
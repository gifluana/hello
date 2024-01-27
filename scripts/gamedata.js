const gameData = [
    // Stage 1 - Index 0
    {
        question: 'Welcome! To start, please enter "start".',
        answers: {
            'start': {
                response: 'Great! Let\'s get started.',
                nextStage: 1
            },
        },
        defaultAnswer: 'I didn\'t understand that. Let\'s try again.',
        acceptAnyInput: false
    },
    // Stage 2 - Index 1
    {
        question: 'Here\'s the first question. What\'s your name?',
        answers: {},
        defaultAnswer: 'Nice to meet you!',
        acceptAnyInput: true,
        nextStage: 2
    },
    // Stage 3 - Index 2
    {
        question: "What's your favorite color?",
        answers: {
            "red": {
                response: "Yes! Red is the right answer!",
                nextStage: 4
            },
            "your": {
                response: "Oh, you're right, I don't know how to spell right yet.",
                nextStage: 3
            },
        },
        defaultAnswer: "Nope, that's not it.",
        acceptAnyInput: false
    },
    //Stage 3/Variable - Index 3
    {
        question: "What's my favorite color?",
        answers: {
            "red": {
                response: "Yes! Red is the right answer!",
                nextStage: 4
            }
        },
        defaultAnswer: "Nope, that's not it.",
        acceptAnyInput: false
    },
    //Stage 4 - Index 4
    {
        question: "someones favorite color is red",
        answers: {
            "who": {
                response: "my creator, he created me, and he loves red.",
                nextStage: 5
            },
            "someone": {
                response: "Yeah, someone, my creator, he created me, and he loves red.",
                nextStage: 5
            },
        },
        defaultAnswer: "...",
        acceptAnyInput: true,
        nextStage: 5
    },
    //Stage 5 - Index 5
    {
        question: "What's your favorite food?",
        answers: {
            "pizza": {
                response: "Yes! Pizza is the right answer!",
                nextStage: 6
            },
            "your": {
                response: "Oh, you're right, I don't know how to spell right yet.",
                nextStage: 5
            },
        },
        defaultAnswer: "Nope, that's not it.",
        acceptAnyInput: false
    },
];

export default gameData;
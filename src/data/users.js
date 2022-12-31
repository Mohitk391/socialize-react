import { v4 as uuid } from "uuid"; 

export const users = [
    {
        id: 1,
        name: "Mohit Patel",
        mobile: 9876543210,
        email: "mohitpatel@gmail.com",
        password: "mohit123",
        profilePictureSource: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Hello, Mohit Patel here!!! Nice to meet you.",
        connections: [
            {
                id: 6,
                name: "Meeta Singh Chauhan",
            },
            {
                id: 5,
                name: "K Siddharth",
            },
            {
                id: 2,
                name: "Rohit Sharma",
            }
        ],
        posts: [
            {
                id: uuid(),
                userName: "Mohit Patel",
                userAvatar: "https://www.w3schools.com/howto/img_avatar.png",
                text: "This is a new day, a new beginning. Feeling excited!!!",
                imageSource: "data:image/jpeg;base64,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",
                likes: 12,
                comments: [],
                date_created: new Date(2022, 11, 12, 10, 25),
                bookmarked: false,
            },
            {
                id: uuid(),
                userName: "Mohit Patel",
                userAvatar: "https://www.w3schools.com/howto/img_avatar.png",
                text: "We have to be better tommorow than we are today!!!",
                imageSource: null,
                likes: 16,
                comments: [],
                date_created: new Date(2022, 11, 14, 5, 5),
                bookmarked: true,
            },
            {
                id: uuid(),
                userName: "Mohit Patel",
                userAvatar: "https://www.w3schools.com/howto/img_avatar.png",
                text: "This is my first post!!!",
                imageSource: null,
                likes: 8,
                comments: [],
                date_created: new Date(2022, 11, 14, 6, 25),
                bookmarked: false,
            },
        ],
    },
    {
        id: 2,
        name: "Rohit Sharma",
        mobile: 9546891950,
        email: "rohitsharma@gmail.com",
        password: "rohit123",
        profilePictureSource: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Hello, Rohit Sharma here!!! Nice to meet you | This is my second account",
        connections: [
            {
                id: 6,
                name: "Meeta Singh Chauhan",
            },
            {
                id: 5,
                name: "K Siddharth",
            },
            {
                id: 1,
                name: "Mohit Patel",
            },
            {
                id: 3,
                name: "Devashish Verma",
            }
        ],
        posts: [
            {
                id: uuid(),
                userName: "Rohit Sharma",
                userAvatar: "https://www.w3schools.com/howto/img_avatar.png",
                text: "Be proud, be loyal!!!",
                imageSource: null,
                likes: 7,
                comments: [],
                date_created: new Date(2022, 10, 27, 22, 35),
                bookmarked: true,
            },
        ],
    },
    {
        id: 3,
        name: "Devashish Verma",
        mobile: 8887566620,
        email: "devashishverma@gmail.com",
        password: "deva123",
        profilePictureSource: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Hello, Devashish here!!! Nice to meet you.",
        connections: [
            {
                id: 2,
                name: "Rohit Sharma",
            }
        ],
        posts: [],
    },
    {
        id: 4,
        name: "Pallavi Patle",
        mobile: 7354698500,
        email: "patlepallavi@gmail.com",
        password: "pallavip123",
        profilePictureSource: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Hello, Pallavi here!!! Nice to meet you.",
        connections: [],
        posts: [],
    },
    {
        id: 5,
        name: "K Siddharth",
        mobile: 8106874532,
        email: "ksid@gmail.com",
        password: "ksid123",
        profilePictureSource: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Hello, Siddharth here!!! Nice to meet you.",
        connections: [
            {
                id: 0,
                name: "Mohit Patel 123",
            },
            {
                id: 1,
                name: "Mohit Patel",
            },
            {
                id: 2,
                name: "Rohit Sharma",
            }
        ],
        posts: [],
    },
    {
        id: 6,
        name: "Meeta Singh Chauhan",
        mobile: 7000656989,
        email: "meetasinghchauhan@gmail.com",
        password: "meetasc123",
        profilePictureSource: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "Hello, Meeta here!!! Nice to meet you.",
        connections: [
            {
                id: 0,
                name: "Mohit Patel 123",
            },
            {
                id: 1,
                name: "Mohit Patel",
            },
            {
                id: 2,
                name: "Rohit Sharma",
            }
        ],
        posts: [],
    },
]
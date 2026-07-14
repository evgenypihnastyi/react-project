let rerenderEntireTree = () => {
    console.log("State changed");
}
let state = {
    ProfilePage: {
        posts: [
            { id: 1, message: "Hi, how are yuo?", likesCount: 12 },
            { id: 2, message: "It\'s my first post", likesCount: 11 },
            { id: 3, message: "Blabla", likesCount: 11 },
            { id: 4, message: "Dada", likesCount: 11 },
        ],
        newPostText: "it-kamasutra.com"

    },

    DialogsPage: {
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrew" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Viktor" },
            { id: 6, name: "Valera" }
        ],
        messages: [
            { id: 1, message: "Hi", likesCount: 12 },
            { id: 2, message: "How is your it-kamasutra?", likesCount: 11 },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" },
            { id: 6, message: "Yo", likesCount: 20 }
        ]
    },

    sidebar: {}
}

window.state = state;

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.ProfilePage.newPostText,
        likesCount: 0
    };

    state.ProfilePage.posts.push(newPost);
    state.ProfilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
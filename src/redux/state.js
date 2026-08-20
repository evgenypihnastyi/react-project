let store = {
    _state: {
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

            ]
        },

        sidebar: {}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State changed");
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.ProfilePage.newPostText,
            likesCount: 0
        };
        this._state.ProfilePage.posts.push(newPost);
        this._state.ProfilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;


window.store = store;
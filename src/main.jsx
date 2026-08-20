import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/state';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, {addPost, updateNewPostText, subscribe} from './redux/state';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rerenderEntireTree = (state) => {

  root.render(
  <React.StrictMode>

      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>

  </React.StrictMode>
);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


export let rerenderEntireTree = (state) => {

  root.render(
  <React.StrictMode>

      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>

  </React.StrictMode>
);
}

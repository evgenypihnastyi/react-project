import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';



let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" }
]

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your it-kamasutra?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" }
]

let post = [
  { id: 1, messeage: "Hi, how are yuo?", likesCount: 12 },
  { id: 2, messeage: "It\'s my first post", likesCount: 11 },
  { id: 3, messeage: "Blabla", likesCount: 11 },
  { id: 4, messeage: "Dada", likesCount: 11 },
]



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs}  messages={messages} post={post} />
    </BrowserRouter>
  </React.StrictMode>
);


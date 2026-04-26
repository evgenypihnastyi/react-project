import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = (props) => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path= "/dialogs" component={Dialogs} />
            <Route path= "/profile" component={Profile} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>);
}

export default App;


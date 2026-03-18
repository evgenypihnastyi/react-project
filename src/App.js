import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNDktMjIucG5n.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <div>
            <img src="https://interier-foto.ru/wp-content/uploads/panoramnoe-foto-6390.jpg" />
          </div>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;

import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";  
const Profile = () => {
  return <div className={s.content}>
    <div>
      <div>
        <img src="https://interier-foto.ru/wp-content/uploads/panoramnoe-foto-6390.jpg" />
      </div>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}
export default Profile;
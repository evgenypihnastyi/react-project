import React from "react";
import s from "./Post.module.css";
import avatar from "./../../../../images/avatar.png"
const Post = () => {
  return (
    <div className={s.item}>
      <img src={avatar} />
      post 1
      <div>
        <span>like</span>
        <div />
      </div>  
</div>
  )
}
      export default Post;
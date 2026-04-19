import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea>  </textarea>
        <button>Add post</button>
        <button>Remove</button>

      </div>
      <div className={s.posts}>
        <Post messeges="Hi, how are you" />
        <Post messeges="It's my first post" />
      </div>
    </div>
  )


}
export default MyPosts;
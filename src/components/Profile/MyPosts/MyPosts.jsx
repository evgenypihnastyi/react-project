import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  let posts = props.posts

  let posteElements =
    posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (event) => {
    let text = event.target.value;

    props.updateNewPostText(text);
  }


  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <textarea
          onChange={onPostChange} ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {posteElements}
      </div>
    </div>
  )
}

export default MyPosts

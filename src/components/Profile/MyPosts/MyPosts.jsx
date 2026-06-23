import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  let post = props.post

  let posteElement =
    post.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
    }

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div className={s.posts}>
        {posteElement}
      </div>
    </div>
  )
}

export default MyPosts;

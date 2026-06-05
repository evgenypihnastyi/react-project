import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let post = props.post

  let posteElement =
    post.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {posteElement}
      </div>
    </div>
  )
}

export default MyPosts;

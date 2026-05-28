import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let post = [
    { id: 1, messeage: "Hi, how are yuo?", likesCount: 12 },
    { id: 2, messeage: "It\'s my first post", likesCount: 11 },
    { id: 3, messeage: "Blabla", likesCount: 11 },
    { id: 4, messeage: "Dada", likesCount: 11 },

  ]
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

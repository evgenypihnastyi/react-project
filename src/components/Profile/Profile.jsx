import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let post = props.state.post

  return <div>
    <ProfileInfo />
    <MyPosts post={props.state.post} addPost={props.addPost}  /> 
  </div>
}

export default Profile;

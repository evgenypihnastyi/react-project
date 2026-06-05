import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let post = props.post

  return <div>
    <ProfileInfo />
    <MyPosts post={post} />
  </div>
}

export default Profile;

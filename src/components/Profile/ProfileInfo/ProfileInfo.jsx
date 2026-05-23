import s from './../Profile.module.css';

const ProfileInfo = () => {
    return (
     <div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_OlHEe2L-0VtexCxjIV5tc0dLor3wd57Yg&s' />
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
    )
}

export default ProfileInfo;

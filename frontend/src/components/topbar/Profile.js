import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileImage
        link={
          'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
      />
      <ProfileInfo name={'Agnus MacGyver'} email={'agnus@gmail.com'} />
      <ProfileOption>
        <IoIosArrowDown />
      </ProfileOption>
    </div>
  );
};

export const ProfileImage = ({ link }) => {
  return (
    <div class="profile__img">
      <img src={link} alt=""></img>
    </div>
  );
};

export const ProfileInfo = ({ name, email }) => {
  return (
    <div class="profile__info">
      <h5 class="profile__name">{name}</h5>
      <h5 class="profile__email">{email}</h5>
    </div>
  );
};

export const ProfileOption = ({ children }) => {
  return <div class="profile__option">{children}</div>;
};

export default Profile;

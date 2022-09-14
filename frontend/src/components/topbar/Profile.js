import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { UserInfo } from '../utils/Fetch';

const Profile = () => {
  const name = UserInfo('name');
  const email = UserInfo('email');
  const profile_image = UserInfo('profile_image');

  return (
    <div className="profile">
      <ProfileImage link={profile_image} />
      <ProfileInfo name={name} email={email} />
      <ProfileOption>
        <IoIosArrowDown />
      </ProfileOption>
    </div>
  );
};

export const ProfileImage = ({ link }) => {
  return (
    <div className="profile__img">
      <img src={link} alt=""></img>
    </div>
  );
};

export const ProfileInfo = ({ name, email }) => {
  return (
    <div className="profile__info">
      <h5 className="profile__name">{name}</h5>
      <h5 className="profile__email">{email}</h5>
    </div>
  );
};

export const ProfileOption = ({ children }) => {
  return <div className="profile__option">{children}</div>;
};

export default Profile;

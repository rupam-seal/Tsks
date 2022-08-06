import React from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Bottom = () => {
  return (
    <>
      <div className="logout">
        <HiOutlineLogout />
        <span className="logout__txt">Logout</span>
      </div>
      <div className="setting">
        <FiSettings />
      </div>
    </>
  );
};
export default Bottom;

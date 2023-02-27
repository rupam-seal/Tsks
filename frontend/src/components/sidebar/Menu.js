import React from 'react';
import Container from './Container';
import { BsGrid } from 'react-icons/bs';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineCreate } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Container title={'overview'}>
      <MenuList />
    </Container>
  );
};

export const MenuList = () => {
  return (
    <div>
      <MenuItem icon={<BsGrid />} title={'Overview'} />
      <MenuItem icon={<MdOutlineCreate />} title={'Edit'} />
      <MenuItem icon={<FiSearch />} title={'Search'} />
      <MenuItem icon={<VscGitPullRequestCreate />} title={'Create'} />
    </div>
  );
};

export const MenuItem = ({ icon, title }) => {
  const name = title.toLowerCase();
  return (
    <NavLink to={name === 'overview' ? '/' : `/${name}`}>
      <div className="menu">
        {icon}
        <h5 className="menu__text">{title}</h5>
      </div>
    </NavLink>
  );
};

export default Menu;

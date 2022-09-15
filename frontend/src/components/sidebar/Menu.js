import React from 'react';
import Container from './Container';
import { BsGrid } from 'react-icons/bs';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineCreate } from 'react-icons/md';

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
  return (
    <div className="menu">
      {icon}
      <h5 className="menu__text">{title}</h5>
    </div>
  );
};

export default Menu;

import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

/* -------------------------------------------------------------------------- */

const AuthLinks = () => {
  const { pathname } = useLocation();
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="large" color="teal">
      <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} as={Link} to="/" />

      <Menu.Menu position="right">
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />

        <Menu.Item name="login" active={activeItem === 'login'} onClick={handleItemClick} as={Link} to="/login" />
      </Menu.Menu>
    </Menu>
  );
};

export default AuthLinks;

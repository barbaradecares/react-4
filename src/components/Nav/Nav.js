import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = () => {
  const NavBar = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 70px;
    background-color: black;
  `;
  const Img = styled.img`
    max-height: 100%;
  `;
  return (
    <NavBar>
      <Link to={'/'}>
        <Img src={require('./marvel-logo.jpg')} />
      </Link>
    </NavBar>
  );
};

export default Nav;

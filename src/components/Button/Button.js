import React from 'react';
import { withRouter } from 'react-router';
import styled from '@emotion/styled';

const Button = props => {
  const Button = styled.button`
    border: 2px solid #f44336;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    width: 95%;
    margin: 2.5%;
    margin-top: auto;

    color: red;
    &:hover {
      background: #f44336;
      color: white;
    }
  `;

  return <Button onClick={props.onClick}>{props.text}</Button>;
};

export default withRouter(Button);

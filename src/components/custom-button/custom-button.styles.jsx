import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: rgb(19, 18, 18);
    color: rgb(255, 255, 255);
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: Black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: rgb(14, 14, 14);
    color: white;
    border: 1px solid grey;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButttonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.div`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-family: 'Bubblegum Sans', sans-serif;
  border-radius: 6px;
  font-size: 17px;
  font-weight: lighter;
  text-transform: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButttonStyles}
`;

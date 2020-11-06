import React from 'react';
import { ShopPageContainer } from './sign-in-sign-up.styles';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInSignUp = () => (
  <ShopPageContainer>
    <SignIn />
    <SignUp />
  </ShopPageContainer>
);

export default SignInSignUp;

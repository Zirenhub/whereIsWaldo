import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import '../styles/sign-in-out.css';
import SignOut from './SignOut';

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-out-container">
      {user?.displayName ? (
        <SignOut />
      ) : (
        <GoogleButton type="light" onClick={handleGoogleSignIn} />
      )}
    </div>
  );
};

export default SignIn;

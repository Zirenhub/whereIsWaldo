import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import '../styles/sign-in-out.css';

const SignIn = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-out-container">
      <GoogleButton type="light" onClick={handleGoogleSignIn} />
    </div>
  );
};

export default SignIn;

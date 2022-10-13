import { UserAuth } from '../context/AuthContext';

const SignOut = () => {
  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-out-button">
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default SignOut;

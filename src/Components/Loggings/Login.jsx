// src/Components/Login.jsx

import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <SignIn path="/login" />
  );
};

export default Login;
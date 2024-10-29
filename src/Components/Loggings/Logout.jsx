import React from 'react'
import { SignUp } from '@clerk/clerk-react';
const Logout = () => {
  return (
    <SignUp path="/logout" />
  )
}

export default Logout

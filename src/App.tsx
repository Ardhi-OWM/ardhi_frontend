// App.jsx
import { useState, useEffect } from 'react';
import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const { isSignedIn } = useUser();
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard'); // Redirect to Dashboard upon sign-in
    }
  }, [isSignedIn, navigate]);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isSignedIn ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to your app!</h1>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col items-center">
          {/* Wrapper div for additional centering */}
          <div className="w-full flex justify-center">
            {isSignIn ? <SignIn /> : <SignUp />}
          </div>
          <button
            onClick={toggleForm}
            className="mt-4 w-full text-center text-blue-500 underline"
          >
            {isSignIn ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

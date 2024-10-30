// App.jsx
import { useState, useEffect } from 'react';
import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const { isSignedIn } = useUser();
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  useEffect(() => {
    if (isSignedIn) {
      setLoading(true);
      // Show the welcome message for 1 second before navigating
      const timer = setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 1000);

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [isSignedIn, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Welcome to Ardhi App!</h1>
      </div>
    );
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col items-center">
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
    </div>
  );
}


export default App;

// main.jsx
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import Dashboard from './Components/Dashboard';
import ApiConnections from './Components/ApiConnections';
import Converter from './Components/Converter';
import Login from './Components/Loggings/Login';
import Logout from './Components/Loggings/Logout';
import './index.css';
import Layout from './Components/Shared/Layout';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Add your Clerk publishable key to the .env.local file")
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkPubKey}
      afterSignOutUrl="/"
    >
      <Router>
        <Routes>
          {/* Apply Layout for pages with Header and Footer */}
          <Route path="/" element={<Layout><App /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/api-connections" element={<Layout><ApiConnections /></Layout>} />
          <Route path="/converter" element={<Layout><Converter /></Layout>} />

          {/* No Layout for Login and Logout */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
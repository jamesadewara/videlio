import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
        <h1 className="text-2xl font-bold">About Screen</h1>
        <p className="text-gray-600">This is the about screen.</p>
        <Link to="/" className="text-blue-500">Go to Home</Link>
      </div>
    </div>
  );
};

export default About;

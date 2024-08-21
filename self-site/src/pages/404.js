import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </main>
  );
};

export default NotFoundPage;

import React from 'react';
import Layout from '../../components/layout';

const Two: React.FC = () => {
  const blogTitle = 'Google Machine Learning Course Broken Down by Beginner';

  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        {/* Project Title and Blurb */}
        <div className="flex items-center mb-4">
          <h1 className="text-4xl text-center font-silkscreen font-bold">{blogTitle}</h1>
        </div>
        <h1 className="text-2xl font-silkscreen font-bold text-center mb-4">Author: Yanka Sikder</h1>
        <h1 className="text-2xl font-silkscreen font-bold text-center mb-4">July, 2024 - Present (still updating)</h1>
        <p className="text-xl font-anticSlab mb-8">N/A</p>
        <hr></hr>
        <p className="text-xl mt-8 font-anticSlab">Thank you for reading!</p>
        <p className="text-xl font-anticSlab mb-8"></p>
      </div>
    </div>
    </Layout>
  );
};

export default Two;
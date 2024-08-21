import React from 'react';
import Layout from '../../components/layout';
import BingedDemo from '../../videos/Binged_Demo.mp4';
import BingedLogo from '../../images/cafeCapture_logo.png';

const CafeCapture: React.FC = () => {
  const projectTitle = 'Cafe Capture';
  const blurb = 'Discover Cafe Shops to get some coffee or pastires, do your work, or just go to explore!';
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        {/* Project Title and Blurb */}
        <div className="flex items-center mb-8">
          <img src={BingedLogo} alt="Binged Project" className="w-20 h-20 mr-4 rounded-lg" />
          <h1 className="text-6xl font-judson_bold font-bold mb-4">{projectTitle}</h1>
        </div>
        <p className="text-xl mb-8">{blurb}</p>

        {/* Overview Section */}
        <h2 className="text-2xl text-black font-bold mb-2">Overview</h2>
        <p className="mb-4"> A platform for cafe enjoyers to easily discover and plan to go to several of
          the beautiful cafe's that exist in NYC.
        </p>

        {/* Role */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Role</h2>
            <h3 className="text-xl font-semibold"> Fullstack Developer</h3>
          </div>

          {/* Timeline */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <h3 className="text-xl font-semibold">July 2024 - Present</h3>
          </div>

        {/* Ideation */}
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold mb-2">Ideation</h2>
          <h3 className="text-xl font-semibold mb-2">Why {projectTitle}?</h3>
        </div>
        <p className="mb-2">
          As someone who grew up in NYC and attended college here, finding coffee Shops to enjoy have always been difficult.
          Shops like these were either found through TikTok, Google Searches, or Yelp which were all a little out of the way.
          This tackles the issue of having to find recommendations using these heavily data-populated apps and gives
          the information for a specfic destination. This can be used by travellers, buisness owners who want ideas, residents, etc.
          Although this is still in early development, the idea of this project is something I would enjoy having.
        </p>
        
        {/* Demo Section */}
        <div className="mt-4 mb-4">
          <h2 className="text-2xl font-bold">Demo!</h2>
          <h1>Currently Unavailable</h1>
        </div>

        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc ml-6 mb-4">
            <li><span className="black-bold">Explore:</span> Users can filter through location and labels to find cafe's they would like to visit</li>
            <li><span className="black-bold">Cafe's Visited:</span> Since there are no accounts, user's can click the visited button to add to the global display of users who have visited.</li>
          </ul>
        <h3 className="text-xl font-semibold mb-2">Backend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><span className="black-bold"> Stuff </span> stuff </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Frontend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="black-bold">Go</li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default CafeCapture;

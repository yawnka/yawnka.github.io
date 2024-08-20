import React from 'react';
import Layout from '../../components/layout';
import BingedDemo from '../../videos/Binged_Demo.mp4';
import BingedLogo from '../../images/binged_logo.png';

const Binged: React.FC = () => {
  const projectTitle = 'Binged';
  const blurb = 'Binged is a community and platform for readers to get started or find more books to delve into and enjoy.';
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        {/* Project Title and Blurb */}
        <div className="flex items-center mb-8">
          <img src={BingedLogo} alt="Binged Project" className="w-20 h-20 mr-4 rounded-lg" />
          <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
        </div>
        <p className="text-xl mb-8">{blurb}</p>

        {/* Overview Section */}
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="mb-4">An AI utilized book discovery platform for users to swipe through book
           summaries to find the books they want to read. It uses user interactions with the books they like and dislike to recommend books they may enjoy.
           Books can saved to a wishlist shelf when liked. Once the book is read, they can be rated, review them, shared with friends, 
           and commented on. A friends feature was integrated to allow friends to view eachother's profile's be able to communicate with eachother through commenting.
           This project is still in progress with various featured TBD, but the main functionalities are set in place. </p>

        {/* Role */}
        <h2 className="text-2xl font-bold mb-2">Role</h2>
        <p className="mb-4">FullStack Developer</p>

        {/* Timeline */}
        <h2 className="text-2xl font-bold mb-2">Timeline</h2>
        <p className="mb-4">June 2024 - August 2024</p>

        {/* Ideation */}
        <h2 className="text-2xl font-bold mb-2">Ideation</h2>
        <h3 className="text-xl font-semibold mb-2">Why {projectTitle}?</h3>
        <p className="mb-4">As a book enjoyer since childhood, I’ve feel into periods of having zero motivation or interest in any books and struggling to get back into it. I wanted to create a platform like ‘Tinder’ or ‘Hinge’ where people can reignite their passion for reading using this recommendation based website. Other websites such as Goodreads are well done, but they may feel outdated and not as interactive as this website.  </p>
        
        {/* Demo Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Demo (need to redo it with f11 full screen)</h2>
          <video controls className="w-full max-w-3xl mx-auto">
            <source src={BingedDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Backend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Backend feature one</li>
          <li>Backend feature two</li>
          <li>Backend feature three</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Frontend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Frontend feature one</li>
          <li>Frontend feature two</li>
          <li>Frontend feature three</li>
        </ul>

        {/* Flowchart */}
        <h3 className="text-xl font-semibold mb-2">Flowchart:</h3>
        <div className="mb-8">
          {/* Replace with an actual image */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            Flowchart Image Here
          </div>
        </div>

        {/* Demo & View */}
        <h2 className="text-2xl font-bold mb-2">Demo & View!</h2>
        <div className="mb-8">
          {/* Replace with actual images */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            Demo Images Here
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Binged;
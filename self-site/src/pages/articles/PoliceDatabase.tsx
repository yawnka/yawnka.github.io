import React from 'react';
import Layout from '../../components/layout';
import seaScribeDemo from '../../images/seaScribe_demo.png';
import seaScribeTeam from '../../images/seaScribe_team.png';
//XAMPP is a free, open-source software package that provides a local web server environment for testing and developing websites and applications

const PoliceDatabase: React.FC = () => {
  const projectTitle = 'Criminal Database Website';
  const blurb = 'An optimized fullstack website for a police station to store criminal record information and police officer information.';
  const ideation = ''
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        {/* Project Title and Blurb */}
        <div className="flex items-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
        </div>
        <p className="text-xl mb-8">{blurb}</p>

        {/* Overview Section */}
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="mb-4"> This project was created to learn about databases and how to connect code to a phpMyAdmin 
          localhost database server. I utilized XAMPP to host the server to create and use database information on phpmyAdmin. 
          Databases, tables, and information were created using SQL statements as attached in the source. The fullstack website was created for two views:
           a normal viewer and a police officer with more viewer privileges. There is a registration system for the two different views
           which displays different pages and viewership of private and public data based on the user. The code pulls information
           using SQL statements to pull from the database. </p>

        {/* Role */}
        <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Role</h2>
            <h3 className="text-xl font-semibold"> Fullstack Developer</h3>
          </div>
        
          <h2 className="text-2xl font-bold">Team</h2>
        <div className="flex items-center mb-4">
          <ul className="list-disc ml-6 mb-4">
            <li> <span className="black-bold">Raiya Haque </span> - FullStack Developer</li>
            <li><span className="black-bold"> Orion Yang </span> - FullStack Developer </li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <h3 className="text-xl font-semibold">February 2024 - May 2024</h3>
          </div>
        
        {/* Demo Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Demo</h2>
          <video controls className="w-full max-w-3xl mx-auto">
            <source src={seaScribeDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
        <h2 className="text-xl font-semibold mb-2">Regular User </h2>
          <ul className="list-disc ml-6 mb-4">
            <li><span className="black-bold">Registration & Login:</span> User logs in as a viewer or an officer, controlled using sessions and using info stored on the Database table for logins </li>
            <li><span className="black-bold">Home:</span> Displays wishlist books and completed books.</li>
            <li><span className="black-bold">Search:</span> AI Powered Book Recommendation system where user can dislike or like books that appear on feed.</li>
            <li><span className="black-bold">Logout:</span> Initial 5 books from quiz and liked books are stored in this 'shelf' where user can preview the book, remove them, or add them to completed books.</li>
          </ul>

          <ul className="list-disc ml-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Officer User </h2>
            <li><span className="black-bold">Home:</span> Users can rate and review their completed books. They can edit these later as well. </li>
            <li><span className="black-bold">Search:</span> Display an avatar, username, friends, favorite book, currently reading book, and completed books along with their ratings, reviews, and comments.</li>
            <li><span className="black-bold">Profile Logout & Edit:</span> User can logout using the top right button. The edit button under logout allows user to change their avatar, favorite book, and currently reading.</li>
            <li><span className="black-bold">Friends:</span> Can send, receive, and accept friend requests. Friends can comment on each other's ratings.</li>
            <li><span className="black-bold">Profile Visibility:</span> Anyone can see other people's public profiles with all the displayed features, but non-friends cannot comment on another user's completed books.</li>
            <li><span className="black-bold">MongoDB Atlas AWS Database Storage:</span> Allows for users to change and edit their account-related information and shelves which are connected and automatically updated through the DB.</li>
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

      </div>
    </div>
    </Layout>
  );
};

export default PoliceDatabase;
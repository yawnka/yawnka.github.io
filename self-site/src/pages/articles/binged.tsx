import React from 'react';
import Layout from '../../components/layout';
import BingedDemo from '../../videos/Binged_Demo.mp4';
import BingedLogo from '../../images/binged_logo.png';

const Binged: React.FC = () => {
  const projectTitle = 'Binged';
  const blurb = 'Discover, connect, and dive into your next favorite book – powered by community and personalized recommendations using Binged.';
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
        <p className="mb-4">A dynamic book discovery platform powered by AI that lets users swipe through book summaries to 
          uncover their next great read. The platform learns from user preferences, using likes and dislikes to curate a personalized 
          explore feed with book recommendations. Books can be saved to a wishlist and mark as complete once finished reading.
	        The user can review, rate, and share with friends. The app has integrated social features to allow users to connect, 
	        view other user profiles, and comment on their activities. Although still in 
          development, the core functionalities are complete, with more exciting features on the way! </p>

        {/* Role */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Role</h2>
            <h3 className="text-xl font-semibold"> Fullstack Developer</h3>
          </div>

          {/* Timeline */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <h3 className="text-xl font-semibold">June 2024 - August 2024</h3>
          </div>

        {/* Ideation */}
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold mb-2">Ideation</h2>
          <h3 className="text-xl font-semibold mb-2">Why {projectTitle}?</h3>
        </div>
        <p className="mb-2">As a book enjoyer since childhood, I’ve fell into periods of having zero motivation or interest in any books and struggling to get back into it. I wanted to create a platform like ‘Tinder’ or ‘Hinge’ where people can reignite their passion for reading using this recommendation based website. Other websites such as Goodreads are well done, but they may feel outdated and not as interactive as this website.  </p>
        
        {/* Demo Section */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Demo!</h2>
          <video controls className="w-full max-w-3xl mx-auto">
            <source src={BingedDemo} type="video/mp4" />
          </video>
        </div>

        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc ml-6 mb-4">
            <li><span className="black-bold">Registration & Login:</span> Based on sessions for each user whose id is based on their email</li>
            <li><span className="black-bold">Initial quiz:</span> User has to click 5 books they have read or are interested in.</li>
            <li><span className="black-bold">Home:</span> Displays wishlist books and completed books.</li>
            <li><span className="black-bold">Explore:</span> AI Powered Book Recommendation system where user can dislike or like books that appear on feed.</li>
            <li><span className="black-bold">Wishlist:</span> Initial 5 books from quiz and liked books are stored in this 'shelf' where user can preview the book, remove them, or add them to completed books.</li>
            <li><span className="black-bold">Completed Books:</span> Users can rate and review their completed books. They can edit these later as well. </li>
            <li><span className="black-bold">Profile:</span> Display an avatar, username, friends, favorite book, currently reading book, and completed books along with their ratings, reviews, and comments.</li>
            <li><span className="black-bold">Profile Logout & Edit:</span> User can logout using the top right button. The edit button under logout allows user to change their avatar, favorite book, and currently reading.</li>
            <li><span className="black-bold">Friends:</span> Can send, receive, and accept friend requests. Friends can comment on each other's ratings.</li>
            <li><span className="black-bold">Profile Visibility:</span> Anyone can see other people's public profiles with all the displayed features, but non-friends cannot comment on another user's completed books.</li>
          </ul>
        <h3 className="text-xl font-semibold mb-2">Backend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><span className="black-bold"> Goodreads-WebScraper:</span> Contributed to Open-Source Goodreads-Scraper (https://github.com/maria-antoniak/goodreads-scraper) as it was outdated (Not Updated on Repo Yet). Updated the code and utilized what my website needed. </li>
          <li><span className="black-bold">Flask:</span> Python-based web development framework</li>
          <li><span className="black-bold">MongoDB Atlas AWS Database:</span> Cluster created for storing & pulling book and user data.</li>
          <li><span className="black-bold">Google OAuth 2.0</span> (Not currently available on the website): Implemented but due to cookie issues I opted to use registration with Flask for the production site.</li>
          <li><span className="black-bold">AI/ML Models</span></li>
          <a><span className="black-bold"> [1] Content-Based Filtering Machine Learning Model for Book Recommendations:</span></a>
            <p>Tools such as pandas and numpy are used for data handling such as one-hot encoding book genres. 
              Sklearn was used for scaling and text-vectorization (TF-IDF). Then using the transoformed and scaled information, the model calculates
              the similarities between books using cosine similarity based on several features like genres, summaries, and the users first 5 liked books.
              This model is only used once at the beginning when the user first creates their accound to recommend books based on the first 5 books the user likes.</p>
          <a><span className="black-bold">[2] Collaborative Filtering for Updating User Explore Feed for Book Recommendations:</span></a>
            <p>Pandas utilizes data from MongoDB and then sklearn is used to preprocess data using a LabelEncoder. This converts categorical user data and Book ID's into 
              numerical values to exist in a user-item matrix. Matrix Factorization, specifically Singular Value Decomposition (SVD), done 
              by scipy is used to decomposes the user-item matrix into factors that represents user preferences and 
              book characteristics. This predits the potential ratings for the books the user has not interacted with. This model 
              curates the users explore feed by filtering out books the user has interacted with and putting the most recommended books for the user
              at the beginning of the explore feed list stored on MongoDB for each user. This is done after each interaction on the explore feed as it users
              the user's interactions of dislikes and likes. </p>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Frontend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="black-bold">React.js</li>
          <li className="black-bold">Tailwind CSS</li>
          <li> <span className="black-bold">Different React frontend API's </span>such as @heroicons/react/24/outline, react-icons/fa, react-router-dom, axios, etc. </li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default Binged;

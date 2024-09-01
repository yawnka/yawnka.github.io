import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Collage from '../components/collage';
import ScatteredLabels from '../components/ScatteredLabels';

const Home: React.FC = () => {
  const TechnicalLikes = [
    "Websites",
    "Mobile Applications",
    "Databases & SQL",
    "Robotics",
    "AI/ML models",
    "Cybersecurity",
    "Data Scraping",
    "Game Development",
    "Research",
    "Open to learning more in the tech world!"
  ];
  const techStack = [
    "Python",
    'C++',
    "JavaScript",
    "MongoDB",
    "AWS",
    "GoogleAuth",
    "ROS",
    "April Tags",
    "Computer Vision",
    "SCRUM",
    "JavaScript",
    "TypeScript",
    'Arduino',
    'Netlify',
    'Tailwind CSS',
    "React & React-Native",
    'NativeWind',
    'Google Maps API',
    'PyTorch',
    'scikit-learn',
    'sklearn',
    'pandas',
    'numpy',
    'SQL',
    'XAMPP',
    'phpMyAdmin',
    'npm',
    'etc'
  ];

  const myLikes = [
    "Playing Video Games",
    "Watching Shows & Movies",
    "Reading",
    "Trying Food & Cafe Spots",
    "Free NYC Activities",
    "Hiking",
    "Traveling",
    "Etc!"
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-left">
          <h1 className="font-playfair_bold text-4xl mt-4 mb-4">Welcome to my page, I'm Yanka!</h1>
          <h2 className="font-playfair_bold text-2xl mb-4">
            I'm a software developer/engineer who loves creating & learning!
          </h2>
          <h2 className="font-playfair_bold text-2xl mb-4">
            Check out my{' '}
            <Link to="/projects" className="route-page-button">
              projects
            </Link>
            ,{' '}
            <Link to="/blogs" className="route-page-button">
              blogs
            </Link>
            , and{' '}
            <Link to="/resume" className="route-page-button">
              resume
            </Link>{' '}
            on this website.
          </h2>
          <hr className="my-8" />
          <h2 className="font-playfair_bold text-2xl">I enjoy working on:</h2>
          <Collage words={TechnicalLikes} /> 
          <hr className="my-8" />
          <h2 className="font-playfair_bold text-xl mb-4">Tech Stacks and Technology I have worked with: (not limited to these)</h2>
          <ScatteredLabels labels={techStack} />
          <hr className="my-8" />
          <h2 className="font-playfair_bold text-2xl">What I enjoy outside of work:</h2>
          <Collage words={myLikes} /> 
        </div>
      </div>
    </Layout>
  );
};

export default Home;
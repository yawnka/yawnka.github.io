import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { techBadges } from '../components/techBadges';

const Projects: React.FC = () => {
  const title = 'Projects';
  const description = "Here are the projects I have worked/working on and learned from!";
  const projectsList = [
    {
      slug:'project-one',
      url: 'https://github.com/yawnka/Binged',
      name: 'Binged',
      date: '2024',
      tagline: 'Full Stack Social Media (Hinge like) website to discover books and make friends!',
      writeup: '/articles/binged',
      techStack: ['Python', 'React', 'MongoDB', 'NodeJS', 'Numpy', 'Pandas', 'TailwindCSS', 'Sklearn', 'Scipy', 'JavaScript'  ],
      visible: true,
    },
    {
      slug:'project-two',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'Cafe Capture',
      date: '2024',
      tagline: 'Website/App to explore and discover different cafe spots in NYC.',
      writeup: '/articles/cafeCapture',
      techStack: [],
      visible: false,
    },
    {
      slug:'project-three',
      url: 'https://github.com/cherryontech/comet-cruisers-spring2024',
      name: 'SeaScribe',
      date: '2024',
      tagline: 'Website created for those dealing with burnout. Allows users to journal, create to-dos and interact with a supportive bot!',
      writeup: '/articles/SeaScribe',
      techStack: ['React', 'NodeJS', 'JavaScript', 'TailwindCSS','Netlify'],
      visible: true,
    },
    {
      slug:'project-ten',
      url: 'https://github.com/yawnka/React-Native-WebApp',
      name: 'Video Social Media Mobile App ',
      date: '2024',
      tagline: 'Full-Stack Mobile Application to upload and share videos with friends! Created by following a YouTube tutorial for learning.',
      writeup: '/articles/YTMobileApp',
      techStack: ['React', 'NodeJS', 'JavaScript', 'NativeWind', 'NodeJS', 'Appwrite'],
      visible: true,
    },
    {
      slug:'project-six',
      url: `https://github.com/yawnka/CrimeTracker_DB`,
      name: 'Police Station Database & Website',
      date: '2024',
      tagline: 'Created a database system along with a website for a Police Station for users/officers to obtain related information.',
      writeup: '/articles/PoliceDatabase',
      techStack: ['Python', 'XAMPP', 'phpMyAdmin', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      visible: true,
    },
    {
      slug:'project-seven',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'Augmented Reality NYU Dibner Library mobile app',
      date: '2024',
      tagline: 'Team based project creating a VR based navigation and utility app to explore a NYU library and find books and rooms.',
      writeup: '/articles/project-four',
      techStack: [],
      visible: false,
    },
    {
      slug:'project-eight',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'My Personal Website!',
      date: '2024',
      tagline: 'This in itself is a project where I wanted to work on developing with new technologies such as Gatsby & TypeScript! Deployed using Gastby connected to GitHub Pages.',
      writeup:'',
      techStack: ['React', 'TypeScript', 'Gatsby'],
      visible: true,
    },
    {
      slug:'project-nine',
      url: `https://github.com/yawnka/JEYRobot`,
      name: 'Autonomous Area Tracking Robot',
      date: '2021',
      tagline: 'Full robotic build to autonmously measure and display space given in an area.',
      writeup: '/articles/RAD',
      techStack: ['Arduino', 'ROS', 'C'],
      visible: true,
    },
    {
      slug:'project-11',
      url: `https://github.com/yawnka/pingPong`,
      name: 'Ping Pong',
      date: '2024',
      tagline: 'Basic implementation of ping pong trying to understand the basics of game development.',
      writeup: '',
      techStack: ['GDScript', 'GoDot'],
      visible: true,
    },
  ];
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList
            .filter(project => project.visible)
            .map((project) => (
            <div key={project.slug} className="border rounded-xl shadow-lg p-6 bg-white">
              <div className="mb-2 flex justify-between items-center">
                <time className="text-sm text-gray-600">{project.date}</time>
              </div>
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="mb-4">{project.tagline}</p>
              <div className="flex flex-wrap mt-4 space-x-2">
                {project.techStack.map((tech, index) => (
                  <img
                    key={index}
                    src={techBadges[tech]}
                    alt={tech}
                    className="inline-block h-6 mb-2"
                    style={{ width: 'auto', maxWidth: '100%' }}
                  />
                ))}
              </div>
              <div className="flex space-x-2 mt-2">
                {project.writeup && project.writeup.trim() !== '' && (
                  <Link to={project.writeup} className="bg-custom-nav-bar text-white px-4 font-bold hover:bg-custom-dark-green py-2 rounded">
                    Article
                  </Link>
                )}
                <a href={project.url} target="_blank" rel="noreferrer" className="bg-gray-500 font-bold hover:bg-gray-800 text-white px-4 py-2 rounded">
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Projects: React.FC = () => {
  const title = 'Projects';
  const description = "Here are the projects I have worked on and learned so much from! Some projects may not have an article.";
  const projectsList = [
    {
      slug:'project-one',
      url: 'https://github.com/yawnka/Binged',
      name: 'Binged',
      date: '2024',
      tagline: 'Full Stack Social Media Hinge like website to discover books and make friends!',
      writeup: '/articles/binged',
      visible: true,
    },
    {
      slug:'project-two',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'Cafe Capture',
      date: '2024',
      tagline: 'Website/App to explore and discover different cafe spots in NYC.',
      writeup: '/articles/cafeCapture',
      visible: false,
    },
    {
      slug:'project-three',
      url: 'https://github.com/cherryontech/comet-cruisers-spring2024',
      name: 'SeaScribe',
      date: '2024',
      tagline: 'Website created for those dealing with burnout to journal and create to-dos and interact with a supportive bot!',
      writeup: '/articles/SeaScribe',
      visible: true,
    },
    {
      slug:'project-six',
      url: `https://github.com/yawnka/CrimeTracker_DB`,
      name: 'Police Station Database & Website',
      date: '2024',
      tagline: 'Created a database system along with a website for police officers and users to obtain police related information.',
      writeup: '/articles/PoliceDatabase',
      visible: true,
    },
    {
      slug:'project-seven',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'Augmented Reality NYU Dibner Library mobile app',
      date: '2024',
      tagline: 'Team based project creating a VR based navigation and utility app to explore a NYU library and find books and rooms.',
      writeup: '/articles/project-four',
      visible: true,
    },
    {
      slug:'project-eight',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'Ping Pong',
      date: '2024',
      tagline: 'Basic implementation of ping pong while learning game dev.',
      writeup: '/articles/project-four',
      visible: true,
    },
    {
      slug:'project-nine',
      url: `https://github.com/yawnka/yawnka.github.io`,
      name: 'Autonomous Measurement Robot',
      date: '2024',
      tagline: 'Full robotic build to autonmously measure and display space given in an area.',
      writeup: '/articles/project-four',
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
              <div className="flex space-x-2">
                {project.writeup && (
                  <Link to={project.writeup} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Article
                  </Link>
                )}
                <a href={project.url} target="_blank" rel="noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded">
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
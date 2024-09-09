import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { techBadges } from '../components/techBadges';

const Blogs: React.FC = () => {
  const title = 'Blogs';
  const description = "Some blogs I've writen. Some are educational, others are for fun! Enjoy :)";
  const projectsList = [
    {
      slug:'project-one',
      name: 'Setting up a virtual environment for Mac vs Windows',
      date: '2024',
      tagline: 'Breaking it down for others & myself.',
      writeup: '/blogs/one',
      visible: true,
    },
    {
      slug:'project-two',
      name: 'Google Machine Learning Course Broken Down by Beginner',
      date: '2024',
      tagline: 'My attempt at trying to understand ML!',
      writeup: '/blogs/two',
      visible: true,
    },
    {
      slug:'project-three',
      name: 'Exploring Large Language Model (LLM) Procedural Content Generation (PCG) in Stardew Valley [Research]',
      date: '2024',
      tagline: 'Research in AI and Games.',
      writeup: '/blogs/three',
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
              <div className="flex space-x-2 mt-2">
                {project.writeup && (
                  <Link to={project.writeup} className="bg-custom-nav-bar text-white px-4 font-bold hover:bg-custom-dark-green py-2 rounded">
                    Article
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
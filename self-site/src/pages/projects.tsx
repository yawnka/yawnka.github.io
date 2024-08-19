import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { projectsList } from './projectList'; 

const Projects: React.FC = () => {
  const title = 'Projects';
  const description = "Here are the projects I have worked on and learned so much from! Some projects may not have an article.";

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project) => (
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
                <a href={`https://github.com/yourusername/${project.slug}`} target="_blank" rel="noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded">
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

import React from 'react';
import Layout from '../../components/layout';
import seaScribeDemo from '../../images/seaScribe_demo.png';
import seaScribeLogo from '../../images/seaScribe_logo.png';
import seaScribeTeam from '../../images/seaScribe_team.png';

const CafeCapture: React.FC = () => {
  const projectTitle = 'SeaScribe';
  const blurb = 'An MVP project desinged to improve mental health and foster wellness experiencing burnout.';
  const overview = 'SeaScribe is a wellness app designed to provide a nurturing space for individuals grappling with burnout from the demands of school or work. Our mission is to prioritize mental well-being by offering a seamless and supportive platform that encourages users to unwind, reflect, and rejuvenate.';
  const ideation = 'Research indicates that a staggering 89% of individuals have grappled with burnout. Burnout manifests in various forms, from increased anxiety sensitivity to a sense of disconnection. To address this, our team aimed to provide users with a supportive environment where they can freely express their thoughts and enhance productivty by managing tasks. Additionally, an interactive chatbot offers support and uplifts users` well-being throughout their journey.'
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        {/* Project Title and Blurb */}
        <div className="flex items-center mb-8">
          <img src={seaScribeLogo} alt="SeaScribe Project" className="w-50 h-30 mr-4 rounded-lg" />
        </div>
        <p className="text-xl mb-8">{blurb}</p>

        {/* Overview Section */}
        <h2 className="text-2xl text-black font-bold mb-2">Overview</h2>
        <p className="text-xl mb-4">{overview}</p>

          {/* Program & Team */}
          <h2 className="text-2xl text-black font-bold mb-2"> Facilitated by Cherry on Tech Cohort Program Internship</h2>
          <h2>More information about Cherry on Tech will be provided at the bottom of this page!</h2>
          {/* Role */}
          <div className="flex items-center space-x-4 mt-4 mb-4">
            <h2 className="text-2xl font-bold">Role</h2>
            <h3 className="text-xl font-semibold"> Frontend Developer </h3>
          </div>

          <h2 className="text-2xl font-bold">Team</h2>
          <div className="flex items-center mb-8">
            <img src={seaScribeTeam} alt="seaScribe Team" className="mr-4 rounded-lg" style={{ width: '40', height: '40' }} />
          </div>

          {/* Timeline */}
          <div className="flex items-center space-x-4 mt-4 mb-4">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <h3 className="text-xl font-semibold">March 2024 - July 2024</h3>
          </div>

        {/* Ideation */}
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold mb-2">Ideation</h2>
          <h3 className="text-xl font-semibold mb-2">Why {projectTitle}?</h3>
        </div>
        <p className="text-xl mb-4"> {ideation} </p>
        
        {/* Demo Section */}
        <div className="mt-4 mb-4">
          <h2 className="text-2xl font-bold">Demo!</h2>
          <a href="https://seascribe.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xl font-bold hover:underline">
            Click this to try out SeaScribe!
          </a>
        </div>
        <img src={seaScribeDemo} alt="SeaScribe Demo" className="mr-4 rounded-lg" />

        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2">Features:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li className="black-bold">Journaling:</li>
          <li className="ml-10"><span className="black-bold">Free Write: </span>Provides a safe space for users to unload their feelings, espeically those they experience during burnout.</li>  {/* Indented more */}
          <li className="ml-10"><span className="black-bold">Prompt Write: </span>Suggests journaling prompts that encourage users to take a step back, reflect on their emotions, and express gratitude.</li>
        <li className="black-bold"> Minimalistic To-Do List Creation </li>
          <li className="ml-10">Helps users organize their tasks to boost efficiency and avoid burnout.</li>
          <li className="ml-10">Minimalistic design and simple add, delete, and reorder tasks functionalities. Focuses on helping users organize their headspace instead of becoming another Kanban board.</li>
        <li className="black-bold"> Jokes & Affirmation Bot </li>
          <li className="ml-10">Acts as a friend who always provides support and validation, reminding users to love themselves.</li>
          <li className="ml-10">Delivers constant jokes to help users relax.</li>
          <li className="ml-10">The cute design of the starfish bot can make users feel uplifted.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Frontend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="black-bold">React</li>
          <li className="black-bold">Tailwind CSS</li>
          <li className="black-bold">Local Storage</li>
          <li className="black-bold">Git and assesing code reviews on GitHub</li>
          <li className="black-bold"> Hosting using Netlify </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Tools and Development</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Code Quality handling using ESLint and Prettier</li>
          <li>Jira Sprint Planning: Assigning tasks per sprint and backlogging tasks.</li>
          <li>Understanding how to interpret desings created by UX designers and recreating them in code</li>
          <li>Managing Pull Requests on GitHub and Sprints on Jira</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Future Considerations:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Backend Implementation with user accounts and Database storage.</li>
          <li>Limit the number of to-do lists shown on the dashboard instead of infinite scrolling.</li>
          <li>Adding relaxing background music</li>
          <li>Making the chat bot more interactable, like an AI powered chatbot that can respond.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Cherry on Tech</h2>
        <p className="text-xl mb-1">"Cherry on Tech is a volunteer-run organization whose mission is to
           support people of women, non-binary, and trans folks who are new to the tech world. We are dedicated to
            developing a community that empowers marginalized genders while promoting the power of being part of a 
            tech squad. -*From their website* "</p>
        <a href="https://cherryon.tech/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold text-lg mb-2 hover:underline">
            Check out the Cherry on Tech website!
          </a>
        <p className="text-xl mb-1"> The Cohort Program is a 15-week long program to create a working accessible web design MVP with a team replication a startup. Every person is provided a mentor to help with their role and each team is provided a mentor to facilitate with any questions or issues. There are at least two weekly meetings with the full team. One global meeting with the entire Cohort program. Other meetings dedicated to specfic teams, such as Pair Programming Meets with the Frontend Developer team. This program ensures constant communication, learning, growth, and understanding.  </p>
        <p className="text-lg mb-4"> My Input: This community is very supporting, ambitious, and kind group of people. I met so many women, non-binary, and trans people who are all so intelligent and amibitous in gaining and using their skills to create MVP's and work professionally amongst others.</p>
      </div>
    </div>
    </Layout>
  );
};

export default CafeCapture;
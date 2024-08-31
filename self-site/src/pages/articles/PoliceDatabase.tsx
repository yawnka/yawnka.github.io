import React from 'react';
import Layout from '../../components/layout';
import RegularUser_PWDemo from '../../videos/RegularUser_PWD.mp4';
import OfficerUser_PWDemo from '../../videos/OfficerUser_PWD.mp4';
import phpAdminDB from '../../images/phpDatabase.png';
//XAMPP is a free, open-source software package that provides a local web server environment for testing and developing websites and applications

const PoliceDatabase: React.FC = () => {
  const projectTitle = 'Police Station Database Website';
  const blurb = 'An optimized fullstack website for a police station to store criminal record information and police officer information.';
  const ideation = ''
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        <div className="relative p-4 mb-4 rounded-lg">
          {/* GitHub Project Source Button */}
              <a
                  href="https://github.com/yawnka/CrimeTracker_DB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-custom-nav-bar text-white font-semibold py-2 px-4 rounded-md hover:bg-green-300 transition duration-300"
              >
                  My Source Here!
              </a>
          </div>
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
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Demo's</h2>
          <h2 className="text-xl font-bold mb-2 underline">Regular User Demo</h2>
          <video controls className="w-full max-w-3xl mb-4 mx-auto">
            <source src={RegularUser_PWDemo} type="video/mp4" />
          </video>
          <h2 className="text-xl font-bold mb-2 underline" >Officer/Higher Power user Demo</h2>
          <p className="text-lg mb-2">Add function not completely shown since it is straightfoward and time consuming to do. Hopefully it is understood how it works!</p>
          <video controls className="w-full max-w-3xl mx-auto mb-4">
            <source src={OfficerUser_PWDemo} type="video/mp4" />
          </video>
          <h2 className="text-xl font-bold mb-2 underline" > phpMyAdmin Database Tables & SQL Functions/Procedure "Tree"</h2>
          <img src={phpAdminDB} alt="SeaScribe Demo" className="mr-4 rounded-lg" />
        </div>


        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-2">Features:</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><span className="black-bold">Registration & Login:</span> User logs in as a viewer or an officer, controlled using sessions and using info stored on the Database table for logins. </li>
          <li><span className="black-bold">Logout:</span> Logs the user out and security added to prevent roundabouts to go back into the session in the frontend and backend. </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Regular User </h2>
          <ul className="list-disc ml-6 mb-6">
            <li><span className="black-bold">Home:</span> Displays Crime and Criminal Information such as ID, Type, Dates, Criminal Name, Criminal Status, etc. </li>
            <li><span className="black-bold">Search:</span> Search by entering a character. Can filter whether user is searching for a Criminal or a Probation Officer.</li>
          </ul>

        <h2 className="text-xl font-semibold mb-2">Officer User </h2>
        <ul className="list-disc ml-6 mb-6">
          <li><span className="black-bold">Home:</span> Displays the same information seen on the regular user view.</li>
            <li className="ml-10"><span className="black-bold">Update:</span> Uses SQL procedures in the database such as updateClassification, updateDateCH, updateStatus, etc to edit crime information.</li>
            <li className="ml-10"><span className="black-bold">Delete:</span> Uses SQL procedure deleteCrime to delete the crime after clicking a confirmation pop up.</li>
          <li><span className="black-bold">Search:</span> Search for a criminal, probation officer, (NEW) Search for a Crime Officer's Badge Number which is something only officers can do. The backend utilizes an SQL Function searchCrimeOfficer to retrieve this.</li>
          <li><span className="black-bold">Add Crime & Criminal:</span> Enter the crime information and criminal information like submitting a form of information in the database system. Uses SQL procedures addCrime and addCriminal. </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Backend:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><span className="black-bold">Python</span> & <span className="black-bold">Flask-Python</span> (micro web framework written in Python)</li>
          <li><span className="black-bold">Pandas</span> (open source software library)</li>
          <li><span className="black-bold">XAMPP</span> (Apache & MySQL Ports) & <span className="black-bold">phpMyAdmin</span></li>
          <li><span className="black-bold">Structured query language (SQL):</span> SELECT, UPDATE, DELETE, INSERT INTO, CREATE TABLE, ALTER DATABASE, ETC Statements created and used to develop police station tables and information database. </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Frontend:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li className="black-bold">HTML</li>
        <li className="black-bold">CSS</li>
        <li className="black-bold">JavaScript</li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default PoliceDatabase;
import React from 'react';
import Layout from '../../components/layout';
import CodeFlowChart from '../../images/RAD_1.png';
import MSProjectTimeline from '../../images/RAD_2.png';
import Cost from '../../images/RAD_3.png';
import wiring from '../../images/RAD_4.png';
import ATRLogo from '../../images/RAD_logo.png';
import design from '../../images/RAD_5.png';

const RAD: React.FC = () => {
  const projectTitle = 'Autonomous Area Tracking Robot (ATR)';
  const blurb = 'An autonomous robot that finds available space in difficult-to-reach areas and returns the area.';
  const ideation = 'Reduces time spent manually measuring out areas. Reduce manual labour costs. All available space the robot can move in is charted as possible.'
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        <div className="relative p-4 mb-4 rounded-lg">
          {/* GitHub Project Source Button */}
              <a
                  href="https://github.com/yawnka/JEYRobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-custom-nav-bar text-white font-semibold py-2 px-4 rounded-md hover:bg-green-300 transition duration-300"
              >
                  My Source Here!
              </a>
          </div>
          {/* Project Title and Blurb */}
        <div className="flex items-center mb-8">
          <img src={ATRLogo} alt="Binged Project" className="w-40 h-30 mr-4 rounded-lg" />
          <h1 className="text-4xl font-judson_bold font-bold mb-4">{projectTitle}</h1>
        </div>
        <p className="text-xl mb-8">{blurb}</p>

        {/* Overview Section */}
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="mb-4"> Created a Rapid Assembly Design (RAD) projectt for our semester-long design project (SLDP) for our EG-1003 Intro to Engineering Course as a team of 3. The mechnical, electrical, and programming of the code was completed to work as our project design and presented as a final project.   </p>

        {/* Role */}
        <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Role</h2>
            <h3 className="text-xl font-semibold">Engineer</h3>
          </div>
        
          <h2 className="text-2xl font-bold">Team: JEY</h2>
        <div className="flex items-center mb-4">
          <ul className="list-disc ml-6">
            <li> <span className="black-bold"> Jayine Nguyen </span></li>
            <li><span className="black-bold"> Eric Zheng </span></li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <h3 className="text-xl font-semibold"> September 2021 - December 2021</h3>
        </div>

        {/* Ideation */}
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold mb-2">Ideation</h2>
          <h3 className="text-xl font-semibold mb-2">Why {projectTitle}?</h3>
        </div>
        <p className="mb-2">  </p>
        
        {/* Demo Section */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Demo: Video To Be Uploaded</h2>
        </div>


        {/* Components & Technologies Used */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Development Process & Tools</h2>

        <h3 className="text-xl font-semibold mb-2 mt-2">CAD Design Model:</h3>
        <img src={design} alt="CAD" className="mr-4 rounded-lg mt-2" />

        <h3 className="text-xl font-semibold mb-2 mt-2">Code Flow Chart:</h3>
        <img src={CodeFlowChart} alt="CodeFlowChart" className="mr-4 rounded-lg" />

        <h3 className="text-xl font-semibold mb-2 mt-2"> Wiring/Electrical Schematic:</h3>
        <img src={wiring} alt="CodeFlowChart" className="mr-4 rounded-lg" />

        <h3 className="text-xl font-semibold mb-2 mt-2">Microsoft Project Schedule:</h3>
        <img src={MSProjectTimeline} alt="MS Schedule" className="mr-4 rounded-lg" />

        <img src={Cost} alt="Cost" className="mr-4 rounded-lg mt-2" />
        
        <h3 className="text-xl font-semibold mb-2 mt-2">Physical Components:</h3>
        <ul className="list-disc ml-6 mb-6">
          <li className="text-lg">Arduino UNO</li>
          <li className="text-lg">2 Ultrasonic Sensors</li>
          <li className="text-lg">1 Gyroscope Sensor</li>
          <li className="text-lg">2 DC Motors</li>
          <li className="text-lg">Battery</li>
          <li className="text-lg">Breadboard</li>
          <li className="text-lg">Wires</li>
          <li className="text-lg">Robot Chassis</li>
          <li className="text-lg">Wheels (4)</li>
          <li className="text-lg">Axels</li>
          <li className="text-lg">Gears</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">C++ Code for Arduino UNO Ran on the Arduino IDE </h2>
          <ul className="list-disc ml-6 mb-6">
            <li className="text-lg"><span className="font-bold">Gyroscope Code:</span> for rotation and turning corners</li>
            <li className="text-lg"><span className="font-bold">Ultrasonic Code:</span> To measure distance of walls from robot</li>
            <li className="text-lg"><span className="font-bold">Motor code:</span> for locomotion</li>
          </ul>
      </div>
    </div>
    </Layout>
  );
};

export default RAD;
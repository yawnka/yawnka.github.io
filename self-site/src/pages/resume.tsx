import React from 'react';
import Layout from '../components/layout';

const Resume: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
          <p className="text-xl">
          </p>
        </header>

        <section>
          <h2 className="text-xl font-anticSlab font-bold mb-2">EDUCATION</h2>
          <p className="text-2xl font-bold text-custom-purple mb-2">New York University Tandon School of Engineering</p>
          <p className="font-bold">B.S Comuter Science - May 2025</p>
          <p className="ml-6"> Minor in Mathematics & in Cybersecurity</p>
          <p className="font-bold">M.S Comuter Science | BSMS Track - May 2026</p>
          <p><span className="font-bold">Relevant Coursework:</span> Object Oriented Programming(C++), Data Structures and Algorithms(Python), Discrete Mathematics, Data Analysis, Computer Architecture and Organization, Introduction to Databases, Design and Analysis of Algorithms, Software Engineering, Operating Systems(C), Linear Algebra, Computer Networking, Artifical Intelligence, Computer Security. </p>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-anticSlab font-bold mb-2">EXPERIENCE</h2>
          <div>
            <h3 className="text-2xl text-custom-purple mb-2 font-bold">NYU IT Desktop & Software Support</h3>
            <p>Student Employee Fall 2022-Present | Summer Intern 2023 & 2024 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Delivered IT support across 32 departments, resolving a broad range of hardware and software issues.</li>
              <li>Collaborated on software bash program development and testing campus-wide, thus automating security, management system tracking, and equipment tracking connected to endpoint, enhancing efficiency by 60%.</li>
              <li>Configured, set up, logged over 300 desktops, laptops, and other devices campus-wide on NYU’s active domain.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Cherry On Tech Spring Cohort</h3>
            <p>Software Developer - March 2024 :July 2024 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Collaborating with a team of 8 in a 15-week program to design an inclusive user-centric product, utilizing tools like FigJam, Jira, GitHub, and VSCode for SCRUM planning and development.</li>
              <li>Developed features such as free-form and prompt-based journaling using React-Quill and saving using local storage</li>
              <li>Using various Reactjs APIs coded using JavaScript to create joke/daily affirmation bots, search functionality, journals.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl text-custom-purple mb-2 font-bold">NYU Augmented Library VIP (Vertically Integrated Project)</h3>
            <p>Augmented Reality Functionality Backend Software Engineer & Team Liaison - Jan 2024 : Present </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Developed interactive 3D AR models for NYU's library app using Unity, enhancing navigation and integrating with the reservation system using a Google Calendar API.</li>
              <li>Manage cross-team communication to integrate AR with 6 other front-end and back-end teams and other features.</li>
              <li>Developed C# program on Unity for functionalities in the 3D model such as buttons to switch floors and rooms.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl text-custom-purple mb-2 font-bold">Robotic Design Team (RDT; NYU Robotics Team)	</h3>
            <p>Software Engineer Jan 2022 - Jan 2024 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Led weekly team meetings, code reviews, and SCRUM sprints, enhancing the development of advanced computer vision algorithms, and boosting robot object detection accuracy.</li>
              <li>Competed as one of 20 software engineers in NASA’s Robotics Mining Competition (RMC): Lunabotics.</li>
              <li>Engineered and tested state machines using SMACH and established wireless communication with ROS and MQTT.</li>
              <li>Mentor students during outreach events such as hackathons and as a volunteer for the PolyPrep Country Day Middle-High School Robotics Team.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Kode with Klossy</h3>
            <p>Mobile Development Summer Program Participant - Summer 2020 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Learned the programming language Swift and utilized Xcode to develop iOS applications.</li>
              <li>Designed and built 4 multifunctional iOS apps in Swift: one including a to-do list, goal tracker, emotion tracker, and easily navigable curated inspirational content.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Girls Who Code </h3>
            <p>Web Development	 Summer Program Participant - Summer 2021 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Acquired proficiency in web development languages including HTML, CSS, and JavaScript.</li>
              <li>Designed and developed 5 comprehensive websites; with the final project being an interactive Mental Health Awareness website.</li>
            </ul>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-anticSlab font-bold mb-2">LEADERSHIP, PROJECTS, AND OTHER ACTIVITIES</h2>
          <div>
            <h3 className="text-2xl mb-2 font-bold">Girls Who Code College Loops </h3>
            <p> Events Coordinator 2024 | Member 2020-Present </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Handle planning and managing monthly events for the members alongside other e-board members, advisors, companies, alumni, professional-workers, etc.</li>
              <li>Support, uplfift, enlighten, and socialize with others to empower them in the field of Tech.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Book Recommendation Full Stack Website </h3>
            <p>Full Stack Software Developer - Summer 2024 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provides users a ‘Tinder’ like web application with exploring books given a feed based on a user’s likes and dislikes. </li>
              <li>Developed backend utilizing Python, Flask, MongoDB and AWS for storage, and Google OAuth Authentication.</li>
              <li>Utilized React, TailwindCSS, JavaScript, JavaScript XML, NPM, Node.js, and various API’s for the frontend.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Crime-Tracking Database: Full Stack Website </h3>
            <p>Software Developer (Team of 3) - Jan 2024 : May 2024 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Developed and deployed a dynamic full-stack web application using Flask and ngrok, integrating Python, HTML, CSS, and JavaScript for the front end with a phpMyAdmin database on an XAMPP server for backend operations.</li>
              <li>Engineered user authentication and role-based access controls within the application, enabling secure login, registration, and CRUD operations on the database program using PL/SQL.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Autonomous Area Tracker Robot </h3>
            <p>Software Engineer - Sept 2021 : December 2021 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Engineered an Autonomous Functional Area Tracker Robot during an Engineering Course utilizing Arduino UNO, SOLIDWORKS CAD, Ultrasonic Sensors, Gyroscope sensors, DC motors etc.</li>
              <li>Developed 5 comprehensive user interactive websites utilizing HTML, CSS, and Javascript on Glitch.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">PennApps XXIII Hackathon </h3>
            <p>Software Developer (Team of 4) - September 2022 </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Developed a social media website ‘EcoPost’ to motivate and push people worldwide to make more eco-friendly choices. Implemented utilizing HTML, CSS, Javascript, MySQL, and JavaSpring boot.</li>
            </ul>
          </div>
        </section>

        <p><span className="font-bold text-xl underline">Organizations:</span>  Rewriting The Code, Breakthrough Tech, Girls Who Code, OSIRIS (Cybersecurity club), and Kode with Klossy</p>
      </div>
    </Layout>
    );
};

export default Resume;

import React from 'react';
import Layout from '../../components/layout';
//XAMPP is a free, open-source software package that provides a local web server environment for testing and developing websites and applications

const PoliceDatabase: React.FC = () => {
  const projectTitle = 'Video Social Media Mobile App';
  const blurb = 'An optimized fullstack mobile application to upload, watch, and share videos with other users!';
  const ideation = ''
  const videoUrl = "https://www.youtube.com/watch?si=ubt0vk70lSjt6DCs&v=ZBCUegTZF7M&feature=youtu.be";
  const videoThumbnail = "https://img.youtube.com/vi/ZBCUegTZF7M/0.jpg"; // YouTube thumbnail URL
  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        <div className="relative p-4 mb-4 rounded-lg">
        {/* GitHub Project Source Button */}
            <a
                href="https://github.com/yawnka/React-Native-WebApp"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-custom-nav-bar text-white font-semibold py-2 px-4 rounded-md hover:bg-green-300 transition duration-300"
            >
                My Source Here!
            </a>
        </div>

        {/* Project Title and Blurb */}
        <div className="flex items-center mb-2">
          <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
        </div>
        <p className="text-xl mt-2 mb-4">{blurb}</p>
        <p className="mb-4"> <span className="font-bold font-xl">Reminder:</span> This is a tutorial I followed from start to end to create a fullstack mobile application and understand the tech stack and components involved in making one! Some of the explanations will be copied from the github's README as it is best stated by the creator themself.</p>
        <a
        href="https://github.com/adrianhajdin/aora"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-md hover:bg-green-300 transition duration-300"
        >
            Check out the authors GitHub source here
        </a>

        {/* Overview Section */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Overview</h2>
        <p className="mb-4"> "Built with React Native for seamless user experiences, Animatable for captivating animations, and integrated with the dependable backend systems of Appwrite, this app showcases impressive design and functionality, enabling seamless sharing of AI videos within the community." </p>

        {/* Role */}
        <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Role</h2>
            <h3 className="text-xl font-semibold"> Fullstack Developer & Learner </h3>
          </div>

        {/* Timeline */}
        <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <h3 className="text-xl font-semibold"> June 2024 - July 2024</h3>
          </div>
        
        {/* Demo Section */}
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Demo / Tutorial </h2>
            <div
            className="relative w-full h-64 bg-cover bg-center cursor-pointer rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${videoThumbnail})` }}
            onClick={() => window.open(videoUrl, '_blank')}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                    Watch Video
                    </span>
                </div>
            </div>
        </div>


        {/* Tech Stack & Features */}
        <h2 className="text-2xl font-bold mt-4 mb-2">Tech Stack & Features & Development</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-2">Features:</h3>
        <li className="black-bold">Welcome/Starting Page</li>
        <li className="black-bold">Sign In</li>
        <li className="black-bold">Sign Up</li>
        <li className="black-bold">Home</li>
        <li className="black-bold">Bookmark/Saved Page (Unfinished)</li>
        <li className="black-bold">Create/Upload Page</li>
        <li className="black-bold">Profile Page</li>

        <h3 className="text-xl font-semibold mt-4 mb-2">Backend:</h3>
        <li>
        <span className="black-bold">Expo-Go:</span> "Sandbox that enables you to quickly experiment with building native Android and iOS apps." - 
        <a href="https://expo.dev/go" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://expo.dev/go</a>
        </li>

        <li>
        <span className="black-bold">Appwrite:</span> "Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools." - 
        <a href="https://appwrite.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://appwrite.io/</a>
        </li>

        <h3 className="text-xl font-semibold mt-4 mb-2">Frontend:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li> <span className="black-bold">React Native:</span>AN open-source UI software framework to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP using the React Framework (Google).</li>
        <li> <span className="black-bold">NativeWind:</span> Tailwind CSS as scripting language for React Native.</li>
        <li> <span className="black-bold">Animatable:</span> React Native API to use visual animations with components</li>
        </ul>

      </div>
    </div>
    </Layout>
  );
};

export default PoliceDatabase;
import React from 'react';
import githubLogo from '../images/github-mark.png';
//import linkedInLogo from '../images/LI-Logo.png';
import linkedInLogo from '../images/LI-In-Bug.png';
export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center bg-custom-cream p-4">
      <p className="mb-4 text-xl font-judson_bold">Contact Me:</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/yanka-sikder/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="LinkedIn" className="h-10 w-12 hover:opacity-75" />
        </a>
        <a href="https://github.com/yawnka" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="h-10 w-10 hover:opacity-75" />
        </a>
      </div>
      <p className="mt-4">
        <a className="text-custom-dark-green font-judson text-xl hover:underline">
          yankasikder@nyu.edu || sikderyanka@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
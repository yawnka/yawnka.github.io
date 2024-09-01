import React from 'react';
import Layout from '../../components/layout';

const One: React.FC = () => {
  const blogTitle = 'Virtual environment for Mac vs Windows';

  return (
    <Layout>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg text-left">
        {/* Project Title and Blurb */}
        <div className="flex items-center mb-4">
          <h1 className="text-4xl text-center font-silkscreen font-bold">{blogTitle}</h1>
        </div>
        <h1 className="text-2xl font-silkscreen font-bold text-center mb-4">Author: Yanka Sikder</h1>
        <h1 className="text-2xl font-silkscreen font-bold text-center mb-4">August 15, 2024</h1>
        <p className="text-xl font-anticSlab mb-8">When switching between a Mac Device and a Windows device, I would confuse the way to create and activate the virtual environment. 
          So, I wanted to write this for myself and others who wanted a better understanding of it from my words.
          I know this could be an easy google search, but after doing it so many times, I truly understood it after writing all the related
          information down in one area for me to look back at. So consider this a way for myself to use and maybe help others who struggle with
          remembering the difference. This is also my first 'tech' blog ever, so I know its not as technical or something with a bigger picture, but
          I wanted this to be informative and easy to read! You could almost say this is like a tech dictionary in a sense, but I prefer the term blog so it allows
          me to be a little more informal and interactive with readers :) </p>
          <h2 className="text-2xl font-bold mb-2">What is a virtual environment? Why use it?</h2>
          <p className="text-xl font-anticSlab mb-8">This is an isolated space for self-contained Python Installations. This allows programmers to test their code utilizing
            different python libraries or versions. When you pip install ____ (something), these will be added to your virtual environment folder
            Each environment folder can contain different versions or libraries which allow for testing of different aspects which is all versatile
            to the user themself. <br></br> 
            TLDR: Flexibility in testing different libraries/versions for code. </p>
          <h2 className="text-2xl font-bold mb-2">Why are the commands different for Mac and Windows?</h2>
          <p className="text-xl font-anticSlab mb-8"> Since they are two different Operating Systems, they each have a different way to use the command prompt and PowerShell. Thus there are different
            commands which activate different actions! </p>

          <h2 className="text-2xl font-bold mb-2">Instructions - terminal:</h2>
          <h2 className="text-2xl font-silkscreen mb-2">Mac</h2>
          <p className="text-xl font-anticSlab mb-8">
            Create the virtual environment folder: <code>python -m venv env</code>
            <br></br>
            Activate it: <code>source env/bin/activate</code>
          </p>

          <h2 className="text-2xl font-silkscreen mb-2">Windows</h2>
          <p className="text-xl font-anticSlab">
            Create the virtual environment folder: <code>python -m venv env</code>
            <br></br>
            Activate it (each line is a different terminal command): <code>cd env <br></br> cd Scripts <br></br> activate </code>
          </p>
          <p className="text-xl font-anticSlab mb-8">~pip install what you need and test your program in the virtual environment~</p>
          
          <h2 className="text-2xl font-bold mb-2">Tips</h2>
          <p className="text-xl font-silkscreen mb-2"> Easier Install of Python Libraries</p>
          <p className="text-xl font-anticSlab mb-2"><span className="font-silkscreen">[1]</span> During my early stages of development, I ran into a lot of issues due to my own confusion with git control. My problem being that since I didn't
            understand the difference in the commands, when I would switch devices, I would sometimes delete the environment and have to manually reinstall them.
            Obviously, this is time consuming when you have a lot of libraries or you are using an organization based project or forking a project from someone.
            With this issue, I learned the magic of this command: <code>pip freeze > requirements.txt</code></p>
            <p className="text-xl font-anticSlab mb-8">This puts all your current python libraries into a requirements.txt file. When you want to create a new environment, or even a new project, with the same
            libraries, this speeds up installing libraries by a tendfold. The command to do this is: <code>pip install -r requirements.txt</code></p>
          
          <p className="text-xl font-silkscreen mb-2"> Gitignore env folder</p>
          <p className="text-xl font-anticSlab mb-2"><span className="font-silkscreen">[2]</span> Another git control issue I had was that my whole virtual environment folder would upload to my GitHub Repository when I commited. 
            Although this is allowed, it takes up a lot of storage and is not really needed in the repo. This is how I learned about the magic of .gitignore. 
            I've always seen it as it comes building projects, but I never really understood the use for it. There may be other uses, but I'm focusing
            on solving the one where the entire env folder is uploaded to a the GitHub Repo branch. Basically all you have to do is put the name of your
            virtual environment folder and then a '/' on a line in the .gitignore file. If the folder is named env, then it would look like this in the
            file: env/</p>
            <p className="text-xl font-anticSlab mb-8">Next time you commit to a branch, the folder should not be on the Repo. If you are saving your project files locally, the env folder should still exist on your machine to use on your IDE. However, if you are only cloning from the Git Repo, then either remake the env every time or upload the env folder. </p>
          <hr></hr>
          <p className="text-xl mt-8 font-anticSlab">Thats it for this one! I know some of these may be like a "Duh" moment, but we all have to start somewhere. I hope this could be helpful to
          someone. Thank you for reading!</p>
          <p className="text-xl font-anticSlab mb-8"></p>
      </div>
    </div>
    </Layout>
  );
};

export default One;
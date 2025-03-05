import React from "react";
import ProjectCard from "../sub/ProjectCard";



const Projects = () => {



  return (

    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
           <ProjectCard
          src="/p1.jpg"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="furniz-intech.netlify.app"
        />
        <ProjectCard
          src="/p2.jpg"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="furniz-intech.netlify.app"
        />
          <ProjectCard
          src="/p3.jpg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="furniz-intech.netlify.app"
        />
      </div>
    </div>
  );
};

export default Projects;

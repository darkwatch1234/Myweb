// import { ExternalLink, Github, } from "lucide-react";

import { ExternalLink, Github } from "lucide-react";

  const projects = [
    {
    id: 1,
    title: "Metric Imperial Converter",
    description: "This project is a calculator that converts between common units of length, temperature, area, volume, weight and time",
    image: "/project/project1.png",
    tags: ["node & Expressjs, Functional & Unit Test"],
    tagss: [""],
    githubUrl: "https://github.com/darkwatch1234/Metric-Imperial-Converter",
    demoUrl: "#"
    },
     {
    id: 2,
    title: "American British English Translator",
    description: "This project convert American English to British English or British English to American English",
    image: "/project/americanBritish.png",
    tags: ["node & Expressjs, Functional & Unit Test"],
    tagss: [""],
    githubUrl: "https://github.com/darkwatch1234/American-British-English-Translator",
    demoUrl: "#"
    },
     {
    id: 3,
    title: "NetCheck",
    description: "This project verify all active network in Nigeria",
    image: "/project/network.png",
    tags: ["HTML, CSS & JAVASCRIPT"],
    tagss: [""],
    githubUrl: "https://github.com/darkwatch1234/NetCheck",
    demoUrl: "https://darkwatch1234.github.io/NetCheck/"
    },
     {
    id: 4,
    title: "TODO WEB",
    description: "A lightweight task management application built with [React/JavaScript/Node/etc.]. It allows users to create, update, and track their todos with an intuitive and user-friendly interface.",
    image: "/project/todo.png",
    tags: ["HTML, CSS, JAVASCRIPT"],
    tagss: [""],
    githubUrl: "https://github.com/darkwatch1234/My-Todo-APP",
    demoUrl: "https://darkwatch1234.github.io/TODO-DATE/"
    },
     {
    id: 5,
    title: "Automated Waypoint Mapper for Google Earth)",
    description: "This project is a GOOGLE EARTH WAYPOINT GENERATOR that automatically creates pins at fixed intervals along a path. Using simple geospatial calculations.",
    image: "/project/googleearth.png",
    tags: ["Javascript (Node.js), Geospatial Programming + KML file Generator."],
    tagss: ["Ongoing"],
    githubUrl: "#",
    demoUrl: "#"
    },
  ]

const Project = () => {

 

    return ( 
      <div id = "projects" className="py-24 px-4 relative">
        <div className="container mx-auto mx-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb:4 text-center text-[#F7F4F3]">
            {" "}
            Featured <span className="text-[#663399]">Projects</span></h2>
            <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto text-[#F7F4F3]">
              Here are some of my Front End Project and a QA project with full functional and unit testing. Each project was carefully created with attention to detail, perfomance, and user experience.
            </p>
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, key) => (
                <div key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover bg-[#2C2F3D] mt-10">

                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.tags} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"/>
                </div>

                  <div className="p-4">
                    <div className="flex justify-center flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-[#24075E] text-[#F7F4F3]">
                          {tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-center flex-wrap gap-2 mb-0.2">
                      {project.tagss.map((tagx) => (
                        <span className="px-2 py-1 text-xs font-medium border-none text-[#F7F4F3]">
                          {tagx}</span>
                      ))}
                    </div>
                  </div>

                      <h3 className="text-xl font-semibold mb-1 text-center text-[#F7F4F3]">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 text-[#F7F4F3] p-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <a href={project.githubUrl} className="text-[#F7F4F3] hover:text-[#24075E]">
                          <Github />
                          </a>
                          <a target="_blank" href={project.demoUrl} className="text-[#F7F4F3] hover:text-[#24075E]">
                          <ExternalLink />
                          </a>
                        </div>
                      </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    )
    
}
 
export default Project;

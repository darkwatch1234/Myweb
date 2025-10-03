// import { ExternalLink, Github, } from "lucide-react";

import { ExternalLink, Github } from "lucide-react";

  const projects = [
    {
    id: 1,
    title: "RESPONSIVE WEB DESIGN CERTIFICATION",
    image: "/project/certificate1.png",
    tags: ["HTML, CSS, JAVASCRIPT, REACT"],
    githubUrl: "https://www.freecodecamp.org/certification/fcc71051b1b-3c65-4ad7-8a56-846237185f49/responsive-web-design"
    },
     {
    id: 2,
    title: "QUALITY ASSURANCE CERTIFICATION",
    image: "/project/certificate2.png",
    tags: ["node & Expressjs, Functional & Unit Test"],
    githubUrl: "https://www.freecodecamp.org/certification/fcc71051b1b-3c65-4ad7-8a56-846237185f49/quality-assurance-v7"
    },
  ]

const Project = () => {

 

    return ( 
      <div id = "projects" className="py-24 px-4 relative">
        <div className="container mx-auto mx-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb:4 text-center text-[#F7F4F3]">
            {" "}
            My <span className="text-[#663399]">Certificate</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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

                      <h3 className="text-xl font-semibold mb-1 text-center text-[#F7F4F3]">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 text-[#F7F4F3] p-4">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <a href={project.githubUrl} className="text-[#F7F4F3] hover:text-[#24075E]">
                          <Github />
                          </a>
                          <a href={project.githubUrl} className="text-[#F7F4F3] hover:text-[#24075E]">
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

import React from "react";
import '../styles/Projects.css'
function Projects(){
    const Projects=[{title:"Project 1",description:"Des 1"},
        {title:"Project 2",description:"Des 2"}    
    ];

    return(
        <section id="projects" className="projects">
            <h2>
                Mes Projets
            </h2>

            <div className="project-list">
                {Projects.map((project,index)=>
                (<div key={index} className="project-item">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    </div>)
                )}
            </div>
        </section> 
    );
}

export default Projects;
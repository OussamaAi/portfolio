import React from "react";
import '../styles/Skills.css'
function Skills(){
   
    const skills=['React','JavaScript','CSS','HTML']

   
    return(

        <section id="skills" className="skills">
            <h2>
                Compétences
            </h2>
            <ul>
                {skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                )
            )}

            </ul>
            
        </section>
    
    );
}

export default Skills;
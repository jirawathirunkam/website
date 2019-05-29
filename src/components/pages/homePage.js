import React, {Component} from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
          <body>
            <h1 className="HomeTitle">
               Jirawat Hirunkam
               <p></p>
               <div className="HomeProfile">
                <img src="https://github.com/jirawathirunkam/website/blob/master/public/MeGraduating.jpg?raw=true"/>
               </div>
            </h1>

            <div clasName="HomeContent">
              <p> Entry level Software Engineer.
              <br/> Specialize in VR and 3D graphics development.
              </p>
            </div>
            <a className="Email" href = "mailto: jirawatgot.net@gmail.com">
              Email: jirawatgot.net@gmail.com
            </a>
            <br/>
            <br/>
            <a className="Resume" href="https://github.com/jirawathirunkam/website/blob/master/public/Resume.pdf" target="_blank">
              View Resume
            </a>
            <br/>
            <br/>
            <p className="About"> About </p>
            <p className="AboutContent">
              Interested in Software Development and solving problems.<br/>
              Seeking opportunities to become a full time Software Engineer.
              <br/>
              <br/>
              From building small school projects to developing virtual reality software
               for university research projects, I have the passion to learn new technology
               and utilize them to solve problems more effectively and efficiently.
            </p>
            <p className="Skills"> Skills </p>
            <p className="SkillsContent">
              Proficient in:
              <p className="Proficient">
                - Java, Python, and C++ programming
              </p>
              <p className="Proficient">
                - Unreal Engine 4 development with C++ and Blueprint scripting
              </p>
              <p className="Proficient">
                - Vizard development with Python
              </p>
              <p className="Proficient">
                - Agile and Waterfall Software Development Life Cycle
              </p>
              <p className="Proficient">
                - Jira, Git with GitHub and Bitbucket
              </p>
            </p>
            <p className="SkillsContent">
              <br/>
              Familiar with:
              <p className="Familiar">
                - Unit, Functional, and Integration Software Testing methodology
              </p>
              <p className="Familiar">
                - Web development using React, JavaScript, HTML5, CSS, and SCSS
              </p>
              <p className="Familiar">
                - H2 SQL Relational Database Management System
              </p>
              <p className="Familiar">
                - Blender, 3ds Max, and Photoshop for modeling and digital design.
              </p>
            </p>

            <p className="WorkExperience"> Work Experience </p>
            <p className="WorkExperienceContent">
              VIPER Lab Assistant at U.A. Whitaker College of Engineering,
              Florida Gulf Coast University ( Jan 2018 - current )
            </p>
            <p className="WorkExperienceContent">
              - Developed VR/3D graphics software to help with architecture visualization
            </p>
            <p className="WorkExperienceContent">
              - Operated and maintained the VIPER Laboratory for engineering projects
            </p>
            <br/>
            <p className="WorkExperienceContent">
              Internal Project Assistant at U.A. Whitaker College of Engineering,
              Florida Gulf Coast University ( April 2019 - current )
            </p>
            <p className="WorkExperienceContent">
              - Developing an educational virtual reality simulation of the Water Energy Food (WEF) System
            </p>
            <br/>
            <br/>
          </body>
      </div>
    );
  }
}

export default Homepage;

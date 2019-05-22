import React, {Component} from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
          <body>
            <h1 className="HomeTitle">
              <pre>Jirawat Hirunkam</pre>
               <div className="HomeProfile">
                <img src="Me2.jpg" alt="Jirawat Hirunkam"/>
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
            <a className="Resume" href="Resume.pdf" download>
              Download Resume
            </a>
            <p className="About"> About </p>
            <p className="AboutContent">
              Interested in Software Development and solving problems.<br/>
              Seeking opportunities to become a full time Software Engineer.
              <br/>
              <br/>
              From building small school projects to developing virtual reality simulation software
               for university research projects, I have the passion to learn new technology
               and utilize them to solve problems more effectively and efficiently.
            </p>
            <p className="Skills"> Skills </p>
            <p className="SkillsContent">
              - Java, Python, and C++ programming
            </p>
            <p className="SkillsContent">
              - Unreal Engine 4 development with C++ and Blueprint scripting
            </p>
            <p className="SkillsContent">
              - Vizard development with Python
            </p>
            <p className="SkillsContent">
              - Familiar with Web development using React, JavaScript, HTML5, CSS, and SCSS
            </p>
            <p className="SkillsContent">
              - Practices Agile and Waterfall Software Development Life Cycle
            </p>
            <p className="SkillsContent">
              - Familiar with Unit, Functional, and Integration Software Testing methodoligies
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

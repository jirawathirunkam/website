import React, {Component} from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="container-fluid">
          <body>
            <h1 className="BioTitle">
              Biography
              <p></p>
               <div className="ProfileImage">
                <img src="https://github.com/jirawathirunkam/website/blob/master/public/Me3.jpg?raw=true"/>
               </div>
            </h1>
            <div clasName="BioContent">
              <p >
                Hello! My name is Jirawat Hirunkam.
                I am originally from Thailand and was raised in the rural area of Chiyaphum.
                I had no idea how computers worked until I moved to Phuket at the age of 12.
                With my growing interest in technology, I could not help myself but to go to the local Internet Cafe and play computer games when school was over.
                Although it was not necessarily productive, it introduced me to what I am passionate about today, which is Software Development.
                <br/>
                <br/>
                After moving into the US, I had the opportunity to learn computer programming in high school.
                I never thought about how those video games that I played so much were created until my programming classes taught me how to code.
                I enjoyed building little projects with Visual Basic and C# which peaked my interest
                 to pursue a degree in Software Engineering at Florida Gulf Coast University.
                <br/>
                <br/>
                During my time as a Software Engineering student, I had the opportunity to learn more than just the curriculum that was offered.
                I worked as a VIPER Lab Assistant for U.A. Whitaker College of Engineering to research and develop virtual reality
                software projects throughout my junior and senior year of university. Although the work was challenging while balancing classwork, I am so glad for the opportunity and was able to learn so much
                about VR and 3D graphics development that can be used to solve real world problems.
                <br/>
                <br/>
              </p>
            </div>
            <br/>
          </body>
      </div>
    );
  }
}

export default Bio;

import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid">
          <body>
            <h1 className="ProjectPageTitle">
              Software Projects
              <p></p>
              <div className="EagleExpoDemoPicture">
                <img src="https://github.com/jirawathirunkam/website/blob/master/public/EagleExpoDemo.JPG?raw=true"/>
              </div>
            </h1>
            <p className="EagleExpoDemo"> Eagle Expo Demo </p>
            <p> From the video, the news discussed the other project related to hurricane,
              but the demo presented was the Eagle Expo Demo, a virtual reality Demo that focuses on
               interactively visualization the architecture of a construction project.
            </p>
            <br/>
            <iframe className="EagleExpoDemoVideo"
             src="https://drive.google.com/file/d/1efeRGHd8pxeq61jJ9IYLmRkhGfrpJdFk/preview"></iframe>
          </body>
      </div>
    );
  }
}

export default Projects;

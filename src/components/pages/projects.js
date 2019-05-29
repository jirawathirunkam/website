import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid">
          <body className= "projectPageBody">
            <h1 className="ProjectPageTitle">
              Software Projects
              <p></p>
              <div class="sidenav">
                <a href="#Eagle_Expo_Demo">Eagle Expo Demo</a>
                <a href="#FGCU_Flood_Sim">Real Time FGCU Fluid Dynamic Flood Simulation</a>
                <a href="#FGCU_VR_Flood">FGCU VR Flood Sim</a>
                <a href="#ADAM">ADAM</a>
              </div>
            </h1>
            <a name="Eagle_Expo_Demo"></a>
            <p className="ProjectTitles"> Eagle Expo Demo</p>
            <p> I was on WINK News talking about virtual reality and the VIPER Lab where I worked at and
            the demo presented was the Eagle Expo Demo, a virtual reality Demo that focuses on
            interactively visualizing the architecture of a construction project.
            The purpose of this project is to help engineers be able to observe 3D models in an immersive environment which helps in detecting defects and it is also a good way of presenting
            the construction project to a client before it is built.
            </p>
            <br/>
            <iframe className="GoogleVid"
             src="https://drive.google.com/file/d/1efeRGHd8pxeq61jJ9IYLmRkhGfrpJdFk/preview">
            </iframe>
            <p className="border"></p>
            <a name="FGCU_Flood_Sim"></a>
            <p className="ProjectTitles"> Real Time FGCU Fluid Dynamic Flood Simulation</p>
            <p> This project's objective was to build a real time flood simulation in 3D graphics. The goal is to provide a realistic visual simulation of flood effect on
            a 3D mapped model of Florida Gulf Coast University campus. The project was also a research that studies the limitation of real time fluid dynamics engine and its application.
            The technology used was Unreal Engine 4 (a game engine by Epic Games) with Nvidia Cataclysm (a fluid dynamic engine powered by Nvidia GPU)
            </p>
            <iframe className="GoogleVid"
              src="https://drive.google.com/file/d/1joPygOMq34JQMkDLi7iPse3jOU1lUpPo/preview"></iframe>
            <p className="border"></p>
            <a name="FGCU_VR_Flood"></a>
            <p className="ProjectTitles"> FGCU VR Flood Simulation</p>
            <p>
              This was a senior project that had 7 software engineering students involved including myself as the team leader.
              The purpose of this project was to convert real hydrology flood result from a scientific hydrodynamic software called ICPR, into
              virtual reality. The goal is to immerse users into flood sceneraios caused by hurricanes such as Irma.
              This is a research and an educational tool that is useful for the College of Engineering at FGCU to study flood risks and prepare for them.
              <br/>
              <br/>
              There are many technologies involved in the development of this projet.
              The game engine utilized was Unreal Engine 4 and the photogramettry of campus
              was done using a DJI Drone and DroneDeploy cloud software.
            </p>
            <iframe className="GoogleVid"
              src="https://drive.google.com/file/d/1DIxo1j63wwHRtetFUUw2CwvyAQtL7rL6/preview">
            </iframe>
            <p className="border"></p>
            <a name="ADAM"></a>
            <p className="ProjectTitles"> Automatic Directional Antenna Mechanism (ADAM)</p>
            <p> ADAM is a project that has the purpose of solving the problem of slow internet service through LTE.
              The objective of the device is to have it detect nearby cellular signals and searches for the best signal
              to be applified.
              <br/>
              <br/>
              There are many components to the ADAM device and that is including software and hardware. There is an Android
              application that communicates LTE signal from an Android phone to the Raspberry Pi. The Raspberry Pi is responsible
              for moving the servos which moves the antenna array that receives the frequency signals of celluar signals. The Raspberry Pi
              makes use of the signal quality and antenna positions to find the optimal direction for the antenna to provide the best LTE
              service for nearby cellular devices.
            <br/>
            <br/>
            <iframe className="AdamVideo"
              src="https://www.youtube.com/embed/vRzqHTamybg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
            <p> There is a version 2 of the ADAM device. It was a mantenance project but the team ended up rebuilding
             a lot of the components so that there would be huge improvements of the device's usability and efficiency.

            <br/>
            <br/>
            <iframe className="AdamVideo"
              src="https://www.youtube.com/embed/FarrLuJQUio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            </p>
            <br/>
            <br/>
          </body>

      </div>
    );
  }
}

export default Projects;

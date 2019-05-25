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
                <a href="#FGCU_Flood_Sim">FGCU Real-Time Flood Sim</a>
                <a href="#FGCU_VR_Flood">FGCU VR Flood Sim</a>
                <a href="#ADAM">ADAM</a>
              </div>
            </h1>
            <a name="Eagle_Expo_Demo"></a>
            <p className="ProjectTitles"> Eagle Expo Demo</p>
            <p> I was on WINK News talking about virtual reality and the VIPER Lab where I worked at and
            the demo presented was the Eagle Expo Demo, a virtual reality Demo that focuses on
            interactively visualizing the architecture of a construction project.
            The purpose of this project is to help engineers be able to observe 3D data in an immersive environment which helps in detecting defects and it is also a good way of presenting
            the construction project to a client before it is built.
            </p>
            <br/>
            <iframe className="EagleExpoDemoVideo"
             src="https://drive.google.com/file/d/1efeRGHd8pxeq61jJ9IYLmRkhGfrpJdFk/preview">
            </iframe>
            <p className="border"></p>
            <a name="FGCU_Flood_Sim"></a>
            <p className="ProjectTitles"> FGCU Real-Time Flood Simulation</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <p className="border"></p>
            <a name="FGCU_VR_Flood"></a>
            <p className="ProjectTitles"> FGCU VR Flood Simulation</p>
            <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <p className="border"></p>
            <a name="ADAM"></a>
            <p className="ProjectTitles"> Automatic Directional Antenna Mechanism (ADAM)</p>
            <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>

            <br/>
            <br/>
          </body>

      </div>
    );
  }
}

export default Projects;

import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header>
        <div className="background">

          <div className="Home">
            <br></br>
            <Link to='/website'><img src="homeWhite.png" width="50" height="50"/></Link>
          </div>
          <div className="Home2">
            <br></br>
            <Link to='/website'><img src="homeGreen.png" width="50" height="50"/></Link>
          </div>
        </div>
        <nav>
          <ul>
            <li className="first">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="last">
              <Link to="/Bio">Bio</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;

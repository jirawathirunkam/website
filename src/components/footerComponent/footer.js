import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="IG_icon">
          <a href="https://www.instagram.com/jirawatgot/"
          target="_blank"><img src="IGicon.png" width="35" height="35"/></a>
        </div>
        <div className="IG_iconGreen">
          <a href="https://www.instagram.com/jirawatgot/"
          target="_blank"><img src="IGiconGreen.png" width="35" height="35"/></a>
        </div>
        <div className="FB_icon">
          <a href="https://www.facebook.com/jirawat.hirunkam"
          target="_blank"><img src="FBicon.png" width="35" height="35"/></a>
        </div>
        <div className="FB_iconGreen">
          <a href="https://www.facebook.com/jirawat.hirunkam"
          target="_blank"><img src="FBiconGreen.png" width="35" height="35"/></a>
        </div>
        <div className="LI_icon">
          <a href="https://www.linkedin.com/in/jirawat-hirunkam-97b27a173/"
          target="_blank"><img src="LIicon.png" width="35" height="35"/></a>
        </div>
        <div className="LI_iconGreen">
          <a href="https://www.linkedin.com/in/jirawat-hirunkam-97b27a173/"
          target="_blank"><img src="LIiconGreen.png" width="35" height="35"/></a>
        </div>
      </footer>

    );
  }
}

export default Footer;

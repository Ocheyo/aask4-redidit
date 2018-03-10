import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="team">
          <p>Made at Hack Reactor</p>
          <p>Team AASK4 -</p>
          <li>Aaron Valdez - valdez2010@gmail.com</li>
          <li>Alex Jaynes - dr.ocheyo@gmail.com</li>
          <li>Kin Chan - xkinchanx@gmail.com</li>
          <li>Shayne Song - qiangsong889@yahoo.com</li>
        </ul>
        <div className="stack">
          <table>
            <tr>
              <img src="./images/postgres-logo.png" alt="PostgreSQL Logo" />
              <img src="./images/nodejs-logo.png" alt="Node.js Logo" />
              <img src="./images/firebase-logo.png" alt="Firebase Logo" />
            </tr>
            <tr>
              <img src="./images/react-logo.png" alt="React Logo" />
              <img src="./images/redux-logo.png" alt="Redux Logo" />
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Footer;

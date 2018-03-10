import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="team">
          <li>Aaron Valdez - valdez2010@gmail.com</li>
          <li>Alex Jaynes - dr.ocheyo@gmail.com</li>
          <li>Kin Chan - xkinchanx@gmail.com</li>
          <li>Shayne Song - qiangsong889@yahoo.com</li>
        </ul>
        <table className="stack">
          <tr>
            <img
              src="../../dist/images/postgres-logo.png"
              alt="'PostgreSQL Logo'"
            />
            <img src="../../dist/images/nodejs-logo.png" alt="'Node.js Logo'" />
          </tr>
          <tr>
            <img src="../../dist/images/react-logo.png" alt="React Logo" />
            <img src="../../dist/images/redux-logo.png" alt="Redux Logo" />
          </tr>
          <tr>
            <img
              src="../../dist/images/firebase-logo.png"
              alt="Firebase Logo"
            />
          </tr>
        </table>
      </div>
    );
  }
}

export default Footer;

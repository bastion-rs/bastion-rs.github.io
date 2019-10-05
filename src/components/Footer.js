import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/bastion-rs"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Bastion Project Developers</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;

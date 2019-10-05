import React from "react";

import logo from "../assets/images/bastion-logo.png";

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="image major">
            <img src={logo} style={{ width: 250, height: 250 }} alt="" />
          </span>
          <h1>
            <strong>Bastion</strong>
            <br />
            Fault-tolerant runtime for Rust applications
          </h1>
          <p>
            Bastion is a fault-tolerant runtime designed to
            <br />
            recover from faults and provides persistent, available, async
            runtime.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Explore
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;

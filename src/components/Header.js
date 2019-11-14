import React from "react";
import GitHubButton from "react-github-btn";

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
            Highly-available Distributed Fault-tolerant Runtime
          </h1>
          <p>
            Bastion is a highly-available, fault-tolerant runtime system
            <br />
            with dynamic dispatch oriented lightweight process model.
          </p>
          <p>
          <GitHubButton href="https://github.com/bastion-rs/bastion" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="GitHub">GitHub</GitHubButton> ➖ <GitHubButton href="https://github.com/bastion-rs/bastion" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star bastion-rs/bastion on GitHub">Star</GitHubButton> ➖ <GitHubButton href="https://github.com/sponsors/bastion-rs" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @bastion-rs on GitHub">Sponsor</GitHubButton> ➖ <GitHubButton href="https://github.com/bastion-rs/bastion/subscription" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-eye" data-size="large" aria-label="Watch bastion-rs/bastion on GitHub">Watch</GitHubButton>
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

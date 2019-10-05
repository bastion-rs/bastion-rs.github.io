import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";

import arch from "../assets/images/bastion-arch.png";

class Homepage extends React.Component {
  render() {
    const siteTitle = "Bastion";

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Runtime Features</h2>
              </header>
              <p>
                Bastion is a fault-tolerant runtime which is designed for
                recovering from faults based on the supervision strategies that
                you've passed. <br />
                It is designed to provide persistent runtime for applications
                which need to be highly-available.
              </p>
              <ul>
                <li>Message-based communication</li>
                <li>Runtime fault-tolerance</li>
                <li>Supervision strategies</li>
                <li>Process lifecycles</li>
              </ul>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={arch} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code"></span>
                </li>
                <li>
                  <span className="icon style2 major fa-bolt"></span>
                </li>
                <li>
                  <span className="icon style3 major fa-camera-retro"></span>
                </li>
                <li>
                  <span className="icon style4 major fa-cog"></span>
                </li>
                <li>
                  <span className="icon style5 major fa-desktop"></span>
                </li>
                <li>
                  <span className="icon style6 major fa-calendar"></span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Adipiscing amet consequat</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>
                Learn more about <strong>Bastion</strong>
              </h2>
            </header>
            <p>
              Take a look at the examples, get involved in project, read the
              documentation
            </p>
            <ul className="actions uniform">
              <li>
                <a href="https://docs.rs/bastion" className="button">
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bastion-rs/bastion/tree/master/examples"
                  className="button special"
                >
                  Examples
                </a>
              </li>
              <li>
                <a href="https://discord.gg/UUVsusb" className="button">
                  Join our Discord
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;

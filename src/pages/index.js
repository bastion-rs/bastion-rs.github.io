import React from "react";
import Helmet from "react-helmet";
import Prism from "prismjs";

import "prismjs/themes/prism.css";
import "prismjs/components/prism-rust";

import Layout from "../components/layout";

import arch from "../assets/images/bastion-arch.png";

class Homepage extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const siteTitle = "Bastion";
    const fort_example = `#[fort::root]
fn main() {
    println!("Running in Bastion runtime!");
}`;
    const bastion_example = `use bastion::prelude::*;

fn main() {
    Bastion::platform();

    // Define, calculate or prepare messages to be sent to the processes. 
    let message = String::from("Some message to be passed");

    Bastion::spawn(
        |context: BastionContext, msg: Box<dyn Message>| {
            // Message can be selected with receiver here. Take action!
            receive! { msg,
                String => |e| { println!("Received string :: {}", e)},
                i32 => |e| {println!("Received i32 :: {}", e)},
                _ => println!("No message as expected. Default")
            }

            // Do some processing in body
            println!("root supervisor - spawn_at_root - 1");

            // Rebind to the system
            context.hook();
        },
        message,
    );

    Bastion::start()
}`;

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Runtime Summary</h2>
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
            <div className="col-12">
              <header className="major">
                <h2>Features</h2>
              </header>
              <p>Bastion has awesome features.</p>
            </div>

            <div className="col-4">
              <h3>Message-based communication</h3>
              <p>
                It makes this project a lean mesh of actor system. Without web
                servers, weird shenanigans, forced trait implementations, and
                static dispatch.
              </p>
            </div>
            <div className="col-4">
              <h3>Runtime fault-tolerance</h3>
              <p>
                It makes a good candidate for small scale distributed system
                code. If you want to smell of Erlang and it's powerful aspects
                in Rust. That's it!
              </p>
            </div>
            <div className="col-4">
              <h3>Supervision</h3>
              <p>
                It makes easy to manage lifecycles. Kill your application in
                certain condition or restart you subprocesses whenever a certain
                condition met. All up to you. And it should be up to you.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Examples</h2>
              </header>
            </div>
            <div className="col-12">
              <h4>
                In a short way, you can use{" "}
                <a href="https://github.com/bastion-rs/fort">fort</a> the
                proc-macro for Bastion:
              </h4>
            </div>
            <div className="col-12">
              <pre className="language-rust">
                <code className="language-rust">{fort_example}</code>
              </pre>
            </div>
            <div className="col-12">
              <h4>Or, you can configure every piece by yourself:</h4>
            </div>
            <div className="col-12">
              <pre className="language-rust">
                <code className="language-rust">{bastion_example}</code>
              </pre>
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
              Read the documentation, take a look at the examples, get involved
              in project
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
                <a href="https://discord.gg/DqRqtRT" className="button">
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

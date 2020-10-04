import React from "react";
import Helmet from "react-helmet";
import Prism from "prismjs";

import "prismjs/themes/prism.css";
import "prismjs/components/prism-rust";

import Layout from "../components/layout";

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
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;

fn main() {
    Bastion::init();

    let started = AtomicBool::new(false);
    let started = Arc::new(started);

    Bastion::children(|children| {
        children.with_exec(move |ctx: BastionContext| {
            let started = started.clone();
            async move {
                println!("Started!");

                if started.swap(true, Ordering::SeqCst) {
                    println!("Already started once. Stopping...");

                    // This will ask the system to stop itself...
                    Bastion::stop();
                    // ...and this will stop this child immediately...
                    return Ok(());
                    // Note that if Err(()) was returned, the child would have been
                    // restarted (and if the system wasn't stopping).
                }

                // This will return None.
                let try_recv = ctx.try_recv().await;
                println!("try_recv.is_some() == {}", try_recv.is_some()); // false

                let answer = ctx
                    .current()
                    .ask("Hello World!")
                    .expect("Couldn't send the message.");

                msg! { ctx.recv().await?,
                    msg: &'static str =!> {
                        println!(r#"msg == "Hello World!" => {}"#, msg == "Hello World!"); // true
                        let _ = answer!("Goodbye!");
                    };
                    // This won't happen because this example
                    // only "asks" a &'static str...
                    _: _ => ();
                }

                msg! { answer.await?,
                    msg: &'static str => {
                        println!(r#"msg == "Goodbye!" => {}"#, msg == "Goodbye!"); // true
                    };
                    // This won't happen because this example
                    // only answers a &'static str...
                    _: _ => ();
                }

                // Panicking will restart the children group.
                panic!("Oh no!");
            }
        })
    })
    .expect("Couldn't start a new children group.");

    Bastion::start();
    Bastion::block_until_stopped();
}
`;

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>What is Bastion?</h2>
              </header>
              <p>
                Bastion is a highly-available, fault-tolerant runtime system
                with dynamic dispatch oriented lightweight process model. It
                supplies actor model like concurrency with lightweight process
                implementation and utilize all the system resources efficiently
                with giving promise of at-most-once message delivery guarantee.
              </p>
              <ul>
                <li>
                  Message-based communication makes this project a lean mesh of
                  actor system.
                </li>
                <li>
                  Runtime fault-tolerance makes it a good candidate for
                  distributed systems.
                </li>
                <li>
                  Completely asynchronous runtime with NUMA-aware and
                  cache-affine SMP executor.
                </li>
                <li>Supervision system makes it easy to manage lifecycles.</li>
              </ul>
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
                It makes it a good candidate for small scale distributed system
                code. If you want the smell of Erlang and the powerful aspects
                of Rust. That's it!
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
              in the project
            </p>
            <ul className="actions uniform">
              <li>
                <a href="https://docs.rs/bastion" className="button special">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://blog.bastion.rs" className="button">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bastion-rs/bastion/tree/master/src/bastion/examples"
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

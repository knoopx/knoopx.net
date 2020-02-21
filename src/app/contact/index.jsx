import React from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa"

import { Container } from "ui/layout"

const Contact = (props) => (
  <ScrollableAnchor id="contact">
    <div className="bg-black-80 b--white-10 bb white-80">
      <Container size="w-75-l">
        <div className="w-100 w-50-ns fl mb4 pr5-ns tc tl-l tl-m">
          <header className="mb4">
            <h1 className="f1 mb1 mt0-l mt0-m white">Contact</h1>
            <h2 className="f3 fw4 mt1 white-80">Let's get in touch</h2>
          </header>
          <div>
            <p className="f4 lh-copy mb4 white-50">
              Do you like what I do? Don't hesitate to contact me about your
              project, idea or requirements.
            </p>
            <div className="cf nl2 nr2">
              <a
                className="dib pa2 white"
                href="https://www.linkedin.com/in/victormartinezgarcia/"
              >
                <FaLinkedin size={48} />
              </a>
              <a className="dib pa2 white" href="http://github.com/knoopx">
                <FaGithub size={48} />
              </a>
              <a className="dib pa2 white" href="http://twitter.com/knoopx">
                <FaTwitter size={48} />
              </a>
              <a
                className="dib pa2 white"
                href="http://stackoverflow.com/users/62368/knoopx"
              >
                <FaStackOverflow size={48} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-100 w-50-ns fl mb4">
          <form
            className="measure"
            action="https://formspree.io/contact@knoopx.net"
            method="post"
          >
            <div className="mb3">
              <label htmlFor="name" className="b db f6 mb2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-100 border-box b--white-20 ba br2 db mb2 pa2"
              />
            </div>
            <div className="mb3">
              <label htmlFor="name" className="b db f6 mb2">
                E·mail
              </label>
              <input
                type="email"
                name="_replyto"
                required
                className="w-100 border-box b--white-20 ba br2 db mb2 pa2"
              />
            </div>
            <div className="mb4">
              <label htmlFor="message" className="b db f6 mb2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-100 border-box b--white-20 ba br2 db mb2 pa2"
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="w-100 bg-transparent b b--white ba ba-2 br-pill db f5 input-reset ph5 pointer pv2 white"
            />
          </form>
        </div>
      </Container>
    </div>
  </ScrollableAnchor>
)

export default Contact

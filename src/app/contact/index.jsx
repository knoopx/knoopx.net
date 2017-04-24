import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Container } from 'ui/layout'

import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaGithub from 'react-icons/lib/fa/github'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaStackOverflow from 'react-icons/lib/fa/stack-overflow'

export default class Contact extends React.PureComponent {
  render() {
    return (
      <ScrollableAnchor id="contact">
        <div className="white-80 bg-black-80 bb b--white-10">
          <Container size="w-75-l">
            <div className="fl w-100 w-50-ns pr5-ns mb4 tc tl-m tl-l">
              <header className="mb4">
                <h1 className="f1 mb1 white mt0-m mt0-l">Contact</h1>
                <h2 className="f3 mt1 fw4 white-80">Let's get in touch</h2>
              </header>
              <div>
                <p className="lh-copy f4 white-50 mb4">
                  Do you like what I do? Don't hesitate to contact me about your project, idea or requirements.
                </p>
                <div className="cf nl2 nr2">
                  <a className="dib white pa2" href="https://www.linkedin.com/in/victormartinezgarcia/"><FaLinkedin size={48} /></a>
                  <a className="dib white pa2" href="http://github.com/knoopx"><FaGithub size={48} /></a>
                  <a className="dib white pa2" href="http://twitter.com/knoopx"><FaTwitter size={48} /></a>
                  <a className="dib white pa2" href="http://stackoverflow.com/users/62368/knoopx"><FaStackOverflow size={48} /></a>
                </div>
              </div>
            </div>

            <div className="fl w-100 w-50-ns mb4">
              <form className="measure" action="https://formspree.io/knoopx@gmail.com" method="post">
                <div className="mb3">
                  <label htmlFor="name" className="f6 b db mb2">Name</label>
                  <input type="text" name="name" required className="db border-box w-100 ba b--white-20 pa2 br2 mb2" />
                </div>
                <div className="mb3">
                  <label htmlFor="name" className="f6 b db mb2">E·mail</label>
                  <input type="email" name="_replyto" required className="db border-box w-100 ba b--white-20 pa2 br2 mb2" />
                </div>
                <div className="mb4">
                  <label htmlFor="message" className="f6 b db mb2">Message</label>
                  <textarea name="message" required rows="6" className="db border-box w-100 ba b--white-20 pa2 br2 mb2" />
                </div>
                <input type="submit" value="Send" className="db input-reset bg-transparent pointer ph5 pv2 white b br-pill ba ba-2 b--white w-100" />
              </form>
            </div>
          </Container>
        </div>
      </ScrollableAnchor>
    )
  }
}

import React from "react"
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa"

import { Container } from "ui/layout"

const Contact = () => (
  <section id="contact">
    <div className="border-b-2 border-gray-7 bg-gray-8 text-gray-2">
      <Container className="py-12 lg:gap-12 lg:grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <header className="mb-8">
            <h1 className="mb-1 mb-2 lg:mt-0 text-5xl text-white font-bold leading-none">
              Contact
            </h1>
            <h2 className="mt-1 text-2xl text-gray-4 font-normal leading-none">
              Let's get in touch
            </h2>
          </header>

          <div className="flex-auto mb-8">
            <p className="mb-8 text-gray-4 text-xl leading-normal">
              Do you like what I do? Don't hesitate to contact me about your
              project, idea or requirements.
            </p>
            <div className="-m-2">
              <a
                className="inline-block p-2 text-white"
                href="https://www.linkedin.com/in/victormartinezgarcia/"
              >
                <FaLinkedin size={48} />
              </a>
              <a
                className="inline-block p-2 text-white"
                href="http://github.com/knoopx"
              >
                <FaGithub size={48} />
              </a>
              <a
                className="inline-block p-2 text-white"
                href="http://twitter.com/knoopx"
              >
                <FaTwitter size={48} />
              </a>
              <a
                className="inline-block p-2 text-white"
                href="http://stackoverflow.com/users/62368/knoopx"
              >
                <FaStackOverflow size={48} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <form
            className="max-w-md"
            action="https://formspree.io/contact@knoopx.net"
            method="post"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="block w-full mb-2 p-2 border border-box rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-bold">
                E·mail
              </label>
              <input
                type="email"
                name="_replyto"
                required
                className="block w-full mb-2 p-2 border border-box rounded"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block mb-2 text-sm font-bold">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="block w-full mb-2 p-2 border border-box rounded"
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="appearance-none cursor-pointer block w-full px-16 py-2 border border-white rounded-full bg-transparent text-base text-white font-bold ba-2"
            />
          </form>
        </div>
      </Container>
    </div>
  </section>
)

export default Contact

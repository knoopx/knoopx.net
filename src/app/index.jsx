import React from 'react'

import { inject } from 'mobx-react'
import { Divider } from 'ui/layout'
import { Helmet } from 'react-helmet'
import Header from './header'
import About from './about'
import Skills from './skills'
import Experience from './experience'
import Talks from './talks'
import OpenSource from './open-source'
import Recommendations from './recommendations'
import Contact from './contact'
import Footer from './footer'


@inject('baseColor')
export default class App extends React.PureComponent {
  render() {
    return (
      <div className="sans-serif black-70 overflow-hidden">
        <Helmet>
          <meta name="theme-color" content={this.props.baseColor[6]} />
        </Helmet>

        <Header />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Recommendations />
        <Divider />
        <OpenSource />
        <Divider />
        <Talks />
        <Divider />
        <Contact />
        <Footer />
      </div>
    )
  }
}

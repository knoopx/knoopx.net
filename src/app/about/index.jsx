import React from 'react'
import PopAnimation from 'ui/pop-animation'
import { Container } from 'ui/layout'
import { inject } from 'mobx-react'

@inject('baseColor')
export default class About extends React.PureComponent {
  render() {
    return (
      <div className="white ts" style={{ backgroundColor: this.props.baseColor[6] }}>
        <Container>
          <PopAnimation>
            <div className="flex flex-wrap-s flex-wrap-m justify-center">

              <div className="order-1 order-0-l">
                <img width={300} height={300} className="br-100 ba bw2" src={require('./me.jpg?max-width=300')} />
              </div>

              <div className="order-0 order-1-l pl6-l">
                <header className="mb4">
                  <h1 className="f1 mb1 mt0">Hello, I'm Víctor</h1>
                  <h2 className="f3 mt1 fw4">a full-stack web developer from Barcelona.</h2>
                </header>

                <div className="lh-copy measure f3 fw3">
                  <p>I'm a self-taught <span className="fw6">computer hacker</span>. I build <span className="fw6">successful</span> Internet businesses with the <span className="fw6">best-of-breed</span> languages and libraries.</p>
                  {/* <p>I deliver <span className="fw6">engaging</span> user experiences in a <span className="fw6">timely manner</span>,<br />building both <span className="fw6">back-end</span> and <span className="fw6">front-end</span>.</p> */}
                  <p>I develop both <span className="fw6">back-end</span> and <span className="fw6">front-end</span> and deliver <span className="fw6">engaging</span> user experiences in a <span className="fw6">timely manner</span>.</p>
                </div>
              </div>

            </div>
          </PopAnimation>
        </Container>
      </div>
    )
  }
}

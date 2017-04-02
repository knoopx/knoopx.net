import React from 'react'

import { observable } from 'mobx'
import { observer } from 'mobx-react'

import FaStar from 'react-icons/lib/fa/star'
import FaCodeFork from 'react-icons/lib/fa/code-fork'

import Activity from 'react-activity'

import Link from 'ui/link'

@observer
export default class Projects extends React.PureComponent {
  static defaultProps = {
    limit: 8,
    username: 'knoopx',
  }

  @observable repos = []
  @observable isLoading = false
  @observable hasError = false

  componentWillMount() {
    this.fetch()
  }

  fetch() {
    this.isLoading = true
    fetch(`https://api.github.com/users/${this.props.username}/repos?sort=pushed`)
      .then(res => (
        res.json().then((json) => {
          this.isLoading = false
          this.hasError = false
          this.repos = json
        })
      )).catch((err) => {
        console.error(err)
        this.hasError = true
        this.isLoading = false
      })
  }

  render() {
    if (this.isLoading) {
      return (
        <div className="flex justify-center items-center h4">
          <Activity.Bounce size={22} />
        </div>
      )
    }

    if (this.hasError) {
      return (
        <div className="mb3 mb4-ns flex justify-center items-center ba b--red br2">
          <h5 className="red">Unable to fetch repositories from GitHub</h5>
        </div>
      )
    }

    const repos = this.repos
      .filter(repo => !repo.fork)
      .slice(0, this.props.limit)

    return (
      <div className="ba br2 bg-white b--black-10 mb3 mb4-ns">
        {repos.map(repo => (
          <div key={repo.id} className="pa3 bb b--black-10">
            <div>
              <Link href={repo.html_url}>{repo.name}</Link>
              <p className="lh-copy measure f6 black-70 mt1 truncate">{repo.description}</p>
            </div>
            <div className="dt f6 black-40 dt--fixed">
              <div className="dtc">{repo.language}</div>
              <div className="dtc">
                <div className="flex justify-end items-end">
                  <FaStar className="mr1" />
                  <span className="mr2">{repo.stargazers_count}</span>
                  <FaCodeFork className="mr1" />
                  {repo.forks_count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

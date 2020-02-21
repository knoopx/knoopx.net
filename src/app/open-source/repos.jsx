import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import { FaStar, FaCode } from "react-icons/fa"
import { Bounce } from "react-activity"

import Link from "ui/link"

const Projects = ({ limit = 8, username = "knoopx" }) => {
  const [hasError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])

  const fetchRepos = () => {
    setLoading(true)
    fetch(`https://api.github.com/users/${username}/repos?sort=pushed`)
      .then((res) =>
        res.json().then((json) => {
          setLoading(false)
          setError(false)
          setRepos(json)
        }),
      )
      .catch((err) => {
        console.error(err)
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h4">
        <Bounce size={22} />
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="flex items-center justify-center b--red ba br2 mb3 mb4-ns">
        <h5 className="red">Unable to fetch repositories from GitHub</h5>
      </div>
    )
  }

  const sourceRepos = repos.filter((repo) => !repo.fork).slice(0, limit)

  return (
    <div className="bg-white b--black-10 ba br2 mb3 mb4-ns">
      {sourceRepos.map((repo) => (
        <div key={repo.id} className="b--black-10 bb pa3">
          <div>
            <Link href={repo.html_url}>{repo.name}</Link>
            <p className="truncate black-70 f6 lh-copy measure mt1">
              {repo.description}
            </p>
          </div>
          <div className="dt--fixed black-40 dt f6">
            <div className="dtc">{repo.language}</div>
            <div className="dtc">
              <div className="flex items-end justify-end">
                <FaStar className="mr1" />
                <span className="mr2">{repo.stargazers_count}</span>
                <FaCode className="mr1" />
                {repo.forks_count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default observer(Projects)

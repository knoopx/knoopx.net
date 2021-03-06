import React, { useState, useEffect } from "react"
import { MdStar, MdShare, MdWarning } from "react-icons/md"

import Spinner from "ui/spinner"
import Link from "ui/link"
import { useTheme } from "hooks/useTheme"

const Projects = ({ limit = 8, username = "knoopx" }) => {
  const { baseColor } = useTheme()
  const [hasError, setError] = useState(false)
  const [isLoading, setLoading] = useState(true)
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
      <div className="relative" style={{ paddingBottom: "100%" }}>
        <div className="absolute flex items-center justify-center h-full w-full">
          <Spinner className="bg-gray-5" size={48} />
        </div>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="flex items-center justify-center mb-4 p-4 border border-red-9 rounded bg-red-5">
        <h5 className="flex items-center text-white">
          <MdWarning className="inline mr-4 text-3xl" />
          Unable to fetch repositories from GitHub
        </h5>
      </div>
    )
  }

  const sourceRepos = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, limit)

  return (
    <>
      <div
        className="px-4 py-2 border rounded rounded-b-none text-white font-medium ts"
        style={{ backgroundColor: baseColor[6], borderColor: baseColor[8] }}
      >
        GitHub Activity
      </div>
      <div className="mb-4 sm:mb-8 border border-gray-4 border-t-0 rounded rounded-t-none bg-white">
        {sourceRepos.map((repo) => (
          <div key={repo.id} className="p-4 border-b border-gray-4">
            <div>
              <Link href={repo.html_url}>{repo.name}</Link>
              <p className="max-w-md mt-1 text-sm leading-normal truncate gray-7">
                {repo.description}
              </p>
            </div>
            <div className="flex text-gray-5 text-sm">
              <div className="flex-auto">{repo.language}</div>
              <div className="flex items-center justify-end">
                <MdStar className="mr-1" />
                <span className="mr-2">{repo.stargazers_count}</span>
                <MdShare className="mr-1" />
                {repo.forks_count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects

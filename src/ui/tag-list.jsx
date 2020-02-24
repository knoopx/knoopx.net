import React from "react"
import classNames from "classnames"

import Pill from "./pill"

const TagList = ({ tags }) => {
  return (
    <div className="">
      {tags.sort().map((tag, i) => (
        <div
          key={tag}
          className={classNames("inline-block my-1", { "mr-2": i !== tags.length })}
        >
          <Pill>{tag}</Pill>
        </div>
      ))}
    </div>
  );
}

export default TagList

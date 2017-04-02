import React from 'react'
import classNames from 'classnames'

import Pill from './pill'

export default function TagList({ tags }) {
  return (
    <div className="cf">
      {tags.sort().map((tag, i) => <div key={tag} className={classNames('dib mv1', { mr2: i !== tags.length })}><Pill>{tag}</Pill></div>)}
    </div>
  )
}

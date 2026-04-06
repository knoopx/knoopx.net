import classNames from "classnames";

import Pill from "./pill";

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <div>
      {tags.sort().map((tag, i) => (
        <div
          key={tag}
          className={classNames("inline-block my-1", {
            "mr-2": i !== tags.length - 1,
          })}
        >
          <Pill>{tag}</Pill>
        </div>
      ))}
    </div>
  );
};

export default TagList;

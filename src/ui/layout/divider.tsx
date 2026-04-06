import OpenColor from "open-color";

interface DividerProps {
  borderWidth?: number;
  borderColor?: string;
}

const Divider = ({
  borderWidth = 1,
  borderColor = OpenColor.gray[3],
}: DividerProps) => {
  return (
    <hr
      style={{
        margin: 0,
        border: "none",
        borderTopStyle: "solid",
        borderTopWidth: borderWidth,
        borderTopColor: borderColor,
      }}
    />
  );
};

export { Divider };

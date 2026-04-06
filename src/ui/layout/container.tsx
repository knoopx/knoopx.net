import { forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames("p-4 lg:p-16 container mx-auto", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export { Container };

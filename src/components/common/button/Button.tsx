import clsx from "clsx";
import React, { ReactNode } from "react";

export type ButtonType = "default";

interface BaseButtonProps {
  children?: ReactNode;
  type?: ButtonType;
}

export type ButtonProps = BaseButtonProps;

const Button = (props: ButtonProps) => {
  const { children, type = "default" } = props;

  return (
    <button
      className={clsx(`btn btn-${type}`)}
      style={{ border: "none", background: "green" }}
    >
      {children}
    </button>
  );
};

export default Button;

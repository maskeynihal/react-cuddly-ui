import clsx from "clsx";
import React, { ReactNode } from "react";

import styles from "./link.module.scss";

interface BaseLinkProps {
  children?: ReactNode;
  href: string;
}

export type LinkProps = BaseLinkProps;

const Link = (props: LinkProps) => {
  const { children, href, ...rest } = props;

  return (
    <a href={href} className={clsx(styles.link)} {...rest}>
      {children}
    </a>
  );
};

export default Link;

import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import routes from "../../../utils/routes";
import classes from "./Sidebar.module.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const Sidebar = ({ open, handleClose }: Props) => (
  <div
    className={clsx(classes.root, !open && classes.hidden)}
    role="button"
    tabIndex={0}
    onClick={handleClose}
    onKeyPress={(event) => event.stopPropagation()}
  >
    <div
      className={classes.sidebar}
      role="button"
      tabIndex={0}
      onClick={(event) => event.stopPropagation()}
      onKeyPress={(event) => event.stopPropagation()}
    >
      <h1 className={classes.logo}>utils-fyi</h1>
      {routes.map((route) => (
        <Link key={route.link} href={route.link} prefetch={false}>
          <button className={classes.route} onClick={handleClose} tabIndex={0}>
            {route.title}
          </button>
        </Link>
      ))}
    </div>
  </div>
);

export default Sidebar;

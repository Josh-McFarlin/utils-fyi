import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import routes from "../../../utils/routes";
import classes from "./Sidebar.module.scss";

const Sidebar = ({ open, handleClose }) => (
  <div
    className={clsx(classes.root, !open && classes.hidden)}
    onClick={handleClose}
  >
    <div
      className={classes.sidebar}
      onClick={(event) => event.stopPropagation()}
    >
      <h1 className={classes.logo}>utils-fyi</h1>
      {routes.map((route) => (
        <Link key={route.link} href={route.link} prefetch={false}>
          <a className={classes.route} onClick={handleClose}>
            {route.title}
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export default Sidebar;

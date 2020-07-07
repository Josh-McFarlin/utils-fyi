import * as React from "react";
import Sidebar from "./Sidebar";
import classes from "./Header.module.scss";

const Header = () => {
  const [showSidebar, setSidebar] = React.useState<boolean>(false);

  const toggleSidebar = () => setSidebar((prev) => !prev);

  return (
    <>
      <Sidebar handleClose={toggleSidebar} open={showSidebar} />
      <div className={classes.root}>
        <div className={classes.hamburger} onClick={toggleSidebar}>
          =
        </div>
        <h1>utils-fyi</h1>
      </div>
    </>
  );
};

export default Header;

import * as React from "react";
import { NextPage } from "next";
import classes from "./HomeScreen.module.scss";

const HomeScreen: NextPage = () => (
  <>
    <h1 className={classes.centerText}>
      Online tools to help you do anything!
    </h1>
    <h3 className={classes.centerText}>More tools are being added every day</h3>
  </>
);

export default HomeScreen;

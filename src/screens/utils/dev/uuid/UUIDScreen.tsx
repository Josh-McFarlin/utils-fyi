import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./UUIDScreen.module.scss";

const UUIDScreen = () => {
  const [uuid, setUUID] = React.useState(uuidv4());

  const createUUID = () => setUUID(uuidv4());

  return (
    <>
      <h1>UUID v4</h1>
      <p>UUID: {uuid}</p>
      <button onClick={createUUID}>Generate New</button>
      <div className={classes.tall} />
    </>
  );
};

export default UUIDScreen;

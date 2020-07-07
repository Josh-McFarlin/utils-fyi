import * as React from "react";
import { v4 as uuidv4 } from "uuid";

const UUIDScreen = () => {
  const [uuid, setUUID] = React.useState(uuidv4());

  const createUUID = () => setUUID(uuidv4());

  return (
    <>
      <h1>UUID v4</h1>
      <p>UUID: {uuid}</p>
      <button onClick={createUUID}>Generate New</button>
    </>
  );
};

export default UUIDScreen;

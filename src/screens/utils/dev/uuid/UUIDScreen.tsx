import * as React from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { saveAs } from "file-saver";
import Button from "../../../../components/Button";
import FormInput from "../../../../components/FormInput";
import MultilineTextOutput from "../../../../components/MultilineTextOutput";
import classes from "./UUIDScreen.module.scss";

const UUIDScreen = () => {
  const [uuid, setUUID] = React.useState<string>(uuidv4());
  const [showList, setShowList] = React.useState<boolean>(false);
  const [listCount, setCount] = React.useState<number>(5);
  const [uuidList, setList] = React.useState<string[]>([]);

  const createUUID = () => uuidv4();

  const generateList = () => {
    const newList = Array.from({ length: listCount }, () => createUUID());

    setList(newList);
    setShowList(true);
  };

  const uuidListText =
    uuidList != null && uuidList.length > 0 ? uuidList.join("\n") : "";

  const handleDownload = () => {
    const blob = new Blob([uuidListText], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, "uuids (utils-fyi).txt");
  };

  return (
    <>
      <h1>UUID v4</h1>
      <div className={clsx(classes.row, classes.spaceBottom)}>
        <h2 className={classes.spaceRight}>UUID: {uuid}</h2>
        <Button onClick={() => setUUID(createUUID)}>Generate New</Button>
      </div>

      <h3>Generate List</h3>
      <div className={clsx(classes.row, classes.spaceBottom)}>
        <FormInput
          className={classes.spaceRight}
          label="Count"
          type="number"
          min={1}
          max={500}
          value={listCount}
          onChange={(event) => setCount(parseInt(event.target.value, 10))}
        />
        <Button onClick={generateList}>Generate List</Button>
      </div>
      {showList && (
        <>
          <MultilineTextOutput>{uuidListText}</MultilineTextOutput>
          <div className={clsx(classes.row, classes.spaceTop)}>
            <Button className={classes.spaceRight} onClick={handleDownload}>
              Download List
            </Button>
            <Button variant="warning" onClick={() => setShowList(false)}>
              Hide
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default UUIDScreen;

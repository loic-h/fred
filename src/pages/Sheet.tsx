import { useContext } from "preact/hooks";
import { Link, useRouter } from "preact-router";
import { SheetsContext } from "../context/sheets";

export default (props: any) => {
  const { index } = props;
  const sheets = useContext(SheetsContext);
  console.log(sheets, index)
  const sheet = sheets[index];
  console.log(sheet);
  return (
    <div>
      sheet
    </div>
  );
};

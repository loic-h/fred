import { useContext } from "preact/hooks";
import { Link } from "preact-router";
import { SheetsContext } from "../context/sheets";

export default () => {
  const sheets = useContext(SheetsContext);

  return (
    <ul>
      {sheets.map((sheet, key) => (
        <li>
          <Link href={`/sheet/${key}`}>
            {sheet.title}
          </Link>
        </li>
      ))}
    </ul>
  )
};

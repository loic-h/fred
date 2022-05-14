import { createContext } from "preact";
import type { Sheets } from "../../models/sheet";

export const SheetsContext = createContext([] as Sheets);

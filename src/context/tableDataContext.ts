import { createContext } from "react";
import { cellType } from "../interfaces";

const TableDataContext = createContext<cellType[][]>([]);
export const TableDataProvider = TableDataContext.Provider;
export default TableDataContext;
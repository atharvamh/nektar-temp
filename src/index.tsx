import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TableDataProvider } from './context/tableDataContext';
import { cellType } from './interfaces';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element);

const tableData : cellType[][] = [
  [
    { editable: false, label: "row 1 column 1" },
    { editable: true, label: "row 1 column 2" },
  ],
  [
    { editable: false, label: "row 2 column 1", hint: "some hint" },
    { editable: false, label: "row 2 column 2" },
  ],
  [
    {
      editable: false,
      label: "row 3 column 1",
      hint: "some hint 2",
      icon: "alert",
    },
    { editable: false, label: "row 3 column 2" },
  ],
];

root.render(
  <React.StrictMode>
    <TableDataProvider value={tableData}>
      <App />
    </TableDataProvider>
  </React.StrictMode>
);

reportWebVitals();

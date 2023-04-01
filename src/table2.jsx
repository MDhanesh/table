import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const TableSecond = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
  ];
  const data = [
    {
      id: "1",
      name: "ajay",
      age: "22",
      email: "123@gmail.com",
    },
    {
      id: "2",
      name: "next",
      age: "72",
      email: "necy3@gmail.com",
    },
    {
      id: "3",
      name: "abis",
      age: "42",
      email: "abis@gmail.com",
    },
    {
      id: "4",
      name: "ajaywin",
      age: "25",
      email: "ajay@gmail.com",
    },
    {
      id: "5",
      name: "winzen",
      age: "25",
      email: "winzen@gmail.com",
    },
    {
      id: "6",
      name: "anto",
      age: "35",
      email: "anto@gmail.com",
    },
  ];
  return (
    <div className="container mt-5">
      <h1>TABLE SECOND</h1>
      <button>
        <Link to="/">NEXT SCREEN</Link>
      </button>

      <DataTable columns={columns} data={data} pagination></DataTable>
    </div>
  );
};

export default TableSecond;

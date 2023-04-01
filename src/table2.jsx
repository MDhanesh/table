import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

const TableSecond = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const paginatorLeft = (
    <Button
      type="button"
      icon="pi pi-refresh"
      text
      onClick={() => window.location.reload()}
    />
  );
  //   const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  //
  useEffect(() => {
    async function getleads() {
      const response = await axios.get(
        `https://62ff2d03a85c52ee48420f24.mockapi.io/Data`
      );
      console.log(response.data);
      setData(response.data);
    }

    getleads();
  }, []);

  return (
    <div>
      <div>
        <h1 className="d-flex mt-4 justify-content-center">Second Screen</h1>
      </div>
      <div className="d-flex mt-4 justify-content-center">
        <Link to="/">
          <button className="btn btn-success">FIRST SCREEN</button>
        </Link>
      </div>

      <div className="d-flex my-4 justify-content-center ">
        <InputText
          className="bg-black text-white"
          placeholder="search name..."
          onInput={(e) =>
            setSearchTerm({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
      </div>
      <div className="card">
        <DataTable
          value={data}
          sortMode="multiple"
          paginator
          filters={searchTerm}
          rows={4}
          rowsPerPageOptions={[4, 8, 12, 18, 24, 30]}
          tableStyle={{ minWidth: "50rem" }}
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorLeft={paginatorLeft}
        >
          <Column
            field="id"
            header="ID"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="name"
            header="Name"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="age"
            header="Age"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="email"
            header="Email"
            style={{ width: "20%" }}
            sortable
          ></Column>
          <Column
            field="course"
            header="Course"
            style={{ width: "20%" }}
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default TableSecond;

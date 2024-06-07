import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table2023 = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/2023")
      .then(response => setRows(response.data))
      .catch(error => console.log(error))
  }, []);


  const columns2020 = [
    {
      name: "index",
      selector: (row: any) => row["index"],
      sortable: true
    },
        {
      name: "Accession Number",
      selector: (row: any) => row["Accession Number"],
      sortable: true
    },
        {
      name: "Gene Name",
      selector: (row: any) => row["Gene Name"],
      sortable: true
    },
    {
      name: "Protein Name",
      selector: (row: any) => row["Protein Name"],
      sortable: true,
    },
        {
      name: "Peptide",
      selector: (row: any) => row["Peptide"],
      sortable: true
    },
        {
      name: "Start Position",
      selector: (row: any) => row["Start Position"],
      sortable: true
    },
    {
      name: "End Position",
      selector: (row: any) => row["End Position"],
      sortable: true,
    },
    {
      name: "Median",
      selector: (row: any) => row["Median"],
      sortable: true,
    },
    {
      name: "CV",
      selector: (row: any) => row["CV"],
      sortable: true,
    },






  ]

  





  return (
    <div className="container">
      <div className="input-group">
        <input
          type="search"
          className="form-control-sm border ps-3"
          placeholder="Search"
        />

      </div>
      <DataTable
        columns={columns2020}
        data={rows}
        fixedHeader
        title="2023 Data"
        pagination
        selectableRows
      />

    </div>
  )
};

export default Table2023;

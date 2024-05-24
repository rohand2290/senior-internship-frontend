import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table2021 = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/2021")
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
      name: "Accession #",
      selector: (row: any) => row["Accession #"],
      sortable: true
    },
        {
      name: "Uniprot ID",
      selector: (row: any) => row["Uniprot ID"],
      sortable: true
    },
        {
      name: "Gene",
      selector: (row: any) => row["Gene "],
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
      name: "E1 RH/L",
      selector: (row: any) => row["E1 RH/L"],
      sortable: true
    },
    {
      name: "E2 RH/La",
      selector: (row: any) => row["E2 RH/La"],
      sortable: true,
    }






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
        title="React Tutorial"
        pagination
        selectableRows
      />

    </div>
  )
};

export default Table2021;

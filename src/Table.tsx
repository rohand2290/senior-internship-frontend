import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const [rows, setRows] = useState([])
  let clickHandler = () => {
    console.log("hi")
  }
  useEffect(() => {
    axios.get("http://localhost:8080/2019")
      .then(response => setRows(response.data))
      .catch(error => console.log(error))
  }, []);


  const columns2019 = [
    {
      name: "Action",
      selector: (row: any) => row["action"],
      cell: () => <a href="#" onClick={clickHandler}>Action</a>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "index",
      selector: (row: any) => row["index"],
      sortable: true
    },
    {
      name: "Biological sample name",
      selector: (row: any) => row["Biological sample name"],
      sortable: true
    },
    {
      name: "Protein name",
      selector: (row: any) => row["Protein name"],
      sortable: true
    },
    {
      name: "Protein accession numbers",
      selector: (row: any) => row["Protein accession numbers"],
      sortable: true,
    },
        {
      name: "Protein molecular weight (Da)",
      selector: (row: any) => row["Protein molecular weight (Da)"],
      sortable: true,
    },
        {
      name: "Protein identification probability",
      selector: (row: any) => row["Protein identification probability"],
      sortable: true,
    },   
    {
      name: "Exclusive unique peptide count",
      selector: (row: any) => row["Exclusive unique peptide count"],
      sortable: true,
    },
    {
      name: "Exclusive unique spectrum count",
      selector: (row: any) => row["Exclusive unique spectrum count"],
      sortable: true,
    },
        {
      name: "Exclusive spectrum count",
      selector: (row: any) => row["Exclusive spectrum count"],
      sortable: true,
    },
        {
      name: "Percentage of total spectra",
      selector: (row: any) => row["Percentage of total spectra"],
      sortable: true,
    },
        {
      name: "Peptide sequence",
      selector: (row: any) => row["Peptide sequence"],
      sortable: true,
    },
        {
      name: "Previous amino acid",
      selector: (row: any) => row["Previous amino acid"],
      sortable: true,
    },
        {
      name: "Next amino acid",
      selector: (row: any) => row["Next amino acid"],
      sortable: true,
    },
        {
      name: "Best Peptide Identification Probability",
      selector: (row: any) => row["Best Peptide Identification Probability"],
      sortable: true,
    },
    {
      name: "Best Peptide Score",
      selector: (row: any) => row["Best Peptide Score"],
      sortable: true,
    },
        {
      name: "Calculated +1H Peptide Mass (AMU)",
      selector: (row: any) => row["Calculated +1H Peptide Mass (AMU)"],
      sortable: true,
    },
        {
      name: "Median Retention Time",
      selector: (row: any) => row["Median Retention Time"],
      sortable: true,
    },
        {
      name: "Total TIC",
      selector: (row: any) => row["Total TIC"],
      sortable: true,
    },
        {
      name: "Peptide start index",
      selector: (row: any) => row["Peptide start index"],
      sortable: true,
    },
        {
      name: "Peptide stop index",
      selector: (row: any) => row["Peptide stop index"],
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
        columns={columns2019}
        data={rows}
        fixedHeader
        title="2019 Data"
        pagination
        selectableRows
      />

    </div>
  )
};

export default Table;

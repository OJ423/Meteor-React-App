import * as React from "react";
import { useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { MeteoriteDetails } from "./MeteoriteDetails";

export default function Table({ data }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [detailsScreen, setDetailsScreen] = useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Meteorite Name", width: 130 },
    { field: "year", headerName: "Year", width: 130 },
    { field: "mass", headerName: "Mass", width: 70 },
    { field: "reclat", headerName: "Latitude", width: 130 },
    { field: "reclong", headerName: "Longitude", width: 130 },
    { field: "recclass", headerName: "Meteorite Class", width: 130 },
  ];

  function handleClick() {
    setDetailsScreen(true);
  }

  if (detailsScreen.length === 0) {
    setDetailsScreen(false);
  }

  return (
    <>
      {detailsScreen ? (
        <MeteoriteDetails
          selectedRows={selectedRows}
          setDetailsScreen={setDetailsScreen}
          setSelectedRows={setSelectedRows}
        />
      ) : (
        <>
          {selectedRows.length > 0 ? (
            <>
              <button onClick={handleClick}>Visualise Meteorite(s)</button>
              <div></div>
            </>
          ) : null}
          <div style={{ height: 400, width: "100%", color: "white" }}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              onRowSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = data.filter((row) =>
                  selectedIDs.has(row.id)
                );
                setSelectedRows(selectedRows);
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

import React, { useMemo } from 'react';

import { DataGrid } from '@material-ui/data-grid';

import { ConsentEntry } from '../../shared/generalDefinitions';



interface ConsentsTableProps {
  rowsPerPageOptions: number[],
  consents: ConsentEntry[]
}



const columns = [
  { field: 'name', headerName: 'Name', sortable: true, width: 150 },
  { field: 'email', headerName: 'Email', sortable: true, width: 200 },
  { field: 'consents', headerName: 'Consents to', width: 550 }
];


/**
 * Component to display all consents in a data grid.
 */
function ConsentsTable({ rowsPerPageOptions, consents }: ConsentsTableProps) {
  const rows = useMemo(
    () => consents.map((entry) =>({ ...entry, id: entry.email })),
    [consents]
  );

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      rowsPerPageOptions={rowsPerPageOptions}
      pageSize={rowsPerPageOptions[0]}
      pagination
      autoHeight
    />
  );
}

ConsentsTable.displayName = 'ConsentsTable';

export default ConsentsTable;

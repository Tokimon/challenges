import React from 'react';
import { useSelector } from 'react-redux'

import ConsentsTable from '../../components/ConsentsTable/ConsentsTable';

import { StateObject } from '../../shared/generalDefinitions';



/**
 * Component to display page with all consents in a table with pagniation,
 * with data coming from the redux store.
 */
function ConsentsPage() {
  const consents = useSelector((state: StateObject) => state.consents);

  return (
    <ConsentsTable
      rowsPerPageOptions={[2,4,6]}
      consents={consents}
    />
  );
}

ConsentsPage.displayName = 'ConsentsPage';

export default ConsentsPage;

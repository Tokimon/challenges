import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { giveConsent } from '../../store/actions';
import ConsentForm from '../../components/ConsentForm/ConsentForm';



/**
 * Component to display the "Give Consent" form page.
 * Dispatching filled data to the redux store on submit.
 */
function GiveConsentPage() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (consentEntry) => { dispatch(giveConsent(consentEntry)); },
    [dispatch]
  );

  return (<ConsentForm onSubmit={handleSubmit} />)
}

export default GiveConsentPage;

import { Dispatch } from 'redux';

import { ConsentEntry } from '../shared/generalDefinitions';
import { addConsent, getConsents } from '../tools/http';



export const CONSENT_GIVEN = 'consent-given';
export const CONSENTS_UPDATED_FROM_SERVER = 'consents-updated-from-server';



/** Type definitions */
export interface ConsentGivenAction {
  type: typeof CONSENT_GIVEN
  payload: ConsentEntry
}

export interface ConsentsUpdatedFromServerAction {
  type: typeof CONSENTS_UPDATED_FROM_SERVER
  payload: ConsentEntry[]
}

export type ConsentActionTypes = ConsentGivenAction | ConsentsUpdatedFromServerAction;



/** The action creators */
export const consentGiven = (payload: ConsentEntry): ConsentGivenAction => ({
  type: CONSENT_GIVEN,
  payload
});

export const consentsUpdatedFromServer = (payload: ConsentEntry[]): ConsentsUpdatedFromServerAction => ({
  type: CONSENTS_UPDATED_FROM_SERVER,
  payload
});



/** Thunk actions */
export const giveConsent = (consentEntry: ConsentEntry) =>
  async (dispatch: Dispatch) => {
    dispatch(consentGiven(consentEntry));

    const allConsents = await addConsent(consentEntry);

    dispatch(consentsUpdatedFromServer(allConsents))
  };

export const initConsents = () =>
  async (dispatch: Dispatch) => {
    const allConsents = await getConsents();

    dispatch(consentsUpdatedFromServer(allConsents))
  };

import {
  CONSENT_GIVEN,
  CONSENTS_UPDATED_FROM_SERVER,
  ConsentGivenAction,
  ConsentsUpdatedFromServerAction,
  ConsentActionTypes
} from './actions';


import { StateObject } from '../shared/generalDefinitions';
import addToConsentsList from '../shared/addToConsentsList';



export type Reducer = (state: StateObject | undefined, action: ConsentActionTypes) => StateObject;



export function updateConsents(state: StateObject, { payload }: ConsentGivenAction): StateObject {
  const { consents } = state;
  return { consents: addToConsentsList(payload, consents) };
}

export function consentsUpdatedFromServer({ payload }: ConsentsUpdatedFromServerAction) {
  return { consents: payload }
}

export function rootReducer(state: StateObject = { consents: [] }, action: ConsentActionTypes): StateObject {
  switch (action.type) {
    case CONSENT_GIVEN:
      return updateConsents(state, action);
    case CONSENTS_UPDATED_FROM_SERVER:
      return consentsUpdatedFromServer(action);
    default:
      return state;
  }
}

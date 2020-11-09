import { ConsentEntry } from './generalDefinitions';

const addToConsentsList = (consentEntry: ConsentEntry, consents: ConsentEntry[]) => {
  consents = [...consents];

  const { email } = consentEntry;
  const index = consents.findIndex((consent) => consent.email === email);

  if (index > -1) {
    consents[index] = consentEntry;
  } else {
    consents.push(consentEntry);
  }

  return consents;
}

export default addToConsentsList;

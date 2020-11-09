import addToConsentsList from './addToConsentsList';

import { ConsentEntry } from './generalDefinitions';



describe('Shared / addToConsentsList', () => {
  const name = 'toke'
  const email = 'toke@voltelen.dk'
  const consents = ['Some consent'];

  test('Add entry to the a new array', () => {
    const consentList: ConsentEntry[] = [];
    const entry = { name, email, consents };
    const result = addToConsentsList(entry, consentList);

    expect(result).not.toBe(consentList);
    expect(result).toEqual([entry]);
  });

  test('Adds entry to the end of the array when no entry with the email is found', () => {
    const consentList: ConsentEntry[] = [{ name, email: 'em@il.com', consents }];
    const entry = { name, email, consents };
    const result = addToConsentsList(entry, consentList);

    expect(result).toEqual([consentList[0], entry]);
  });

  test('Overrides entry with same email', () => {
    const consentList: ConsentEntry[] = [{ name: 'gert', email, consents: ['Consent overridden'] }];
    const entry = { name, email, consents };
    const result = addToConsentsList(entry, consentList);

    expect(result).toEqual([entry]);
  });
});

import * as http from '../tools/http';

import {
  consentGiven,
  consentsUpdatedFromServer,
  giveConsent,
  initConsents
} from './actions';



describe('Store / Actions', () => {
  const consentEntry = {
    name: 'Scooby Doo',
    email: 'scooby@doo.com',
    consents: ['I accept to look silly', 'Jump scares may occour']
  };

  const serverResult = [
    {
      name: 'toke',
      email: 't@ke.dk',
      consents: ['I object your honor!']
    },
    consentEntry
  ];



  describe('.giveConsent', () => {
    let addConsentSpy: jest.SpyInstance;

    beforeAll(() => {
      addConsentSpy = jest.spyOn(http, 'addConsent');
    });

    beforeEach(() => {
      addConsentSpy.mockImplementation(() => Promise.resolve(serverResult));
    });

    afterAll(() => {
      addConsentSpy.mockRestore();
    });



    test('Dispatches the "CONSENT_GIVEN" action', () => {
      const run = giveConsent(consentEntry);
      const dispatch = jest.fn();

      run(dispatch);

      expect(dispatch)
        .toHaveBeenCalledWith(consentGiven(consentEntry));
    });

    test('Dispatches the "CONSENTS_UPDATED_FROM_SERVER" action, with the content from the server', async () => {
      const run = giveConsent(consentEntry);
      const dispatch = jest.fn();

      await run(dispatch);

      expect(dispatch)
        .toHaveBeenLastCalledWith(
          consentsUpdatedFromServer(serverResult)
        );
    });
  });

  describe('.initConsents', () => {
    let getConsentsSpy: jest.SpyInstance;

    beforeAll(() => {
      getConsentsSpy = jest.spyOn(http, 'getConsents');
    });

    beforeEach(() => {
      getConsentsSpy.mockImplementation(() => Promise.resolve(serverResult));
    })

    afterAll(() => {
      getConsentsSpy.mockRestore();
    });



    test('Dispatches the "CONSENTS_UPDATED_FROM_SERVER" action, with the content from the server', async () => {
      const run = initConsents();
      const dispatch = jest.fn();

      await run(dispatch);

      expect(dispatch)
        .toHaveBeenLastCalledWith(
          consentsUpdatedFromServer(serverResult)
        );
    });
  });
});

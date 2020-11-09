import * as reducers from './reducers'

import {
  consentGiven,
  consentsUpdatedFromServer
} from './actions';



/**
 * NOTE: I opted out of testing the `rootReducer`, since it would require that
 * i split the reducers into separate files in order to spy on them correctly
 * and see if they had been called correctly with the different actions.
 * Normally this is something I would do, but due to time constraints I let it like this.
 */



describe('Store / Reducers', () => {
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

  const state = { consents: [] };

  describe('.updateConsents', () => {
    test('Returns a new object', () => {
      const action = consentGiven(consentEntry);
      const result = reducers.updateConsents(state, action);

      expect(result).not.toBe(state);
    });

    test('`state.consents` is a new array', () => {
      const action = consentGiven(consentEntry);
      const result = reducers.updateConsents(state, action);

      expect(result.consents).not.toBe(state.consents);
    });

    test('The given conset entry is added to `state.consents`', () => {
      const stateConsents = [{ name: 'b', email: 'b@b.it', consents: ['I consent'] }];
      const action = consentGiven(consentEntry);
      const result = reducers.updateConsents({ consents: stateConsents }, action);

      expect(result.consents).toEqual([stateConsents[0], consentEntry]);
    });

    test('The given conset entry whos email exists is overridden in `state.consents`', () => {
      const stateConsents = [{ name: 'b', email: consentEntry.email, consents: ['I consent'] }];
      const action = consentGiven(consentEntry);
      const result = reducers.updateConsents({ consents: stateConsents }, action);

      expect(result.consents).toEqual([consentEntry]);
    });
  });

  describe('.consentsUpdatedFromServer', () => {
    test('Returns a new object', () => {
      const action = consentsUpdatedFromServer(serverResult);
      const result = reducers.consentsUpdatedFromServer(action);

      expect(result).not.toBe(state);
    });

    test('`state.consents` is the given array', () => {
      const action = consentsUpdatedFromServer(serverResult);
      const result = reducers.consentsUpdatedFromServer(action);

      expect(result.consents).toBe(serverResult);
    });
  });
});

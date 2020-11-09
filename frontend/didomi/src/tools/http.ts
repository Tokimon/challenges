import { ConsentEntry } from '../shared/generalDefinitions';



async function fetchConsents(config: object): Promise<ConsentEntry[]> {
  const response = await fetch('http://localhost:4200/consents', config)
  return response.json();
}

export const getConsents = () => fetchConsents({ method: 'GET' });

export const addConsent = (data: ConsentEntry) =>
  fetchConsents({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });

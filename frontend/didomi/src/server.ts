import { resolve } from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import { ConsentEntry } from './shared/generalDefinitions';
import addToConsentsList from './shared/addToConsentsList';



let consents: ConsentEntry[] = [{
  name: 'prefilled',
  email: 'already@consented.com',
  consents: ['Receive newsletter', 'Be shown targeted ads']
}];




const server = express();

server.use('/', express.static(resolve('build')));

server.get('/consents', (_, res) => {
  res.json(consents);
});

server.post('/consents', bodyParser.json(), (req, res) => {
  consents = addToConsentsList(req.body, consents);
  res.json(consents);
});

const { PORT = 4200 } = process.env;

server.listen(PORT, () => {
  console.log('[server] Server is running at http://localhost:' + PORT);
});

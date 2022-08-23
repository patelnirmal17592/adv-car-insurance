const express = require('express')
const cors = require('cors')
const app = express();
const dotenv = require('dotenv').config({ path: '../../env/.env'})
const DiscoveryV2 = require('ibm-watson/discovery/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

app.use(cors());

app.post('/', (req, res) => {
  res.send(console.log('its called!'));
})

const version = process.env.VERSION;

const discovery = new DiscoveryV2({
  version: version,
  authenticator: new IamAuthenticator({
    apikey: process.env.APIkey,
  }),
  serviceUrl: process.env.URL,
});

const projectId = process.env.PROJECTID;
// const field = 'enriched_text.entities.mentions.text';

const parameters = {
    naturalLanguageQuery: 'lost keys',
    projectId : `${projectId}`,
    count: 5
}

discovery.query(parameters)
  .then(res => res.result.results.map((data) => 
      console.log(data)
    ))
  .catch(err => {
    console.log('error:', err);
  });


app.listen(3001, () => console.log('Port is running on 3001'));
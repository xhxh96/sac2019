import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import API, { AppAPI } from './src/server/Api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // enable cross-origin resource sharing
app.use(bodyParser.json()); // for parsing application/json

// Adding API listeners when server instantiates
API.attach(app, '/api', AppAPI);

app.listen(PORT, () => console.log(`SAC2019 App running on port ${PORT}!`));

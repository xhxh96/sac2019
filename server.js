import express from 'express';
import cors from 'cors';
import API, { AppAPI } from './src/server/Api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

API.attach(app, '/api', AppAPI);

app.listen(PORT, () => console.log(`SAC2019 App listening on port ${PORT}!`));
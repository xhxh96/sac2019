import express from 'express';
import cors from 'cors';
import API, { AppAPI } from './src/server/Api';

const app = express();

app.use(cors());

// app.get('/api/hello', (req, res) => {
//   res.json({
//     message: 'hello'
//   });
// });

API.attach(app, '/api', AppAPI);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'hello'
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

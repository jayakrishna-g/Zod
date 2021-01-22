/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(__dirname + '/../zod-rating'));
const dbURL = 'mongodb+srv://zod:zodRULES@cluster0.nyxyo.mongodb.net/zodAPI?retryWrites=true&w=majority';
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to APPPP!' });
});

app.get('/*', function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + '/../zod-rating/index.html'));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

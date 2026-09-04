import express from 'express';
import path from 'node:path';
import fs from 'fs';
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname + '/src/')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main.html');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
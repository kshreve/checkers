/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/c/:size', (req, res) => {
      const actualPage = '/checkers';

      // Round to the nearest even number
      const size = Math.ceil(parseInt(req.params.size, 10) / 2) * 2;

      const queryParams = { size };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('API REST desplegada en Render.com!!')
});

app.listen(port, () => {
  console.log(`Express escuchando en http://localhost:${port}`);
});

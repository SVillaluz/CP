const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get('/api/saludo', (req, res) => {
  res.json({ message: '¡Hola desde el backend!' });
});

app.listen(5000, () => console.log('Servidor backend escuchando en el puerto 5000'));
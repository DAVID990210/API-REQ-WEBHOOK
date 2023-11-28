const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear datos de formularios codificados URL
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el webhook de ERPNext
app.post('/ABC', (req, res) => {
  const formData = req.body;
  console.log('Datos recibidos desde ERPNext:', formData);

  // Procesa los datos según tus necesidades
  // Puedes acceder a la información del formulario, realizar lógica de negocio, etc.

  res.status(200).send('Datos recibidos correctamente');
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
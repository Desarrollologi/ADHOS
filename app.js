const express = require('express');
const { Client } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configuración de la conexión a la base de datos
/* const client = new Client({
  user: "xupuufxtqinskd",
  host: "ec2-52-22-136-117.compute-1.amazonaws.com",
  password: "c8f36e06dda45351374f252d25579eee3de9ef362c3429ed29398e5004bcca48",
  database: "d4gh2v3i5p549d",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  },
}); */

// Conectar a la base de datos
/* client.connect(); */

// Ruta para obtener los datos
/* app.get('/consulta', async (req, res) => {
  const id_serie = req.query.id_serie || 0;
  const isChecked = req.query.isChecked === 'true';
  try {
    
    let query = "SELECT base_radicacion.id, base_radicacion.numero_radicado, base_radicacion.alistamiento, base_radicacion.alistado_por, base_radicacion.datetime FROM base_radicacion LEFT JOIN domicilios ON base_radicacion.numero_radicado = domicilios.autorizacion WHERE base_radicacion.acta_entrega IS NULL AND domicilios.autorizacion IS NULL AND base_radicacion.id > $1";
 */
  // Verificar el estado del checkbox y agregar la condición correspondiente
 /*  if (isChecked) {
    query += " AND base_radicacion.alistado_por IS NULL";
  }

  query += " ORDER BY base_radicacion.datetime ASC LIMIT 1";
  
    const result = await client.query(query, [id_serie]);
    const datos = result.rows[0]; */ // Suponiendo que solo quieres el primer resultado de la consulta
    
/*     res.json(datos);
  } catch (error) {        
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
}); */



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
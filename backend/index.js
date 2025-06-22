const express = require('express');
const cors = require('cors');
const libroRoutes = require('./routes/libroRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/libros', libroRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend listo en http://localhost:${PORT}`));
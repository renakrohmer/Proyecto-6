require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Importa la conexión
const productRoutes = require("./routes/productRoutes"); // Importa las rutas

// Conectar a MongoDB
connectDB(); // Conectar a la base de datos usando la función de db.js

// Crear la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/products", productRoutes); // Asegura que las rutas estén bien

// Ruta inicial de prueba
app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

// Configuración del puerto
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

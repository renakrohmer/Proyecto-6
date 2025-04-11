require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); 
const productRoutes = require("./routes/productRoutes"); 


connectDB(); 


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/products", productRoutes); 

app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

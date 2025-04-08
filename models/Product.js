const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoria: { type: String, required: true },
  creadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Referencia al usuario
  fechaCreacion: { type: Date, default: Date.now },  // Fecha de creación
});

module.exports = mongoose.model('Product', productSchema);

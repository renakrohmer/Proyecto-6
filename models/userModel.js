const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // Asegúrate de importar bcrypt

// Esquema de usuario
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});

// Método para comparar la contraseña (verificación en login)
userSchema.methods.compararContraseña = async function (contraseña) {
  return await bcrypt.compare(contraseña, this.contraseña);  // Comparar la contraseña
};

// Middleware para encriptar la contraseña antes de guardar al usuario
userSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) return next();
  this.contraseña = await bcrypt.hash(this.contraseña, 10);  // Encriptar la contraseña
  next();
});

module.exports = mongoose.model('User', userSchema);

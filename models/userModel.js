const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});


userSchema.methods.compararContraseña = async function (contraseña) {
  return await bcrypt.compare(contraseña, this.contraseña);  
};


userSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) return next();
  this.contraseña = await bcrypt.hash(this.contraseña, 10);  
  next();
});

module.exports = mongoose.model('User', userSchema);

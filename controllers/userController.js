const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const generarToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};


exports.register = async (req, res) => {
  try {
    const { nombre, email, contraseña } = req.body;

    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) return res.status(400).json({ message: 'El usuario ya existe' });

    const nuevoUsuario = new User({ nombre, email, contraseña });
    await nuevoUsuario.save();

    res.status(201).json({
      token: generarToken(nuevoUsuario._id),
      usuario: { id: nuevoUsuario._id, nombre: nuevoUsuario.nombre, email: nuevoUsuario.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const usuario = await User.findOne({ email });

    if (!usuario || !(await usuario.compararContraseña(contraseña))) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    res.status(200).json({
      token: generarToken(usuario._id),
      usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifyToken = (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ valid: true, decoded });
  } catch (error) {
    res.status(401).json({ valid: false, message: 'Token inválido' });
  }
};


exports.updateUser = async (req, res) => {}
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const usuario = await User.findById(decoded.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    const camposActualizados = req.body;

    if (camposActualizados.contraseña) {
      const salt = await bcrypt.genSalt(10);
      camposActualizados.contraseña = await bcrypt.hash(camposActualizados.contraseña, salt);
    }

    const usuarioActualizado = await User.findByIdAndUpdate(decoded.id, camposActualizados, { new: true });

    res.status(200).json({
      message: 'Usuario actualizado correctamente',
      usuario: {
        id: usuarioActualizado._id,
        nombre: usuarioActualizado.nombre,
        email: usuarioActualizado.email
      }
    });
  } catch (error) {
   } res

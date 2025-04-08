const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protegerRuta = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = await User.findById(decoded.id).select('-contraseña');
    next();
  } catch (error) {
    console.error('Error al verificar token:', error);  // Log para depuración
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado' });
    }
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = protegerRuta;


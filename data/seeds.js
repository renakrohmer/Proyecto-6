const mongoose = require('mongoose');
const Product = require('./models/Product'); // Asegúrate de usar la ruta correcta para tu modelo de Producto

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error de conexión:', err));

// Datos de productos de ejemplo con tallas S, M, L
const productos = [
  { nombre: 'Polera Hombre', descripcion: 'Polera para hombre', precio: 15000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Polera Mujer', descripcion: 'Polera para mujer', precio: 16000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Pantalón Hombre', descripcion: 'Pantalón para hombre', precio: 25000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Pantalón Mujer', descripcion: 'Pantalón para mujer', precio: 24000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Short Hombre', descripcion: 'Short para hombre', precio: 12000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Short Mujer', descripcion: 'Short para mujer', precio: 13000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Body', descripcion: 'Body de bebé', precio: 9000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Enterito', descripcion: 'Enterito de bebé', precio: 15000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Pijama', descripcion: 'Pijama para mujer', precio: 22000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Vestido', descripcion: 'Vestido para niña', precio: 18000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Polerón Hombre', descripcion: 'Polerón para hombre', precio: 28000, tallas: ['S', 'M', 'L'] },
  { nombre: 'Polerón Mujer', descripcion: 'Polerón para mujer', precio: 29000, tallas: ['S', 'M', 'L'] }
];

// Insertar los productos en la base de datos
const agregarProductos = async () => {
  try {
    // Recorremos los productos y creamos cada uno para cada talla
    for (const producto of productos) {
      for (const talla of producto.tallas) {
        const nuevoProducto = new Product({
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          talla: talla // Agregamos la talla correspondiente
        });
        
        await nuevoProducto.save();
      }
    }
    console.log('Productos agregados exitosamente');
    mongoose.connection.close(); // Cierra la conexión después de insertar
  } catch (err) {
    console.error('Error al agregar productos:', err);
    mongoose.connection.close(); // Asegúrate de cerrar la conexión en caso de error
  }
};

agregarProductos(); // Ejecuta la función para agregar los productos

# Proyecto 6 - Backend para Tienda de Ropa de Niños 👶👗

Este proyecto corresponde al Proyecto 6 del curso de Desarrollo Backend. Consiste en la creación de una API RESTful utilizando Node.js, Express y MongoDB para una tienda ficticia de ropa de niños. La API permite registrar usuarios, iniciar sesión, y realizar operaciones CRUD sobre productos.

## 💡 Descripción del proyecto

La temática elegida es una **tienda de ropa infantil**. La idea es simular el backend de una plataforma donde se puedan gestionar productos de ropa para bebés y niños, incluyendo su nombre, descripción, precio, stock y categoría.

Esta API podría ser utilizada como base para el desarrollo de un e-commerce completo en el futuro.

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)** para autenticación
- **Dotenv** para gestión de variables de entorno
- **Bcrypt** para encriptación de contraseñas
- **Cors** para manejo de peticiones entre dominios

## 🔐 Funcionalidades principales

### Usuarios

- Registro de usuario
- Inicio de sesión con autenticación mediante JWT
- Verificación y actualización de usuario (protegido por token)

### Productos

- Crear nuevo producto (requiere autenticación)
- Obtener todos los productos
- Obtener un producto por su ID
- Actualizar un producto (requiere autenticación)
- Eliminar un producto (requiere autenticación)

## 📁 Estructura del proyecto
backend-ropa-ninos/ 
├── controllers/ 
├── middleware/ 
├── models/ 
├── routes/
├── config/ 
├── .env 
├── server.js

Este proyecto fue desarrollado con fines educativos y representa una implementación básica de un backend con autenticación y operaciones CRUD.

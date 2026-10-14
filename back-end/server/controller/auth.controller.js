const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Función para registrar un nuevo usuario
exports.registrar = async (req, res) => {
    try {
const { nombre, email, password, rol_id } = req.body;
const passwordHasheado = await bcrypt.hash(password, 10);
const nuevoUsuario = await Usuario.create({
    nombre,
    email,
    password: passwordHasheado,
    rol_id,
    });
    res.status(201).json({ message: 'Usuario registrado exitosamente', id: nuevoUsuario.id });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar el usuario', error: error.message });
    }
     };

// Función para iniciar sesión
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const passwordValido = await bcrypt.compare(password, usuario.password);
        if (!passwordValido) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        const token = jwt.sign(
                {id: usuario.id, rol_id: usuario.rol_id},process.env.JWT_SECRET, { expiresIn: '1h' }
            );
            res.status(200).json({ message: 'Inicio de sesión exitoso', token });
        } catch (error) {
            res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
        }
    };


     
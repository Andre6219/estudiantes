const {Router} = require('express');
const router = Router();
const controller = require('../controller/estudiantes.controller');

const verifyToken = require('../middlewares/verifyToken');


router.get('/', verifyToken, controller.getAllEstudiantes);
router.get('/estudiantes/:id', verifyToken, controller.getAllEstudiantesById);
router.get('/estudiantes/nombre/:nombre', verifyToken, controller.getEstudianteByNombre);
router.post('/estudiantes', verifyToken, controller.createEstudiante);
router.put('/estudiantes/:id', verifyToken, controller.actualizarEstudiante);    

module.exports = router;
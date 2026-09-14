const {Router} = require('express');
const router = Router();
const controller = require('../controller/estudiantes.controller');


router.get('/', controller.getAllEstudiantes);
router.get('/estudiantes/:id', controller.getAllEstudiantesById);
router.get('/estudiantes/nombre/:nombre', controller.getEstudianteByNombre);
router.post('/estudiantes', controller.createEstudiante);
router.put('/estudiantes/:id', controller.actualizarEstudiante);    

module.exports = router;
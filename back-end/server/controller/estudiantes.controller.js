const estudiante =require('../models/estudiante');

exports.getAllEstudiantes = async (req, res) => {
    try {
        
        const estudiantes = await estudiante.findAll();
        res.status(200).json(estudiantes);
    } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
        res.status(500).json({ error: 'Error al obtener los estudiantes' });
    }
 };

 
 exports.getAllEstudiantesById = async (req, res) => { 
try{
const estudianteId = await estudiante.findByPk(req.params.id);
if (!estudianteId) return res.status(404).json({ error: 'Estudiante no encontrado' });
res.status(200).json(estudianteId);
}catch (error) { 
console.error('Error al obtener el estudiante:', error);
res.status(500).json({ error: 'Error al obtener el estudiante' });
}
 };


 exports.getEstudianteByNombre = async (req, res) => { 
    try{
        const estudianteNombre = await estudiante.findOne({ where: { nombre: req.params.nombre } });
        if (!estudianteNombre) return res.status(404).json({ error: 'Estudiante no encontrado' });
        res.status(200).json(estudianteNombre);
    }catch (error) {
        res.status(500).json({ error: 'Error al obtener el estudiante' });
        console.error('Error al obtener el estudiante:', error);    
    }
 };


 exports.createEstudiante = async (req, res) => { 
    try {
        const nuevoEstudiante = await estudiante.create(req.body);
        res.status(201).json(nuevoEstudiante);  
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el estudiante' });
        console.error('Error al crear el estudiante:', error);
    }
 };


 exports.actualizarEstudiante = async (req, res) => { 
    try {
        const estudianteId = await estudiante.findByPk(req.params.id);
        if (!estudianteId) return res.status(404).json({ error: 'Estudiante no encontrado' });
        await estudianteId.update(req.body);
        res.status(200).json(estudianteId);
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar el estudiante' });
        console.error('Error al actualizar el estudiante:', error);
    }
  };

  
  exports.eliminarEstudiante = async (req, res) => {
try{
    const estudianteId = await estudiante.findByPk(req.params.id);
    if (!estudianteId) return res.status(404).json({ error: 'Estudiante no encontrado' });
    await estudianteId.destroy();
    res.status(200).json({ message: 'Estudiante eliminado correctamente' });
} catch (error) {
    res.status(500).json({ error: 'Error al eliminar el estudiante' });
    console.error('Error al eliminar el estudiante:', error);
}

};

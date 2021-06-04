const express=require('express');
const router= express.Router();

const estudiante = require('./estudiante');

router.get('/', async (req,res) => {
    const estudiantes = await estudiante.find();
        res.json(estudiantes);    
    });

router.get('/:id', async (req, res) =>{
        const estudiantes= await estudiante.findById(req.params.id);
        res.json(estudiantes);
})

router.post('/', async (req, res) =>{
    const {nombre, carrera} = req.body;
    const estudiante= new estudiante({nombre, carrera});
    await estudiante.save();
    res.json({status: 'recibido'});
})

router.put('/:id', async (req, res) =>{
    const {nombre, carrera} = req.body;
    const newestudiante= {nombre, carrera};
    await estudiante.findByIdAndUpdate(req.params.id, newestudiante);
    res.json({status: 'recibido'});
})

router.delete('/:id', async (req, res) =>{
    await estudiante.findByIdAndRemove(req.params.id);
    res.json({status: 'recibido'});
})

module.exports=router;
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/card/:id', async (req, res) => {
    console.log(req.params)
    res.send('recived')
});

router.get('/ods1', async (req, res) => {
    let project = await Project.find({
        ods: 'Fin de la Pobreza'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods2', async (req, res) => {
    let project = await Project.find({
        ods: 'Hambre Cero'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods3', async (req, res) => {
    let project = await Project.find({
        ods: 'Salud y Bienestar'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods4', async (req, res) => {
    let project = await Project.find({
        ods: 'Educación de Calidad'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods5', async (req, res) => {
    let project = await Project.find({
        ods: 'Igualdad de Genero'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods6', async (req, res) => {
    let project = await Project.find({
        ods: 'Agua y Saneamiento'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods7', async (req, res) => {
    let project = await Project.find({
        ods: 'Energía Asequible y No Contaminante'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods8', async (req, res) => {
    let project = await Project.find({
        ods: 'Trabajo Decente y Crecimiento Económico'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods9', async (req, res) => {
    let project = await Project.find({
        ods: 'Industria, Innovación e Infraestructura'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods10', async (req, res) => {
    let project = await Project.find({
        ods: 'Reducción de las Desigualdades'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods11', async (req, res) => {
    let project = await Project.find({
        ods: 'Ciudades Sostenibles'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods12', async (req, res) => {
    let project = await Project.find({
        ods: 'Producción y Consumo Responsables'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods13', async (req, res) => {
    let project = await Project.find({
        ods: 'Acción por el Clima'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods14', async (req, res) => {
    let project = await Project.find({
        ods: 'Vida Submarina'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods15', async (req, res) => {
    let project = await Project.find({
        ods: 'Vida de Ecosistemas Terrestres'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods16', async (req, res) => {
    let project = await Project.find({
        ods: 'Paz, Justicia e Instituciones Sólidas'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods17', async (req, res) => {
    let project = await Project.find({
        ods: 'Alianzas para Lograr los Objetivos'
    });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/', async (req, res) => {
    let project = await Project.find();
    console.log(project)
    res.render('index', {
        project: project
    });

});

router.get('/form', (req, res) => {
    res.render('form');
});

router.get('/edit/:id', async (req, res) => {
    let { id } = req.params;
    let project = await Project.findById(id);
    res.render('edit', {
        project
    });
});

router.post('/update/:id', async (req, res) => {
    let { id } = req.params;
    await Project.update({_id: id}, req.body);
    res.redirect('/')
})

router.post('/add', async (req, res) => {
    let project = new Project(req.body);
    await project.save();

    console.log(req.body);
    res.render('form');
});



module.exports = router;
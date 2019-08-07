const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/card/:id', async (req, res) => {
    console.log(req.params)
    res.send('recived')
});

router.get('/ods1', async (req, res) => {
    Project.find({
        ods: 'Fin de la Pobreza'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
});

router.get('/ods2', async (req, res) => {

    let project = await Project.find({
        ods: 'Hambre Cero'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
});

router.get('/ods3', async (req, res) => {
    let project = await Project.find({
        ods: 'Salud y Bienestar'
    },

    );
});

router.get('/ods4', async (req, res) => {
    let project = await Project.find({
        ods: 'Educación de Calidad'
    },

        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods5', async (req, res) => {
    let project = await Project.find({
        ods: 'Igualdad de Genero'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods6', async (req, res) => {
    let project = await Project.find({
        ods: 'Agua y Saneamiento'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods7', async (req, res) => {
    let project = await Project.find({
        ods: 'Energía Asequible y No Contaminante'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods8', async (req, res) => {
    let project = await Project.find({
        ods: 'Trabajo Decente y Crecimiento Económico'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods9', async (req, res) => {
    let project = await Project.find({
        ods: 'Industria, Innovación e Infraestructura'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods10', async (req, res) => {
    let project = await Project.find({
        ods: 'Reducción de las Desigualdades'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods11', async (req, res) => {
    let project = await Project.find({
        ods: 'Ciudades Sostenibles'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods12', async (req, res) => {
    let project = await Project.find({
        ods: 'Producción y Consumo Responsables'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods13', async (req, res) => {
    let project = await Project.find({
        ods: 'Acción por el Clima'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods14', async (req, res) => {
    let project = await Project.find({
        ods: 'Vida Submarina'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods15', async (req, res) => {
    let project = await Project.find({
        ods: 'Vida de Ecosistemas Terrestres'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods16', async (req, res) => {
    let project = await Project.find({
        ods: 'Paz, Justicia e Instituciones Sólidas'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/ods17', async (req, res) => {
    let project = await Project.find({
        ods: 'Alianzas para Lograr los Objetivos'
    },
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
    console.log(project)
    res.render('index', {
        project: project
    });
});

router.get('/', async (req, res) => {
    let project = await Project.find(
        (err, projectDB) => {
            if (err) {
                return res.status.json({
                    ok: true,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                projectDB
            });
        });
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
    await Project.update({ _id: id }, req.body);
    res.redirect('/')
})

router.post('/add', async (req, res) => {
    let project = new Project(req.body);
    await project.save();

    console.log(req.body);
    res.render('form');
});



module.exports = router;
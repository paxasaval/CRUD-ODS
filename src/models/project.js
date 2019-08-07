    const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let projectSchema = new  Schema({
    año: {
        type: Number,
        required: [false, 'The year must be assigned']
    }, 
    area: {
        type: String,
        required: [false, 'El area es requerida']
    },
    titulaciones: {
        type: String,
        required: [false, 'La titulacion es requerida']
    },
    participantes_docentes: {
        type: Number,
        required: [false,'no se requiere docentes']
    },
    participantes_estudiantes: {
        type: Number,
        required: [false, 'no se requiere estudiantes']
    },
    modalidad: {
        type: String,
        required: [false, 'La modalidad no es requerida']
    },
    fecha_inicio: {
        type: String,
        required: [false, 'La fecha de inicio es requerida']
    },
    fecha_fin: {
        type: String,
        required: [false, 'La fecha de fin no es requerida']
    },
    nombre: {
        type: String,
        required: [false, 'El nombre es requerido']
    },
    codigo: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    linea_investigacion: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    programa: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    responsable: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    correo: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    telefono: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    utpl_id: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    alcance: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    beneficiarios: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    ods: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    objetivo_general: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    descripcion: {
        type: String,
        required: [false, 'El codigo es requerido']
    },
    resultados: {
        type: String,
        required: [false, 'El codigo es requerido']
    }
});

module.exports = mongoose.model('project', projectSchema);
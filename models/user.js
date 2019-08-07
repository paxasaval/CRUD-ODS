const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "El primer Nombre es requerido"]
    },
    secondName: {
        type: String,
        required: [true, "El segundo Nombre es requerido"]
    },
    firstSurname: {
        type: String,
        required: [true, "El primer Apellido es requerido"]
    },
    secondSurname: {
        type: String,
        required: [true, "El segundo Apellido es requerido"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"]
    },
    username: {
        type: String,
        required: [true, "El nombre de usuario es requerido"]
    },
    password: {
        type: String,
        required: [true, "El password es requerido"]
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, "El rol es requerido"]
    },
    state: {
        type: Boolean,
        default: true
    }
});

userSchema.methods.toJSON = function () {
    let user = this
    let user_object = user.toObject()
    delete user_object.password
    return user_object
};

module.exports = mongoose.model('User', userSchema);
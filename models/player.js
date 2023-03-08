
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const trainingSchema = new Schema({
    attribute: {type: String, required: true, enum: ['PACE', 'SHOT', 'PASS', 'DRI', 'DEF', 'STA']},
    activity: {type: String, required: true},
    duration: {type: Number, required: true}
}, {
    timestamps: true
})


const playerSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    position: {type: String, required: true},
    height: {type: Number, required: true},
    preferredFoot: {type: String, required: true, enum: ['Left', 'Right']},
    trainings: [trainingSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Player', playerSchema)



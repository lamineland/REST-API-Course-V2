/**
 * All database operations related to the vacations collection will reside in this file
 */
var model = require('../models/vacations')
var settings = require('../db/settings')

// CREATE the vacation package
exports.save = function (data, callback) {

    new model.Vacations(data).save()
}

// CREATE multiple vacation packages
exports.saveMany = function (rows, callback) {

    model.Vacations.insertMany(rows)
}

// UPDATE the vacation packages
// http://mongoosejs.com/docs/api.html#model_Model.update
exports.update = function (criteria, doc, callback) {
    // Replaced .update() with .updateMany() as .update() is deprecated
    model.Vacations.updateMany(criteria, doc)
}

// RETRIEVE vacation packages based on criteria
exports.select = function (criteria, callback) {
    model.Vacations.find(criteria)
}
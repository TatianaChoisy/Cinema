
// Controller Require Model
var film = require('../models/filmsModel');

// Define and export a method to be used by the Route
exports.Display_all_films = function (req, res) {

    // Use a method defined in the Model
    film.getAllfilms(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

exports.Insert_all_films = function (req, res) {
    var new_film_insert = new film(req.body);

    // Use a method defined in the Model
    film.insertAllfilms(new_film_insert, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Update_all_films = function (req, res) {
    var new_film_update = new film(req.body);

    // Use a method defined in the Model
    film.updateAllfilms(new_film_update, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.Delete_all_films = function (req, res) {
    var new_film_Delete = new film(req.body);

    // Use a method defined in the Model
    film.deleteAllfilms(new_film_Delete, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log("controller json");
        }
    })

};

exports.display_films_of_the_day = function (req, res) {
    var request = [req.params.day];

    // Use a method defined in the Model
    film.getFilmsOfTheDay(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })

};



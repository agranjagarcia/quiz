var models = require('../models/models.js');

exports.index = function(req, res, next){
    req.user.getFavourites().then(function(quizes){
        quizes.forEach(function(quiz){
            quiz.isFav = true;
        });
        res.render('quizes/favourites', {quizes: quizes, errors:[] });
    }).catch(function(error){next(error)});
};

exports.update = function(req, res){
    req.user.addFavourites(req.quiz).then(function(){
        res.redirect(req.session.redir.toString());
    }).catch(function(error){next(error)});
};

exports.destroy = function(req, res){
    req.user.removeFavourites(req.quiz).then(function(){
        res.redirect(req.session.redir.toString());
    }).catch(function(error){next(error)});
};

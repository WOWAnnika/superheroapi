const heroModel = require("../models/heroModel");
const favoriteModel = require("../models/favoriteModel");

exports.getHeroData = async (req, res) => {
    try {
        const data = await heroModel.fetchAllHeros();
        res.json(data);
    } catch (err) {
        res.status(404).json({message: "Super hero ikke fundet"})
    }
}

exports.getHeroById = async (req, res) => {
    try {
        const data = await heroModel.fetchHero(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(404).json({message: "superHero not found !:) "})
    }
}

exports.addFavorite = (req, res) => {
    try {
        const created = favoriteModel.addFavorite(req.body);
        res.status(201).json({message: "Favorite added!", newFavorites: created});
    } catch (err) {
        res.status(500).json({ message: "error with something"});
    }
};

exports.getFavorites = (req, res) => {
    try {
         const all = favoriteModel.getAllFavorites();
         res.json(all);
    } catch (err) {
        res.status(500).json({message: "error with something"});

    }
}

exports.deleteFavorite = (req, res) => {
    try {
        const ok = favoriteModel.deleteFavorite(req.params.id);
        if (!ok) {
            return res.status(404).json({error: 'Favorite not found'})
        }
        res.json({message: "Favorite deleted!"})
    } catch (err) {
        res.status(500).json({message: "error with something"});
    }
}



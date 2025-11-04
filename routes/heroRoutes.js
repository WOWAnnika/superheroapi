const express = require('express');
const heroController = require('../controllers/heroController')
const { validateFavorite } = require('../middleware/validateFavHero');
const router = express.Router();


router.get("/superheroes", heroController.getHeroData);

router.get("/superheroes/:id", heroController.getHeroById);

router.post("/favorites",validateFavorite, heroController.addFavorite);

router.get("/favorites", heroController.getFavorites);

router.delete("/favorites/:id", heroController.deleteFavorite);

module.exports = router;
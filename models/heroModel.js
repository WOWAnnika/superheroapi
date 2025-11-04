const axios = require("axios");

//henter data for ekstern API superheroapi!
exports.fetchAllHeros = async () => {
    const response = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`);
    const data = response.data;

    return data.map(hero => ({
        id: hero.id,
        name: hero.name,
        fullName: hero.biography.fullName,
        powerstats: hero.powerstats,
        image: hero.images.lg

    }));

}

exports.fetchHero = async (heroId) => {
    const response = await axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`);
    const data = response.data;

    return {
        id: data.id,
        name: data.name,
        fullName: data.biography.fullName,
        powerstats: data.powerstats,
        image: data.images.lg
    };
};
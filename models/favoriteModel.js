let favorites = [];
let currentId = 1;

exports.addFavorite = (data) => {
    const newFavorites = {...data};
    favorites.push(newFavorites);
    return newFavorites;
}

exports.getAllFavorites = () => favorites;

exports.deleteFavorite = (id) => {
    const index = favorites.findIndex((favorite) => favorite.id == id);

    if (index === -1) return false;
    favorites.splice(index, 1);
    return true;
}


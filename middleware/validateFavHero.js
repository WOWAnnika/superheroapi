exports.validateFavorite = (req, res, next) => {
    const { id, note } = req.body;

    if (!note || !id) {
        return res.status(400).json({error: 'Udfyld note, dumbasss'})
    }
    if(!/^[0-9]+$/.test(id)) {
        return res.status(400).json({error: 'forkert id'})
    }
    next();
};
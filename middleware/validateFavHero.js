const joi = require('joi');


const schema = joi.object({
    id: joi.number().required(),
    note: joi.string().min(2).required()
});

exports.validateFavorite = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error ) {
        return res.status(400).json({error: error.details[0].message});
    }
    next();
}

// exports.validateFavorite = (req, res, next) => {
//     const { id, note } = req.body;
//
//     if (!note || !id) {
//         return res.status(400).json({error: 'Udfyld note, dumbasss'})
//     }
//     if(!/^[0-9]+$/.test(id)) {
//         return res.status(400).json({error: 'forkert id'})
//     }
//     next();
// };
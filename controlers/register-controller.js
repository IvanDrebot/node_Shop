let User = require('../models/Users');
// let ErrorControler = require('../errors/controler-error');
let controler = {};

controler.findAll = async (req, res, next)=>{
    try {
        res.json(await User.find({}))
    } catch (e) {
        next(e)
    }
};

controler.create = async (req, res, next)=>{
    try {
        let newUser = req.body;
        let alreadyExists = await User.countDocuments({email: newUser.email});
        if (alreadyExists){
            res.json('Mail or password already exists')
        } else {
            await User.create(newUser);
            res.json('user is registered')
        }
    } catch (e) {
        res.json(e)
    }
};

module.exports = controler;

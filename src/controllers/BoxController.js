const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create({ title: req.body.title });
        return res.json({ box, user: req.userId });
    }

    async show(req, res) {
        console.log(req.params.id);
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        });

        return res.json({ box, user: req.userId });
    }
}

module.exports = new BoxController();
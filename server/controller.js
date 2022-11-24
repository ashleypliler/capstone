
const portraits = require('./db.json')

module.exports = {
    getPortraits: (req, res) => res.status(200).send(portraits)
}
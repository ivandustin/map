const read = require('./read')

function load(filepaths) {
    return filepaths.map(read).flat()
}

module.exports = load

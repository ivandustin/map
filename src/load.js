const fs   = require('fs')
const path = require('path')
const read = require('./read')

function load(dir) {
    let filenames = fs.readdirSync(dir)
    let filepaths = filenames.map(filename => path.join(dir, filename))
    return filepaths.map(read).flat()
}

module.exports = load

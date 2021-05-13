const unique = require('./unique')

function get_words(array) {
    return unique(array.map(entry => entry.selection.map(array => array.flat()).flat()).flat()).sort().filter(identity)
}

function identity(value) {
    return value
}

module.exports = get_words

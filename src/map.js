const { deviation } = require('collatia')
const max_deviation = 0.2

function map(words, lexicon) {
    let undef   = []
    let mapping = words.map(function(greek) {
        let deviations    = lexicon.map(entry => deviation(greek, entry.greek))
        let min_deviation = Math.min(...deviations)
        let lexemes       = []
        if (min_deviation <= max_deviation)
            lexemes = lexicon.filter((entry, index)=> deviations[index] == min_deviation).map(entry => entry.greek)
        if (lexemes.length == 0) {
            undef.push(greek)
            console.error('Not found', greek)
            return
        }
        return { greek, lexemes }
    }).filter(identity)
    return { mapping, undef }
}

function identity(value) {
    return value
}

module.exports = map

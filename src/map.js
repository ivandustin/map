const { same } = require('collatia')

function map(words, lexicon) {
    let undef   = []
    let mapping =  words.map(function(word) {
        let entry  = lexicon.find(entry => same(word, entry.greek))
        let result = null
        if (entry) {
            let lexeme = entry.greek
            let greek  = word
            result     = { greek, lexeme }
        } else {
            undef.push(word)
            console.error('Not found', word)
        }
        return result
    }).filter(identity)
    return { mapping, undef }
}

function identity(value) {
    return value
}

module.exports = map

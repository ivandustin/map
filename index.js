const path      = require('path')
const fs        = require('fs')
const load      = require('./src/load')
const get_words = require('./src/get-words')
const map       = require('./src/map')
const read      = require('./src/read')
const save      = require('./src/save')
const lexicon   = require('../lexicon/lexicon.json')
const input     = path.join(__dirname, '..', 'selection', 'books')
const output    = 'mapping.json'
const wordsfile = 'words.json'
const undeffile = 'undefined.json'

function main() {
    let words = null
    if (fs.existsSync(wordsfile)) {
        words = read(wordsfile)
    } else {
        words = get_words(load(input))
        save(wordsfile, words)
    }
    let { mapping, undef } = map(words, lexicon)
    save(output, mapping)
    save(undeffile, undef)
    console.log('Words', words.length)
    console.log('Defined', mapping.length)
    console.log('Undefined', undef.length)
}

main()

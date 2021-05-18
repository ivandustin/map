#!/usr/bin/env node
const package   = require('./package.json')
const path      = require('path')
const fs        = require('fs')
const argparse  = require('argparse')
const expand    = require('./src/expand')
const load      = require('./src/load')
const get_words = require('./src/get-words')
const map       = require('./src/map')
const save      = require('./src/save')
const lexicon   = require('../lexicon/lexicon.json')
const output    = 'mapping.json'
const undeffile = 'undefined.json'

function main() {
    let args  = parse()
    let input = expand(args.file)
    let words = get_words(load(input))
    let { mapping, undef } = map(words, lexicon)
    save(output, mapping)
    save(undeffile, undef)
    console.log('Words', words.length)
    console.log('Defined', mapping.length)
    console.log('Undefined', undef.length)
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('file',            { help: 'selection file as input', nargs: '+' })
    return parser.parse_args()
}

main()

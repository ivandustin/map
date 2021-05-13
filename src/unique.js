function unique(array) {
    return array.filter((value, index, array)=> array.indexOf(value) == index)
}

module.exports = unique

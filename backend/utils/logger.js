const info = (...params) => {
    console.log(...params)
}

const error = (...params) => {
    console.log(...error)
}

module.exports = {
    info,
    error,
}
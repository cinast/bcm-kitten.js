/**
 * @param {number} min 
 * @param {number} [max = min]
 * @returns {number}
 */
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @returns {string}
 */
function randomId() {
    return randint(10e20).toString(16)
}
export { randint, randomId }

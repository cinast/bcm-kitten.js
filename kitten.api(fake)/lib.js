/**
 * 
 * @param {number} min 
 * @param {number} [max = min]
 * @returns {number}
 */
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export { randint }

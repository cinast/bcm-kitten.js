/**
 *@param{number}min
 *@param{number}[max=min]
 *@returns{number}
 */
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *@returns{string}
 */
function randomId() {
    function r() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return `${r()}${r()}-${r()}-${r()}-${r()}-${r()}${r()}${r()}`;
}
export { randint, randomId };

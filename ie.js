const a = () => {
    console.log(replace("holaaa"))
    const z = [..."holaaaaaaaaaaaa"]
    return 3
}

const replace = (string) => string.replace(/a/, "s")

module.exports = a
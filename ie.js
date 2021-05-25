const a = () => {
  console.log(replace('holaaa'))
  return 3
}

const replace = (string) => string.replace(/a/, 's')

module.exports = a

const generateMessage = (username, text) => {
  return {
    text: text,
    username: username,
    createdAt: new Date().getTime()
  }
}

const generateLocationMessage = (username, url) => {
  return {
    url: url,
    username: username,
    createdAt: new Date().getTime()
  }
}

module.exports = { generateMessage, generateLocationMessage }

const { rtm } = require('./bot')

const sendToMultipleIDs = (message, idsArr) => {
   for (const dmObject of idsArr) {
      rtm.sendMessage(message, dmObject.dmId)
   }
}

module.exports = sendToMultipleIDs

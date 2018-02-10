const { rtm } = require('./bot')

const sendToMultipleIDs = (message, idsArr) => {
   for (const dmObject of idsArr) {
      rtm.sendMessage(message, dmObject.channelID)
   }
}

module.exports = sendToMultipleIDs

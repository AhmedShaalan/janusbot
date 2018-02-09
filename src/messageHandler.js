const messageHandler = () => {
   // For structure of `message`, see https://api.slack.com/events/message

   // Skip messages that are from a bot or my own user ID
   if (
      (message.subtype && message.subtype === 'bot_message') ||
      (!message.subtype && message.user === appData.selfId)
   ) {
      return
   }

   // Log the message
   console.log('New message: ', message)
}

module.exports = messageHandler

const messageHandler = require('./src/messageHandler')
const { rtm, web, appData, RTM_EVENTS, CLIENT_EVENTS } = require('./src/bot')
const scheduledMessagesJob = require('./src/scheduledMessagesJob')
const { updateDMChannels } = require('./src/channels')
const { updateUsersList } = require('./src/users')

// The client will emit an RTM.AUTHENTICATED event on when the connection data is avaiable
// (before the connection is open)
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, connectData => {
   console.debug('JanusBot: Authenticated')

   // Cache the data necessary for this app in memory
   appData.selfId = connectData.self.id
   console.debug(
      `JanusBot: Logged in as ${appData.selfId} of team ${connectData.team.id}`
   )
})

// The client will emit an RTM.RTM_CONNECTION_OPENED event on when the connection is open
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function() {
   console.debug('JanusBot: Connected')
   rtm.sendMessage('DEBUG: Connected', 'D960GKPAN') // make this chanel id dynamic..

   scheduledMessagesJob.start()

   // Call your functions here
})

rtm.on(RTM_EVENTS.MESSAGE, messageHandler)

// Start the connecting process
rtm.start()

// Get list of users
web.users.list((err, data) => {
   if (err) {
      console.error('web.users.list Error:', err) // eslint-disable-line no-console
   } else {
      //   console.log(data)
      updateUsersList(data)

      // Get list of direct messages and parse data
      web.im.list((err, data) => {
         if (err) {
            console.error('ERROR: web.users.list Error:', err) // eslint-disable-line no-console
         } else {
            console.debug(data)
            updateDMChannels(data)
         }
      })
   }
})

console.debug('JanusBot: Started')

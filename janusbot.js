const messageHandler = require('./src/messageHandler')
const { rtm, web, appData, RTM_EVENTS, CLIENT_EVENTS } = require('./src/bot')
const scheduledMessagesJob = require('./src/scheduledMessagesJob')

// The client will emit an RTM.AUTHENTICATED event on when the connection data is avaiable
// (before the connection is open)
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, connectData => {
   console.log('JanusBot: Authenticated')

   // Cache the data necessary for this app in memory
   appData.selfId = connectData.self.id
   console.log(
      `JanusBot: Logged in as ${appData.selfId} of team ${connectData.team.id}`
   )
})

// The client will emit an RTM.RTM_CONNECTION_OPENED event on when the connection is open
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function() {
   console.log('JanusBot: Connected')
   rtm.sendMessage('DEBUG: Connected', 'D960GKPAN') // make this chanel id dynamic..

   scheduledMessagesJob.start()

   // Call your functions here
})

rtm.on(RTM_EVENTS.MESSAGE, messageHandler)

// Start the connecting process
rtm.start()
console.log('JanusBot: Started')

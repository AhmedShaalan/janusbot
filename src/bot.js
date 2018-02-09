const fs = require('fs') // NEW: Add this require (for loading from files).

const {
   RtmClient,
   CLIENT_EVENTS,
   RTM_EVENTS,
   WebClient
} = require('@slack/client')

// Read authentication token from file
const botToken = String(fs.readFileSync('./slack-token')).replace(/\s/g, '')

if (!botToken) {
   console.log("Error: Couldn't load token from file")
   process.exit(1)
}

// Cache of data
const appData = {}

// Initialize the RTM client with the recommended settings. Using the defaults for these
const rtm = new RtmClient(botToken, {
   dataStore: false, // dataStore is deprecated, thsas
   useRtmConnect: true,
   logLevel: 'info' // debug // info // log
})

const web = new WebClient(botToken)

module.exports = { rtm, web, appData, RTM_EVENTS, CLIENT_EVENTS }

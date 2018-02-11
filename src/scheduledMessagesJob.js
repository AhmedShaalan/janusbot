const CronJob = require('cron').CronJob
const { rtm } = require('./bot')
const moment = require('moment')
const { DMChannelsIDsArr } = require('./channels')
const sendToMultipleIDs = require('./sendToMultipleIDs')

const scheduledMessagesJob = new CronJob(
   '* * * * *',
   function() {
      console.debug(`DEBUG: Cron job working @ ${moment().format('HH:mm')}`)

      sendToMultipleIDs(
         `DEBUG: Cron job. @ ${moment().format('HH:mm')}`,
         DMChannelsIDsArr()
      )
   },
   function() {
      /* This function is executed when the job stops */
   },
   false /* Start the job when job.start() is triggered */,
   'Africa/Cairo' /* Time zone of this job. */
)

module.exports = scheduledMessagesJob

// TODO: Set a watchdog for the job
// TODO: ask the the user for their time zone OR take time zone from slack workspace

// TODO: Unhandled rejection SlackRTMError: ws not connected, unable to send message
//     at RTMClient.send (/Users/ahmedshaalan/Workspace/Developer/janus/node_modules/@slack/client/lib/clients/rtm/client.js:755:11)
//     at RTMClient.sendMessage (/Users/ahmedshaalan/Workspace/Developer/janus/node_modules/@slack/client/lib/clients/rtm/client.js:699:15)
//     at sendToMultipleIDs (/Users/ahmedshaalan/Workspace/Developer/janus/src/sendToMultipleIDs.js:5:11)
//     at CronJob.module.exports (/Users/ahmedshaalan/Workspace/Developer/janus/src/scheduledMessagesJob.js:12:7)
//     at CronJob.fireOnTick (/Users/ahmedshaalan/Workspace/Developer/janus/node_modules/cron/lib/cron.js:422:22)
//     at Timeout.callbackWrapper [as _onTimeout] (/Users/ahmedshaalan/Workspace/Developer/janus/node_modules/cron/lib/cron.js:487:9)
//     at ontimeout (timers.js:475:11)
//     at tryOnTimeout (timers.js:310:5)
//     at Timer.listOnTimeout (timers.js:270:5)

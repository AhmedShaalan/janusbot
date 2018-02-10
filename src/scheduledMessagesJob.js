const CronJob = require('cron').CronJob
const { rtm } = require('./bot')
const moment = require('moment')
const { DMChannelsIDsArr } = require('./channels')

// TODO: IMPORTANT: get list of users and push notifications to them.

var scheduledMessagesJob = new CronJob(
   '* * * * *',
   function() {
      console.debug(`DEBUG: Cron job working @ ${moment().format('HH:mm')}`)

      for (const dmChannelID of DMChannelsIDsArr()) {
         rtm.sendMessage(
            `DEBUG: Cron job for DM: ${dmChannelID} @ ${moment().format(
               'HH:mm'
            )}`,
            dmChannelID
         )
      }
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

var CronJob = require('cron').CronJob
const { rtm } = require('./bot')
var moment = require('moment')

// TODO: IMPORTANT: get list of users and push notifications to them.

var scheduledMessagesJob = new CronJob(
   '* * * * *',
   function() {
      console.log(`DEBUG: Cron job working @ ${moment().format('HH:mm')}`)
      rtm.sendMessage(
         `DEBUG: Crong job @ ${moment().format('HH:mm')}`,
         'D960GKPAN'
      ) // make this chanel id dynamic..
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

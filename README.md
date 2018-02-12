# Janus Bot 🤖

Basic implementation for using Slack Developer Kit for Node.js.
Started the project to build an attendance bot. But then I found it helpful for others to see the code.

# How to get started

NOTE: make sure you are using it on test workspace, because it sends a message every minute to all users.

* Create a file and name it `slack-token` and add your slack token there.
* Run `npm start`
* Done! you should receive a message every minute on your workspace

# What is included

* Basic Cron job to send messages on certain time.
* Getting users of certain workspace.
* Extract users with admin and owner permission.
* Extract users' channels id for direct messaging.
* Basic implementation for checking if the user does exist or not.
* Basic function to get user real name from an id.
* Basic implementation to send a direct message for a list of users

# Useful links

* https://console.cloud.google.com/home/dashboard
* https://api.slack.com/bot-users
* https://api.slack.com/apps/A9723DQJK/bots?saved=1
* https://codelabs.developers.google.com/codelabs/cloud-slack-bot/index.html

# notes

* Time zones name: https://momentjs.com/timezone/
* Corn job time parser: https://crontab.guru
* Cron job every minute `* * * * *`
* Using chat.update, your messages can evolve as the consequences of users pressing buttons emerge. (https://api.slack.com/docs/messages)

# Objectives

* Bot ask's team members if they are coming today or not.
* Store data in firebase

# Simple todo list

* at 10:30 it asks every user if he's in the office or not

   * if yes, then yes... and record this in a database or something
   * if no, then it asks him why? (work from home, casual leave, etc.)

* First message in the morning should contains a (Morning Honey, you came to work?) with replies yes and no actions.

* Send welcome message to new users (https://api.slack.com/best-practices/blueprints/new-user-notification)

# v0.0.1 Action list

* Send message at certain time.
   * the message should contain actions (https://api.slack.com/interactive-messages)
   * the message should be personalized (use get user id)

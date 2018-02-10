let DMChannels = []
let DMChannelsIDs = []
const { isUserExist } = require('./users')

const updateDMChannels = data => {
   // drop old data if exists.
   if (DMChannels.length > 0) DMChannels.length = 0
   if (DMChannelsIDs.length > 0) DMChannelsIDs.length = 0

   // store new data
   DMChannels = data.ims

   extractChannelsIds()
}

const extractChannelsIds = () => {
   DMChannelsIDs = DMChannels.filter(channelObject =>
      isUserExist(channelObject.user)
   ).map(channelObject => ({
      channelID: channelObject.id,
      userId: channelObject.user
   }))
}

const DMChannelsArr = () => {
   return DMChannelsArr
}

const DMChannelsIDsArr = () => {
   return DMChannelsIDs
}

module.exports = { updateDMChannels, DMChannelsArr, DMChannelsIDsArr }

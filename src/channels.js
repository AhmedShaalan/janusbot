let DMChannels = []
let DMChannelsIDs = []

const updateDMChannels = data => {
   // drop old data if exists.
   if (DMChannels.length > 0) DMChannels.length = 0
   if (DMChannelsIDs.length > 0) DMChannelsIDs.length = 0

   // store new data
   DMChannels = data.ims

   extractChannelsIds()
}

const extractChannelsIds = () => {
   DMChannelsIDs = DMChannels.filter(
      DMChannelObject =>
         DMChannelObject.is_user_deleted == false &&
         DMChannelObject.user !== 'USLACKBOT'
   ).map(DMChannelObject => ({
      dmId: DMChannelObject.id,
      dmUserId: DMChannelObject.user
   }))

   console.debug('DEBUG: Parsed IDs: ' + DMChannelsIDs)
}

const DMChannelsArr = () => {
   return DMChannelsArr
}

const DMChannelsIDsArr = () => {
   return DMChannelsIDs
}

module.exports = { updateDMChannels, DMChannelsArr, DMChannelsIDsArr }

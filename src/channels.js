let DMChannels = []
let DMChannelsIDs = []

const updateDMChannels = data => {
   DMChannels = data.ims

   extractChannelsIds()
}

const extractChannelsIds = () => {
   // TODO: filter slackbot from the list

   DMChannelsIDs = DMChannels.map(aDMChannel => {
      return aDMChannel.id
   })
}

const DMChannelsArr = () => {
   return DMChannelsArr
}

const DMChannelsIDsArr = () => {
   return DMChannelsIDs
}

module.exports = { updateDMChannels, DMChannelsArr, DMChannelsIDsArr }

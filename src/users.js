let usersList = []
let adminUsers = []
let ownerUsers = []

const usersArr = () => usersList
const adminUsersArr = () => adminUsers
const ownerUsersArr = () => ownerUsers

const updateUsersList = data => {
   usersList = data.members.filter(
      member =>
         member.is_bot === false &&
         member.is_app_user === false &&
         member.deleted === false
   )

   getAdminUsers()
   getOwnerUsers()
}

const getAdminUsers = () => {
   adminUsers = usersList.filter(member => member.is_admin === true)
}

const getOwnerUsers = () => {
   ownerUsers = usersList.filter(member => member.is_owner === true)
}

const getUserObject = userID => {
   let user = usersList.find(user => user.id === userID)

   if (user) {
      return user
   } else {
      return false
   }
}

// this function will return false if the user is deleted OR its a bot.
const isUserExist = userID => {
   if (getUserObject(userID)) {
      return true
   } else {
      return false
   }
}

const getUserRealName = userID => {
   const user = getUserObject(userID)

   if (user) {
      console.log(user.real_name)
      return user.real_name
   } else {
      return false
   }
}

// TODO: function to getUserRealName (real name by id)
// TODO: function to get user time zone
// TODO: function to check if user active

module.exports = {
   updateUsersList,
   usersArr,
   getAdminUsers,
   getOwnerUsers,
   getUserObject,
   isUserExist,
   adminUsersArr,
   ownerUsersArr,
   getUserRealName
}

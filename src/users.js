let usersList = []
let adminUsers = []
let ownerUsers = []

const usersArr = () => usersList

const updateUsersList = data => {
   usersList = data.members.filter(
      member =>
         member.is_bot == false &&
         member.is_app_user == false &&
         member.deleted == false
   )

   console.debug(usersList)
}

const getAdminUsers = () => {
   adminUsers = usersList.filter(member => member.is_admin == true)

   console.log(adminUsers)
}

const getOwnerUsers = () => {
   ownerUsers = usersList.filter(member => member.is_owner == true)

   console.log(ownerUsers)
}

const getUserObject = userID => {
   let user = usersList.find(user => user.id === userID)
   console.log(user)

   if (user) {
      console.log(user)
      return user
   } else {
      console.log(user)
      return false
   }
}

const isUserExist = userID => {
   if (getUserObject(userID)) {
      return true
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
   isUserExist
}

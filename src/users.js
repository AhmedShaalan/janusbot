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

module.exports = {
   updateUsersList,
   usersArr,
   getAdminUsers,
   getOwnerUsers
}

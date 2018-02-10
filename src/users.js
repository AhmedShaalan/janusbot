let usersList = []

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

module.exports = {
   updateUsersList,
   usersArr
}

const router = require('express').Router();

const {
    getUsers,
    addUser,
    getUserByID,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// api route users
router.route('/')
.get(getUsers)
.post(addUser);

//api routes users id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);

//api routes friends id
router.route('/:id/friends/:friendID')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
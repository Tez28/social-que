const router = require('express').Router();

const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// route api thoughts
router.route('/').get(getThoughts)

//api thoughts user ID
router.route('/:userId').post(addThought)

//api thoughtsId
router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

//api thoughts reaction
router.route('/:thoughtId/reactions')
.post(addReaction)

//api thoughts reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;
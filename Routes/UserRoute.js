const express = require('express');

const router = express.Router()
const {register, getUser} = require('../Controller/userController')
router.post('/register',register)


router.get('/getusers',getUser)





module.exports = router
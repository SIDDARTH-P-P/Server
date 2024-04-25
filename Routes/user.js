const express = require("express");
const router = express.Router();

const Usercontroller = require("../Controllers/user")


router.post('/',Usercontroller.createuser);
router.get('/',Usercontroller.getuser);
router.get('/:id',Usercontroller.getoneuser);
router.put('/:id',Usercontroller.update);
router.delete('/:id',Usercontroller.delete);

module.exports = router;
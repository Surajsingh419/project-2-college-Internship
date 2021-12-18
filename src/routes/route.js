const express = require('express');
const router = express.Router();

const CollegeController =require("../controllers/Collegecontroller")






router.post('/functionup/colleges', CollegeController.registercollege)
router.post('/functionup/intern',CollegeController.createintern );
router.get('/functionup/interndetails',CollegeController. alldetails);





module.exports = router;
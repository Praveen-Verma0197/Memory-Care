const express = require('express')
const router = express.Router()

const { loginUser, gallery, changePassword } = require('../controller/userController')
const multer=require('multer');
var path = require('path');
var fs = require('fs');
var pathToCreate = "./images/gallery/";
//image upload code
var Storage = multer.diskStorage({
    destination:async function (req, files, cb) {
        console.log("Files From Disk :  ");     
          cb(null, pathToCreate);
      
    },
    filename: (req, files, cb) => {
        cb(null,  "images" + path.extname(files.originalname));
    
    },
  });
  
  var upload = multer({
    storage: Storage,
    fileFilter: function (req, files, callback) {
        var ext = path.extname(files.originalname);
        var extLower = ext.toLowerCase();
        if (extLower == '.jpeg' || extLower == '.png' || extLower == '.jpg') {
            callback(null, true)
        } else {
            callback({
                message: 'Invalid file Type. Only jpg, png and jpeg are allowed.'
            }, false);
  
        }
    },
    
  }).single("image");
router.get('/login', loginUser)

router.post('/gallery',upload, gallery);
router.post('/changePassword', changePassword)

module.exports = router
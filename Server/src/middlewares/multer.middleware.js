import multer from "multer";
// It is a middleware which takes files from client-side to server-side , technically just before database as we provide destination that where to keep those files temporarily (in Disk) , for transferring to cloudinary. In user.routes.js we have used this multer middleware before  calling registerUser
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function(req, file, cb) {
        
        cb(null, file.originalname)
    }
})


export const upload = multer({
    storage: storage
})
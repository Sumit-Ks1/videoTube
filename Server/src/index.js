import dotenv from 'dotenv';

import connectDB from './db/index.js';

import { app } from './app.js';

dotenv.config({
    path: './.env' // set -r dotenv/config --experimental-json-modules in script dev in package.json
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("mongodb CONNECTION FAILED: " , err);
})


// import express from 'express';
// const app = express();

// ( async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error',()=>{
//             console.log('Error: ',error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`listening on port ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.log("Error: " ,error)
//         throw err
//     }
// })()
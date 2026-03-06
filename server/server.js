require ('dotenv').config({path: "./.env"});

const {app} = require ('./app');
const connectDB = require('./db');


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed!",err)
})
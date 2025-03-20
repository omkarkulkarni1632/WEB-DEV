const mongoose = require('mongoose');
const express = require('express');
const app = express();

const { userRouter } = require("./routes/user")
const {  courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

app.use("/user", userRouter)        //yaha prefix daal diye ki "/user" se jo bhi req ayega woh userRouter ke pass jyega 
app.use("/course", courseRouter)    //same here router ke prefix ko pehle hi define kr diye hai
app.use("/admin", adminRouter)



main();


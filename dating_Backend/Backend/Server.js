const express= require('express')
const dotenv= require('dotenv');
const logger = require('morgan');
const cors=require('cors')

const app =express();
dotenv.config();
app.use(logger('dev'));

const db=require("./Database/db")
app.use(express.json())

db.connect()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));
app.use("/user",require("./Routes/userRoute"))
const port=3000;
app.listen(port,()=>{
    console.log(`server is running${port}`);
})  ;
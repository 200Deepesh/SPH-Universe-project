import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    res.send("server is live!!");
});

app.listen(port, ()=>{
    console.log(`server is started in port ${port}!!`);
});
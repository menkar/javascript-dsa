import express from "express";

const app = express();

app.get('/', async () => {
    res.send("Welcome to Swapnil Menkar's JS - DSA ");
}); 


app.listen(3000, ()=> {
    console.log("Server is running on http://localshot:3000");
});
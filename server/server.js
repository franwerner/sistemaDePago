import express from "express"

const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send({"testeo": "a"})
})

app.post("/api",(req,res)=>{
    console.log(req.body)
    
    res.json({"message":"recibido"})
})

app.get("/api",(req,res) =>{
      res.send({"test" : "test"})
})

app.get("/api2",(req,res) =>{
    res.send({"test2" : "test2"})
})


app.listen(port, () => {
    console.log("Servidor en funcionamiento en el puerto", port);
});
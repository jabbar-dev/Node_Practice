const express = require('express')
const app = express()
app.use(express.static('views/public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(logger)
app.get('/', (req, res)=>{

    //res.donwload('server.js')
    res.render('index', {friend: "Sagar"})
    

})

app.get('/users',(req,res)=>{

res.send('Users List')

})

const userRouter = require('./api/routes/users')
app.use('/users', userRouter)


function logger (req,res,next){
    console.log(req.originalUrl)
    next()
}
app.listen(3001, console.log("Server is In the AIR"));
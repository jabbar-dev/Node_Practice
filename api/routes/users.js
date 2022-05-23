const express  = require('express')
const router = express.Router()

users = ['jabbar', 'sagar']

// router.route('/:id')
// .get((req, res)=>{

//     res.send(` ${req.params.id}  ID`)

// })




router.get('/new',(req, res)=>{

    res.render('../views/public/users/new', {firstName: "Jabbar"})

})

router.get('/:id',(req, res)=>{

    res.send(` ${users[req.params.id]} `)

})

router.post('/', (req, res)=>{

//res.send(req.body.firstName)
users.push(req.body.firstName)
res.redirect(`users/${users.length-1}`)
 
})
 
module.exports = router
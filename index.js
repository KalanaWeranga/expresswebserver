const express = require('express');
const app = express()


const courese =[
    {id:1,name:'maths'},
    {id:2,name:'sinhala'},
    {id:3,name:'com'}
]

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/api/coursers',(req,res)=>{
    res.send(courese);
})

app.get('/api/coursers/:id',(req,res)=>{
    var course=courese.find(c=> c.id===parseInt((req.params.id)));
    if (!course) {
        res.status(404).send("The course with the given id was not found")
    }
    res.status(200).send(course)

})


const port =process.env.PORT || 3000;

app.listen(3000,()=>console.log(`Listening on port ${port}...`))
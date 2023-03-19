const express = require('express')
const app = express()

const port = process.env.PORT || 3000


const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

   app.get('/data1', (req, res) => {
    res.send({
        name : "Mai",
        age : 22,
        city : "Fayoum"
    })
   })

   app.get('/data2', (req, res) => {
    res.send({
        name : "Mohamed",
        age : 45,
        city : "kuiat"
    })
   })

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// hbs 

app.set('view engine', 'hbs');

  const viewsDirectory = path.join (__dirname , "../temp1/views" )
  app.set( "views" , viewsDirectory)

  //////////////////////////////////////////////////////////////////

  var hbs = require ('hbs')

  const partialsPath = path.join (__dirname , "../temp1/partials")

  hbs.registerPartials(partialsPath)

  ///////////////////////////////////////////////////////////////////

app.get('/' , (req , res) => {
    res.render('index' , {
        title: "Blood App",
        imagl:"imgs/logo.png",
        imgs1:"imgs/HomeBG.jpg",
        imgs2:"imgs/img1.jpg",
        imgs3:"imgs/AboutUsPhoto2.png", 
    })
})

app.get('/team' , (req , res) => {
    res.render('team' , {
        title : "TEAM",
        name : "Mahomoud",
        city: "Fayoum",
        age: 22,
        img2 : "imgs/trainer-2.jpg",
        name2 : "Tarser",
        city2: "Menia",
        age2: 22,
        name3:"Reham",
        name4:"Said",
        img3 : "imgs/trainer-3.jpg",
        img4 : "imgs/trainer-1.jpg",
    })
})

app.get('/about' , (req , res) => {
    res.render('about' , {
        title: "ABOUT",
        image:"imgs/map.jpg"
    
    })
})


app.get('/signin' , (req , res) => {
    res.render('signin' , {
        title: "Sign",
        email:"MaiMohamed@gmail.com",
        password:"MaiMoahmed4578",
        firstname:"Mai",
        Lastname:"Mohamed",
        image:"imgs/map.jpg",
        phone:"01091794542"
    
    })
})


app.get('/footer' , (req , res) => {
    res.render('footer' , {
        title: "FOOTER",
        imagl:"imgs/logo.png"
    
    })
})



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
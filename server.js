const express = require('express')
const http = require('http')
const app = express()
const port = 3000
const path = require('path')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
// const nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     ssl:false,
//     tls: true,
//     auth: {
//       user: '',
//       pass: ''
//     }
//   });
  
  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))
app.set('view engine','html')
nunjucks.configure('app/views', {
    autoescape: true,
    express: app
});
app.use(express.static(path.join(__dirname,'/public')))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/services',(req,res)=>{
    res.render('services')
})
app.get('/gallery',(req,res)=>{
    res.render('gallery')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.post('/bookAppointmentPost', (req,res)=>{
   console.log('book appointment-->',req.body)
//    let bodyData = 'Name: '+ req.body.name +  '<br><br>Email: ' + req.body.email + '<br><br>Service Type: '+ req.body.serviceType + '<br><br>Date: '+ req.body.date + '<br><br>Time: '+ req.body.time+ '<br><br>Phone: '+ req.body.phone + '<br><br>Message: '+req.body.message 
//   // console.log('bodyData-->',bodyData)
//    var mailOptions = {
//     from: 'ronalda.barclay@gmail.com',
//     to: req.body.email,
//     subject: 'Booked Appointment',
//     text: bodyData
//   };
//  transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log('Email sent: ' + info.response)
//         }
//     });
    res.redirect('/')
})

const server = http.createServer(app)
server.listen(port,()=>{
    console.log(`Running on http://localhost:${port}`)
})
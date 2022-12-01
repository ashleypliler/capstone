const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json())
// app.use(express.static('schedule-session'))

const {getCompliment} = require('./controller');

app.get("/api/compliment", getCompliment);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/schedule-session/schedule.html')
})

app.post("/", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ashleyallysephoto@gmail.com',
            pass: ''
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'ashleyallysephoto@gmail.com',
        subject: `New photo session for ${req.body.firstName}`,
        text: req.body.firstName
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){ 
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response)
            res.send('sucess')
        }
    })
})



app.listen(5500, () => {
    console.log('Server running on port 5500');
})

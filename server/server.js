const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());


const {getCompliment} = require('./controller');

app.get("/api/compliment", getCompliment);

app.post("/email", (req, res) => {
    console.log(req.body);
    const {  firstname, lastname, email, number, session, date, time } = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ashleyallysephoto@gmail.com',
            pass: 'serquozxjeodtwbr'
        }
    })

    const mailOptions = {
        from: email,
        to: 'ashleyallysephoto@gmail.com',
        subject: `New photo session for ${firstname}`,
        text: `     
            First Name: ${firstname}
            Last Name: ${lastname}
            Email: ${email}
            Phone Number: ${number}
            Session Type: ${session}
            Date: ${date}
            Time: ${time}`
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



app.listen(4000, () => {
    console.log('Server running on port 4000');
})

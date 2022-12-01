const express = require('express');
const cors = require("cors");
const nodeMailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json())
app.use(nodeMailer());

const {getCompliment} = require('./controller');

app.get("/api/compliment", getCompliment);
app.post("/", (req, res) => {
    const transporter = nodeMailer.createTestAccount({
        service: 'gmail',
        auth: {
            user:'ashleypliler1@gmail.com',
            pass: 'nodemailerpass'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'ashleypliler1@gmail.com',
        subject: `New photo session for ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
})



app.listen(4000, () => {
    console.log('Server running on port 4000');
})

const nodemailer = require('nodemailer');

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["“A photograph is the pause button of life.” - Unknown", "“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.” — Aaron Siskind", "“When I have a camera in my hand, I know no fear.” — Alfred Eisenstaedt", "“Which of my photographers is my favorite? The one i'm going to take tomorrow.” -Imogen Cunningham", "“When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice” - Robert Frank"];

        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
   postEmail: (req, res) => {
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
        
        NEW PHOTO SESSION FOR:

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
},

   
}
const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());


const {getCompliment,postEmail} = require('./controller');

app.get("/api/compliment", getCompliment);
app.post("/email", postEmail);



app.listen(4000, () => {
    console.log('Server running on port 4000');
})

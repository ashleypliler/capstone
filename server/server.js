const express = require('express');
const {getPortraits} = require('./controller');
const app = express();

app.use(express.json())

app.get('/api/portraits', getPortraits)

app.listen(4000, () => {
    console.log('Server running on port 4000');
})

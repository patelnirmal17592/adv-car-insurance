const express = require('express')
const app = express();
const dotenv = require('dotenv').config({ path: '../../env'})

console.log(process.env);

app.listen(3001, () => console.log('Port is running on 3001'));
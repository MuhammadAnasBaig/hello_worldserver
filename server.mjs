console.log("this is express server hello world");

import express from 'express';
const app = express()

app.get('/', (req, res) => {
    console.log("hello anas");
  res.send('Hello World!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
  console.log(`Example server listen on port ${PORT}`)
})



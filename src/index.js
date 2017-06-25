import express from 'express';
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Miew!')
})

app.listen(4040, () => {
  console.log('Example app listening on port 4040!')
})
import express from 'express'
import db from './db'

const app = express()
const port = (process.env.PORT || 4040)

app.get('/', (req, res) => {
  db.getConnection((err, connection) => {
    connection.query(`SELECT 'Hello world'`, [], (error, results) => {
      connection.release()
      if(error) {
        console.log(error)
        return
      }
       res.send(results)
    })
  })
})

app.listen(port, () => {
  console.log(`RepoHub app listening on port ${port}!`)
})
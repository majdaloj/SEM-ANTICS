const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const classifier = require("./routes/classifier");
// Condense compiler info
app.use(express.json());
app.use(cors())
app.use("/classify", classifier)
app.get("/", async (req, res, next) => {
    res.status(200).json({ ping: "pong" });
  });
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


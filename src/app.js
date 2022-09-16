const express = require('express')
const app = express()
const port = 3000

app.use(
    require('./routes/ioIntensive'),
    require('./routes/cpuIntensive'),
    require('./routes/simple'),
    require('./routes/workerJob')
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
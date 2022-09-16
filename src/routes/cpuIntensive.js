const router = require('express').Router()
const {cpuIntensiveTask} = require('../functions');
router.get('/cpuIntensive', async (req, res) => {
    const start = new Date();
    return  Promise.all(
        [
            cpuIntensiveTask(1),
            cpuIntensiveTask(2),
            cpuIntensiveTask(3),
            cpuIntensiveTask(4),
        ]
    ).then(() => res.send('All CPU intensive task is completed in ' + ((new Date() - start) / 1000)))
})

module.exports = router
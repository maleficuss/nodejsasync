/*
    Cpu Intensive Tasks run
 */
const router = require('express').Router()
const {ioIntensiveTask} = require('../functions');
router.get('/ioIntensive', async (req, res) => {
    const start = new Date();
    return Promise.all([
        ioIntensiveTask(1),
        ioIntensiveTask(2),
        ioIntensiveTask(3),
        ioIntensiveTask(4),
        ioIntensiveTask(5),
        ioIntensiveTask(6),
        ioIntensiveTask(7)
    ]).then(() => res.send('All IO intensive task is completed in ' + ((new Date() - start) / 1000)))
})



module.exports = router
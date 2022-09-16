const router = require('express').Router()
const {Worker} = require('worker_threads')
router.get('/forkJob', async (req, res) => {
    const start = new Date();
    return Promise.all([
        popChildProcess(1),
        popChildProcess(2),
        popChildProcess(3),
        popChildProcess(4),
        popChildProcess(5),
    ]).then(() => res.send('All CPU intensive task is completed in ' + ((new Date() - start) / 1000)))

})

async function popChildProcess(delayInSec) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('../src/workerProcess.js', {workerData : delayInSec})
        worker.on('message', () => resolve())
        worker.on('error', (error) => reject(error))
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

module.exports = router
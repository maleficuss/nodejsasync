const sleep = require("sleep-promise");
const axios = require("axios");

async function cpuIntensiveTask(delayInSec) {
    await sleep(delayInSec * 1000)
    const message = 'CPU intensive task is completed with a delay of ' + delayInSec + ' seconds \n'
    console.log(message)
}

async function ioIntensiveTask(delayInSec) {
    const delay = delayInSec * 1000
    const mockResponseUrl = 'https://mockbin.org/bin/3811106b-13f8-4c82-81b0-b710e0a480a8'
    const requestUrl = 'https://deelay.me/' + delay + '/' + mockResponseUrl
    return axios.get(requestUrl).then(() => console.log('CPU intensive task is completed with a delay of ' + delayInSec + ' seconds \n'))
}

module.exports = {cpuIntensiveTask, ioIntensiveTask}
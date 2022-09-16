const { workerData, parentPort } = require('worker_threads');

const { cpuIntensiveTask } = require('../src/functions')
cpuIntensiveTask(workerData).then(() => parentPort.postMessage(0))


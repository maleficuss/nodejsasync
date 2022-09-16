const router = require('express').Router()
router.get('/simple', async (req, res) => {
    res.send('Simple Response')
})

module.exports = router
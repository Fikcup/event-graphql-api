const router = require('express').Router();
const apiRoutes = require('./api');

// route /api/
router.use('/api', apiRoutes);

// route /
router.use('/', (req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;
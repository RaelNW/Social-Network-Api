// Initialize router
const router = require('express').Router();
// Import all of the API routes from /api/index.js
const apiRoutes = require('./api');
// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

// If no API routes are hit, give 404 error
router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
}
);
// Export router
module.exports = router;
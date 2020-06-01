const express = require('express');
const router = express.Router();
const path = require('path');

router.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/virtualUI/', 'index.html'));
});

module.exports = router;
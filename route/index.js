const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Read all route files in this directory
const routeFiles = fs.readdirSync(__dirname).filter(file => {
    return file !== 'index.js' && file.endsWith('.route.js');
});

// Register each route
routeFiles.forEach(file => {
    const routeName = file.replace('.route.js', '');
    const routeModule = require(path.join(__dirname, file));
    router.use(`/${routeName}`, routeModule);
    console.log(`Route loaded: /${routeName}`);
});

module.exports = router;

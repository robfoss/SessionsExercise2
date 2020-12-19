const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
//Home Page Routers
router.get('/', homeController.homeController);
router.post('/', homeController.processLead);

module.exports = router;
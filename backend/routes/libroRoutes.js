const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/', libroController.getLibros);
router.post('/', libroController.createLibro);

module.exports = router;
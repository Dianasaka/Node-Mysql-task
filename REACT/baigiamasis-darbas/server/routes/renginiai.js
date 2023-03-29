const { gautiRenginius } = require('../controllers/renginiai/index.js');
const router = require('express').Router();

router.get('/', gautiRenginius);

module.exports = router;
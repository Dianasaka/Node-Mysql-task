const { gautiDalyvius } = require('../controllers/dalyviai/index.js');
const { registruotiDalyvi } = require('../controllers/dalyviai/registracija.js');
const { registruotiDalyviPost } = require('../controllers/dalyviai/registracijaPost.js');
const { istrintiDalyvi } = require('../controllers/dalyviai/istrinti.js');
const router = require('express').Router();

router.get('/', gautiDalyvius);
router.get('/registracija', registruotiDalyvi);
router.post('/registracija', registruotiDalyviPost);
//router.delete('/istrinti', istrintiDalyvi);

module.exports = router;
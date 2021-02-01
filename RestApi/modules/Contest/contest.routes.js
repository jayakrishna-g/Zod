const router = require('express').Router();
const contestService = require('./contest.service');

router.get('/:id', (req, res) => {
  contestService.readContest(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Contest not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.put('/:id', (req, res) => {
  contestService.updateContest(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Contest not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.delete('/:id', (req, res) => {
  contestService.deleteContest(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Contest not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.get('/all', (req, res) => {
  contestService.getAllContests((err, result) => {
    if (err) {
      res.status(404).send({ message: 'No Contest Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.post('/', (req, res) => {
  console.log(req.body);
  contestService.createContest(req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Contest cant be created' });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;

const router = require('express').Router();
const problemService = require('./problem.service');

router.get('/:id', (req, res) => {
  problemService.readProblem(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Problem not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.put('/:id', (req, res) => {
  problemService.updateProblem(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Problem not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.delete('/:id', (req, res) => {
  problemService.deleteProblem(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Problem not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.post('/', (req, res) => {
  problemService.createProblem(req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Problem not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;

const router = require('express').Router();
const spacesService = require('./spaces.service');

router.get('/:id', (req, res) => {
  spacesService.readSpaces(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.put('/:id', (req, res) => {
  spacesService.updateSpaces(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.delete('/:id', (req, res) => {
  spacesService.deleteSpaces(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.post('/', (req, res) => {
  spacesService.createSpaces(req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;

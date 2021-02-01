const router = require('express').Router();
const ratingService = require('./ratings.service');

router.get('/:id', (req, res) => {
  ratingService.readRating(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Rating not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.put('/:id', (req, res) => {
  ratingService.updateRating(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Rating not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.delete('/:id', (req, res) => {
  ratingService.deleteRating(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Rating not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.post('/', (req, res) => {
  ratingService.createRating(req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Rating not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;

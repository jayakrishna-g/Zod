/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const router = require('express').Router();
const spacesService = require('./spaces.service');

router.get('/all', (req, res) => {
  spacesService.getAllSpaces((err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found', err });
    } else {
      res.status(200).send(result);
    }
  });
});

router.get('/:id', (req, res) => {
  spacesService.readSpaces(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found',err });
    } else {
      res.status(200).send(result);
    }
  });
});

router.put('/:id', (req, res) => {
  spacesService.updateSpaces(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Space not Found With Given Id' });
    } else {
      res.status(200).send({ message: 'Space successfully Updated', data: result });
    }
  });
});
router.delete('/:id', (req, res) => {
  spacesService.deleteSpaces(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Spaces not Found' });
    } else {
      res.status(200).send({ message: 'Space successfully Deleted' });
    }
  });
});
router.post('/', (req, res) => {
  req.body.admin = req.user._id;
  req.body.members = [req.user._id];
  spacesService.createSpaces(req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Invaild Data' });
    } else {
      res.status(200).send({ message: 'Space Successfully Created', data: result });
    }
  });
});

module.exports = router;

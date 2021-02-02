const router = require('express').Router();
const leaderboardService = require('./leaderBoardCell.service');

router.get('/:id', (req, res) => {
  leaderboardService.readLeaderboard(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Leaderboard not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.put('/:id', (req, res) => {
  leaderboardService.updateLeaderboard(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Leaderboard not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.delete('/:id', (req, res) => {
  leaderboardService.deleteLeaderboard(req.params.id, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Leaderboard not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});
router.post('/', (req, res) => {
  leaderboardService.createLeaderboard(req.body, (err, result) => {
    if (err) {
      res.status(404).send({ message: 'Leaderboard not Found' });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;

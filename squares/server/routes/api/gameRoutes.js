const router = require('express').Router();
const { Game } = require('../../models');

// GET all Stock Valuations
router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      // include: [{ model: Comment,
      //     attributes: ['id', 'comment', 'comment_date'],
      //     include: {
      //       model: User,
      //       attributes: ['username']
      //     }
      // }],
    });
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single valuation
router.get('/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      // include: [{ model: Comment,
      //     attributes: ['id', 'comment', 'comment_date'],
      // }],
    });

    if (!gameData) {
      res.status(404).json({ message: 'No game found with this id!' });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
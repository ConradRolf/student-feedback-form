const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// creating a post route for the review component that takes in values and posts them to the data base
router.post('/', (req, res) => {
    let newReview = req.body;
    console.log(`Adding review`, newReview);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newReview.feeling, newReview.understanding, newReview.support, newReview.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new review`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
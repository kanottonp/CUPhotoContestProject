var express = require('express');
var router = express.Router();

var find = require('../public/javascripts/findTopTenInArray')

var firstContest = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 0);
var secondContest = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 0);
var thirdContest = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 0);
var forthContest = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 0);
var fifthContest = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 0);
var totalVotes = 0

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Phuphu' });
});

router.get('/score', (req, res, next) => {
    var firstResult = find.findTopTenInArray(firstContest)
    var secondResult = find.findTopTenInArray(secondContest)
    var thirdResult = find.findTopTenInArray(thirdContest)
    var forthResult = find.findTopTenInArray(forthContest)
    var fifthResult = find.findTopTenInArray(fifthContest)

    console.log("firstResult is")
    console.log(firstResult)
    console.log("secondResult is")
    console.log(secondResult)
    console.log("thirdResult is")
    console.log(thirdResult)
    console.log("forthResult is")
    console.log(forthResult)
    console.log("fifthResult is")
    console.log(fifthResult)

    res.render('score', {
        title: 'score',
        totalVotes: totalVotes,
        firstTitle: 'vote1',
        secondTitle: 'vote2',
        thirdTitle: 'vote3',
        forthTitle: 'vote4',
        fifthTitle: 'vote5',
        firstContestFirstPlaceIndex: Number(firstResult[0].index),
        firstContestFirstPlaceScore: Number(firstResult[0].score),
        firstContestSecondPlaceIndex: Number(firstResult[1].index),
        firstContestSecondPlaceScore: Number(firstResult[1].score),
        firstContestThirdPlaceIndex: Number(firstResult[2].index),
        firstContestThirdPlaceScore: Number(firstResult[2].score),
        secondContestFirstPlaceIndex: Number(secondResult[0].index),
        secondContestFirstPlaceScore: Number(secondResult[0].score),
        secondContestSecondPlaceIndex: Number(secondResult[1].index),
        secondContestSecondPlaceScore: Number(secondResult[1].score),
        secondContestThirdPlaceIndex: Number(secondResult[2].index),
        secondContestThirdPlaceScore: Number(secondResult[2].score),
        thirdContestFirstPlaceIndex: Number(thirdResult[0].index),
        thirdContestFirstPlaceScore: Number(thirdResult[0].score),
        thirdContestSecondPlaceIndex: Number(thirdResult[1].index),
        thirdContestSecondPlaceScore: Number(thirdResult[1].score),
        thirdContestThirdPlaceIndex: Number(thirdResult[2].index),
        thirdContestThirdPlaceScore: Number(thirdResult[2].score),
        forthContestFirstPlaceIndex: Number(forthResult[0].index),
        forthContestFirstPlaceScore: Number(forthResult[0].score),
        forthContestSecondPlaceIndex: Number(forthResult[1].index),
        forthContestSecondPlaceScore: Number(forthResult[1].score),
        forthContestThirdPlaceIndex: Number(forthResult[2].index),
        forthContestThirdPlaceScore: Number(forthResult[2].score),
        fifthContestFirstPlaceIndex: Number(fifthResult[0].index),
        fifthContestFirstPlaceScore: Number(fifthResult[0].score),
        fifthContestSecondPlaceIndex: Number(fifthResult[1].index),
        fifthContestSecondPlaceScore: Number(fifthResult[1].score),
        fifthContestThirdPlaceIndex: Number(fifthResult[2].index),
        fifthContestThirdPlaceScore: Number(fifthResult[2].score),
    });
})

/* POST Render First Contest Vote Page. */
router.post('/beginvote', function(req, res, next) {
    totalVotes += 1
    res.render('vote1', {
        title: 'vote1'
    });
});

/* POST First Contest Vote, then Render First Contest Vote Page. */

router.post('/vote1', function(req, res, next) {

    var firstPlace = req.body.firstPlace
    var secondPlace = req.body.secondPlace
    var thirdPlace = req.body.thirdPlace

    firstContest[firstPlace] += 3
    firstContest[secondPlace] += 2
    firstContest[thirdPlace] += 1

    // console.log(firstContest)
    res.render('vote2', {
        title: 'vote2'
    });
});


router.post('/vote2', function(req, res, next) {

    var firstPlace = req.body.firstPlace
    var secondPlace = req.body.secondPlace
    var thirdPlace = req.body.thirdPlace

    secondContest[firstPlace] += 3
    secondContest[secondPlace] += 2
    secondContest[thirdPlace] += 1

    // console.log(secondContest)
    res.render('vote3', {
        title: 'vote3'
    });

});

router.post('/vote3', function(req, res, next) {

    var firstPlace = req.body.firstPlace
    var secondPlace = req.body.secondPlace
    var thirdPlace = req.body.thirdPlace

    thirdContest[firstPlace] += 3
    thirdContest[secondPlace] += 2
    thirdContest[thirdPlace] += 1

    // console.log(thirdContest)
    res.render('vote4', {
        title: 'vote4'
    });
});


router.post('/vote4', function(req, res, next) {

    var firstPlace = req.body.firstPlace
    var secondPlace = req.body.secondPlace
    var thirdPlace = req.body.thirdPlace

    forthContest[firstPlace] += 3
    forthContest[secondPlace] += 2
    forthContest[thirdPlace] += 1

    // console.log(forthContest)
    res.render('vote5', {
        title: 'vote5'
    });

});

router.post('/vote5', function(req, res, next) {

    var firstPlace = req.body.firstPlace
    var secondPlace = req.body.secondPlace
    var thirdPlace = req.body.thirdPlace

    fifthContest[firstPlace] += 3
    fifthContest[secondPlace] += 2
    fifthContest[thirdPlace] += 1

    // console.log(fifthContest)
    res.render('finish', {
        title: 'finish'
    });
});


module.exports = router;
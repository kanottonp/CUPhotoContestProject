var express = require('express');
var router = express.Router();

var find = require('../public/javascripts/findTopTenInArray')
var fs = require('fs')
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

/* Start Define Adjustable Variable*/

/* Initial Contest title is here! */
var phutitle = 'Phuphu'
var title = phutitle + ' Voting System'
var vote1 = 'vote1'
var vote2 = 'vote2'
var vote3 = 'vote3'
var vote4 = 'vote4'
var vote5 = 'vote5'

/* Initial Calculation Rate Here */

var firstPlaceRate = 3
var secondPlaceRate = 2
var thirdPlaceRate = 1

/* Initial Arrays for 50 photos, 5 contest */
/* Array 50 photo + Array[0] = 51 Array.length*/
var firstContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
var secondContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
var thirdContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
var forthContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
var fifthContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
var totalVotes = 0

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: title });
});

router.get('/reset', function(req, res, next) {
    firstContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    secondContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    thirdContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    forthContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    fifthContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    totalVotes = 0
    res.render('index', { title: title });
});

/* GET Edit Contest page. */
router.get('/editcontest', function(req, res, next) {
    res.render('editcontest', { title: title + ' Editor' });
});

/* GET CSV page. */
router.get('/csv', function(req, res, next) {

    const header = ['Contest/Photo No.', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    ]
    var allArray = [firstContest, secondContest, thirdContest, forthContest, fifthContest]

    allArray[0][0] = vote1
    allArray[1][0] = vote2
    allArray[2][0] = vote3
    allArray[3][0] = vote4
    allArray[4][0] = vote5


    fs.writeFile('./CUPhotoContestResult.csv',
        convertArrayToCSV(allArray, {
            header: header
        }),
        function(err) {
            if (err) {
                console.error('Something wrong happens');
            }
        })
    res.render('csv')
});

/* GET Download CSV. */
router.get('/downloadcsv', (req, res) => {
    res.download('./CUPhotoContestResult.csv')
})



/* GET score page. */
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
        firstTitle: vote1,
        secondTitle: vote2,
        thirdTitle: vote3,
        forthTitle: vote4,
        fifthTitle: vote5,
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
        title: vote1,
        message: ''
    });
});

router.post('/posteditcontest', function(req, res, next) {
    if (req.body.campTitle != '') {
        phutitle = req.body.campTitle
        title = phutitle + ' Voting System'
    }
    if (req.body.firstContestName != '') {
        vote1 = req.body.firstContestName
    }
    if (req.body.secondContestName != '') {
        vote2 = req.body.secondContestName
    }
    if (req.body.thirdContestName != '') {
        vote3 = req.body.thirdContestName
    }
    if (req.body.forthContestName != '') {
        vote4 = req.body.forthContestName
    }
    if (req.body.fifthContestName != '') {
        vote5 = req.body.fifthContestName
    }
    if (req.body.firstContestMax > 0) {
        firstContest = Array.apply(null, Array(Number(req.body.firstContestMax) + 1)).map(Number.prototype.valueOf, 0);
    } else {
        firstContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    }
    if (req.body.secondContestMax > 0) {
        secondContest = Array.apply(null, Array(Number(req.body.secondContestMax) + 1)).map(Number.prototype.valueOf, 0);
    } else {
        secondContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    }
    if (req.body.thirdContestMax > 0) {
        thirdContest = Array.apply(null, Array(Number(req.body.thirdContestMax) + 1)).map(Number.prototype.valueOf, 0);
    } else {
        thirdContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    }
    if (req.body.forthContestMax > 0) {
        forthContest = Array.apply(null, Array(Number(req.body.forthContestMax) + 1)).map(Number.prototype.valueOf, 0);
    } else {
        forthContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    }
    if (req.body.fifthContestMax > 0) {
        fifthContest = Array.apply(null, Array(Number(req.body.fifthContestMax) + 1)).map(Number.prototype.valueOf, 0);
    } else {
        fifthContest = Array.apply(null, Array(51)).map(Number.prototype.valueOf, 0);
    }
    if (req.body.firstPlaceRate > 0) {
        firstPlaceRate = req.body.firstPlaceRate
    } else {
        firstPlaceRate = 3
    }
    if (req.body.secondPlaceRate > 0) {
        secondPlaceRate = req.body.secondPlaceRate
    } else {
        secondPlaceRate = 2
    }
    if (req.body.thirdPlaceRate > 0) {
        thirdPlaceRate = req.body.thirdPlaceRate
    } else {
        thirdPlaceRate = 1
    }

    console.log('firstContest is now limited for ' + (firstContest.length - 1) + ' photos')
    console.log('secondContest is now limited for ' + (secondContest.length - 1) + ' photos')
    console.log('thirdContest is now limited for ' + (thirdContest.length - 1) + ' photos')
    console.log('forthContest is now limited for ' + (forthContest.length - 1) + ' photos')
    console.log('fifthContest is now limited for ' + (fifthContest.length - 1) + ' photos')
    console.log('firstPlaceRate is now ' + firstPlaceRate)
    console.log('secondPlaceRate is now ' + secondPlaceRate)
    console.log('thirdPlaceRate is now ' + thirdPlaceRate)

    res.render('index', {
        title: title
    });

})

/* POST First Contest Vote, then Render Second Contest Vote Page. */

router.post('/vote1', function(req, res, next) {

    if (req.body.firstPlace == req.body.secondPlace ||
        req.body.firstPlace == req.body.thirdPlace ||
        req.body.secondPlace == req.body.thirdPlace) {
        res.render('vote1', {
            title: vote1,
            message: 'Do not do the double vote for the same photos. Please vote again.'
        });
    } else if (req.body.firstPlace <= 0 || req.body.secondPlace <= 0 || req.body.thirdPlace <= 0) {
        res.render('vote1', {
            title: vote1,
            message: 'Do not do the vote for the photo that photo number is below than 1. Please vote again.'
        });
    } else if (req.body.firstPlace > (firstContest.length - 1) || req.body.secondPlace > (firstContest.length - 1) || req.body.thirdPlace > (firstContest.length - 1)) {
        res.render('vote1', {
            title: vote1,
            message: 'Do not do the vote for the photo that photo number is higher than the limit. Please vote again.'
        });
    } else {
        var firstPlace = req.body.firstPlace
        var secondPlace = req.body.secondPlace
        var thirdPlace = req.body.thirdPlace

        firstContest[firstPlace] += firstPlaceRate
        firstContest[secondPlace] += secondPlaceRate
        firstContest[thirdPlace] += thirdPlaceRate

        // console.log(firstContest)
        res.render('vote2', {
            title: vote2,
            message: ''
        });
    }

});

/* POST Second Contest Vote, then Render Third Contest Vote Page. */

router.post('/vote2', function(req, res, next) {

    if (req.body.firstPlace == req.body.secondPlace ||
        req.body.firstPlace == req.body.thirdPlace ||
        req.body.secondPlace == req.body.thirdPlace) {
        res.render('vote2', {
            title: vote2,
            message: 'Do not do the double vote for the same photos. Please vote again.'
        });
    } else if (req.body.firstPlace <= 0 || req.body.secondPlace <= 0 || req.body.thirdPlace <= 0) {
        res.render('vote2', {
            title: vote2,
            message: 'Do not do the vote for the photo that photo number is below than 1. Please vote again.'
        });
    } else if (req.body.firstPlace > (secondContest.length - 1) || req.body.secondPlace > (secondContest.length - 1) || req.body.thirdPlace > (secondContest.length - 1)) {
        res.render('vote2', {
            title: vote2,
            message: 'Do not do the vote for the photo that photo number is higher than the limit. Please vote again.'
        });
    } else {
        var firstPlace = req.body.firstPlace
        var secondPlace = req.body.secondPlace
        var thirdPlace = req.body.thirdPlace

        secondContest[firstPlace] += firstPlaceRate
        secondContest[secondPlace] += secondPlaceRate
        secondContest[thirdPlace] += thirdPlaceRate

        // console.log(secondContest)
        res.render('vote3', {
            title: vote3,
            message: ''
        });
    }

});

/* POST Third Contest Vote, then Render Forth Contest Vote Page. */

router.post('/vote3', function(req, res, next) {

    if (req.body.firstPlace == req.body.secondPlace ||
        req.body.firstPlace == req.body.thirdPlace ||
        req.body.secondPlace == req.body.thirdPlace) {
        res.render('vote3', {
            title: vote3,
            message: 'Do not do the double vote for the same photos. Please vote again.'
        });
    } else if (req.body.firstPlace <= 0 || req.body.secondPlace <= 0 || req.body.thirdPlace <= 0) {
        res.render('vote3', {
            title: vote3,
            message: 'Do not do the vote for the photo that photo number is below than 1. Please vote again.'
        });
    } else if (req.body.firstPlace > (thirdContest.length - 1) || req.body.secondPlace > (thirdContest.length - 1) || req.body.thirdPlace > (thirdContest.length - 1)) {
        res.render('vote3', {
            title: vote3,
            message: 'Do not do the vote for the photo that photo number is higher than the limit. Please vote again.'
        });
    } else {
        var firstPlace = req.body.firstPlace
        var secondPlace = req.body.secondPlace
        var thirdPlace = req.body.thirdPlace

        thirdContest[firstPlace] += firstPlaceRate
        thirdContest[secondPlace] += secondPlaceRate
        thirdContest[thirdPlace] += thirdPlaceRate

        // console.log(thirdContest)
        res.render('vote4', {
            title: vote4,
            message: ''
        });
    }
});

/* POST Forth Contest Vote, then Render Fifth Contest Vote Page. */

router.post('/vote4', function(req, res, next) {

    if (req.body.firstPlace == req.body.secondPlace ||
        req.body.firstPlace == req.body.thirdPlace ||
        req.body.secondPlace == req.body.thirdPlace) {
        res.render('vote4', {
            title: vote4,
            message: 'Do not do the double vote for the same photos. Please vote again.'
        });
    } else if (req.body.firstPlace <= 0 || req.body.secondPlace <= 0 || req.body.thirdPlace <= 0) {
        res.render('vote4', {
            title: vote4,
            message: 'Do not do the vote for the photo that photo number is below than 1. Please vote again.'
        });
    } else if (req.body.firstPlace > (forthContest.length - 1) || req.body.secondPlace > (forthContest.length - 1) || req.body.thirdPlace > (forthContest.length - 1)) {
        res.render('vote4', {
            title: vote4,
            message: 'Do not do the vote for the photo that photo number is higher than the limit. Please vote again.'
        });
    } else {
        var firstPlace = req.body.firstPlace
        var secondPlace = req.body.secondPlace
        var thirdPlace = req.body.thirdPlace

        forthContest[firstPlace] += firstPlaceRate
        forthContest[secondPlace] += secondPlaceRate
        forthContest[thirdPlace] += thirdPlaceRate

        // console.log(forthContest)
        res.render('vote5', {
            title: vote5,
            message: ''
        });
    }

});

/* POST Second Contest Vote, then Render Finish Page. */

router.post('/vote5', function(req, res, next) {

    if (req.body.firstPlace == req.body.secondPlace ||
        req.body.firstPlace == req.body.thirdPlace ||
        req.body.secondPlace == req.body.thirdPlace) {
        res.render('vote5', {
            title: vote5,
            message: 'Do not do the double vote for the same photos. Please vote again.'
        });
    } else if (req.body.firstPlace <= 0 || req.body.secondPlace <= 0 || req.body.thirdPlace <= 0) {
        res.render('vote5', {
            title: vote5,
            message: 'Do not do the vote for the photo that photo number is below than 1. Please vote again.'
        });
    } else if (req.body.firstPlace > (fifthContest.length - 1) || req.body.secondPlace > (fifthContest.length - 1) || req.body.thirdPlace > (fifthContest.length - 1)) {
        res.render('vote5', {
            title: vote5,
            message: 'Do not do the vote for the photo that photo number is higher than the limit. Please vote again.'
        });
    } else {
        var firstPlace = req.body.firstPlace
        var secondPlace = req.body.secondPlace
        var thirdPlace = req.body.thirdPlace

        fifthContest[firstPlace] += firstPlaceRate
        fifthContest[secondPlace] += secondPlaceRate
        fifthContest[thirdPlace] += thirdPlaceRate

        // console.log(fifthContest)
        res.render('finish', {
            title: 'finish'
        });
    }
});


module.exports = router;
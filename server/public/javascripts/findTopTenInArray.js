let findTopTenInArray = (arr) => {

    var model = {
        score: 0,
        index: 0
    }

    var temparr = [model, model, model, model, model, model, model, model, model, model];

    arr.forEach((element, idx) => {
        var temp = {
            score: element,
            index: idx
        }
        if (temp.score > temparr[0].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temparr[5]
            temparr[5] = temparr[4]
            temparr[4] = temparr[3]
            temparr[3] = temparr[2]
            temparr[2] = temparr[1]
            temparr[1] = temparr[0]
            temparr[0] = temp
        } else if (temp.score > temparr[1].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temparr[5]
            temparr[5] = temparr[4]
            temparr[4] = temparr[3]
            temparr[3] = temparr[2]
            temparr[2] = temparr[1]
            temparr[1] = temp
        } else if (temp.score > temparr[2].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temparr[5]
            temparr[5] = temparr[4]
            temparr[4] = temparr[3]
            temparr[3] = temparr[2]
            temparr[2] = temp
        } else if (temp.score > temparr[3].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temparr[5]
            temparr[5] = temparr[4]
            temparr[4] = temparr[3]
            temparr[3] = temp
        } else if (temp.score > temparr[4].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temparr[5]
            temparr[5] = temparr[4]
            temparr[4] = temp
        } else if (temp.score > temparr[5].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temparr[5]
            temparr[5] = temp
        } else if (temp.score > temparr[6].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temparr[6]
            temparr[6] = temp
        } else if (temp.score > temparr[7].score) {
            temparr[9] = temparr[8]
            temparr[8] = temparr[7]
            temparr[7] = temp
        } else if (temp.score > temparr[8].score) {
            temparr[9] = temparr[8]
            temparr[8] = temp
        } else if (temp.score > temparr[9].score) {
            temparr[9] = temp
        }
    });
    return temparr
}

module.exports = { findTopTenInArray }
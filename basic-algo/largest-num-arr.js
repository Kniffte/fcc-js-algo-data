function largestOfFour(arr) {
    const resultArr = [];
    for (let i = 0; i < 4; i++) {
        var maxNo = -9999;
        for (let j = 0; j < 4; j++) {
            if (arr[i][j] > maxNo) {
                maxNo = arr[i][j];
            }
        }
        resultArr.push(maxNo);
    }
    return resultArr;
}

let ind = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
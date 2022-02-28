function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    let change = cash - price;
    let cidTotal = cid.map(curr => curr[1]).reduce((accVal, curVal)  => accVal + curVal);
    if (change > cidTotal) {return {status: "INSUFFICIENT_FUNDS", change: []}};
    let index = 0;
    for (let i = 0; i < currencyUnits.length; i++) {
        if (change < currencyUnits[i][1]) {
            index = i - 1;
            break;
        }
    }
    cidTotal = cid.slice(0, index).map(curr => curr[1]).reduce((accVal, curVal)  => accVal + curVal);
    if (change > cidTotal) {return {status: "INSUFFICIENT_FUNDS", change: []}};

    let changeObj = {status: "OPEN", change: []}
    for (let i = index; i >= 0; i--) {
        if (change % currencyUnits[i][1] == 0) {
            if (change <= cid[i][1]) {
                changeObj.change.push([cid[i][0], change]);
                break;
            }
        };
        // if (change > 0) {
        //     Math.floor(change / currencyUnits[i][1]) * currencyUnits[i][1]
        // }
    }
    return changeObj;
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
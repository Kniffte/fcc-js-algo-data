function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let objects = collection.filter(obj => {
        for (let [key, value] of Object.entries(source)) {
            if (!obj.hasOwnProperty(key) || obj[key] !== value) {
                return false
            };
        };
        return true;
    });
    return objects;
    // Only change code above this line
    return arr;
  }
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
                { first: "Mercutio", last: null }, 
                { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, 
                { "bat": 2 }, 
                { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
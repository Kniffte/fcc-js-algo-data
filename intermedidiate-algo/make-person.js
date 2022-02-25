const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    this.getFullName = function() {
        return fullName;
    };
    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };
    this.getLastName = function() {
        return fullName.split(" ")[1];
    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
    };
    this.setFirstName = function(firstName) {
        const names = fullName.split(" ");
        names[0] = firstName;
        fullName = names.join(" ");
    };
    this.setLastName = function(lastName) {
        const names = fullName.split(" ");
        names[1] = lastName;
        fullName = names.join(" ");
    };
};
  
const bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
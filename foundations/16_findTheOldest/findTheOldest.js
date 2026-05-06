const findTheOldest = function(people) {
    let greatest_age = -1;
    let oldest_person;

    for (let person of people) {
        let age;
        if (person.yearOfDeath === undefined) {
            age = 2026 - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > greatest_age) {
            greatest_age = age;
            oldest_person = person;
        }
    }
    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest =  (array) => { 
    return array.reduce((a, b) => {
        const oldestPerson = getAge(a.yearOfBirth, a.yearOfDeath);
        const currentPerson = getAge(b.yearOfBirth, b.yearOfDeath);
        return oldestPerson > currentPerson ? a : b;
  })
};
  
const getAge = (birth, death) => {
    if (!death) { 
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;

var persons = [{
        name: "Adam",
        age: 34,
        hobbies: [
            "Fishing",
            "Frimärkssamling"
        ]
    },
    {
        name: "Sofia",
        age: 64,
        hobbies: [
            "Walking",
            "socializing",
            "collecting stamps"
        ]
    },
    {
        name: "Ulf",
        age: 27,
        hobbies: []
    },
    {
        name: "Ibrahim",
        age: 53,
        hobbies: [
            "sports", "computers", "movies"
        ]
    },
    {
        name: "Flo",
        age: 49,
        hobbies: ["Norwegian literature", "Fruits"]
    }
]

var allOver40 = true;

// Kolla om alla personer är äldre än 40 år.
allOver40 = persons.every(function (person) {
    return person.age > 40;
})

// Kopiera alla personer med ett "a" i namnet.
var aPersons = persons.filter(function (person) {
    // .indexOf ger alltid resultatet -1 om den inte hittar något.
    return person.name.indexOf("a") != -1;
})

// Hitta den förste personen med hobbyn musik.
var musicLover = persons.find(function (p) {
    // För att hitta två olika stavningar.
    if (p.hobbies.includes("musik") || p.hobbies.includes("music")) {
        return true;
    }
})

// Skriv ut alla personer - arrow function
persons.forEach(person => {
    console.log(person);
})

// Skriv ut alla personers namn - vanlig funktion
persons.forEach(function (person) {
    console.log(person.name);
})

// Lägg till egenskapen married
persons.map(function (person) {
    person.married = null;
})

// Gift alla personer med udda ålder.
persons.map(person => {
    if (person.age % 2 == 1) {
        person.married = true;
    }
})

// Räkna ihop totalålder
var totalAge = persons.reduce(function (acc, person) {
    return acc + person.age;
}, 0)

// Räkna ihop antalet hobbies
var numOfHobbies = persons.reduce(function (acc, person) {
    return acc + person.hobbies.length;
}, 0)

// Kolla om det finns någon gift som gillar sport.
var marriedSport = persons.find(function (person) {
    if (person.married && person.hobbies.includes("sports"))
        return true;
})

// Lista alla hobbies som börjar på "f".
var fHobbies = persons.filter(function (person) {
    var x = person.hobbies.filter(function (hobby) {
        if (hobby.indexOf("F") == 0)
            return true;
    })
    if (x.length > 0)
        return true;
})
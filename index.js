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
        hobbies: ["Norwegian literature"]
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
var musicLover = persons.find(function (person) {
    if ((person.hobbies.includes("musik") || person.hobbies.includes("music"))) {
        return true;
    }
})
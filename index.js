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

// Kopiera alla personer med ett "a" i namnet.
var aPersons = persons.filter(function (person) {
    // .indexOf ger alltid resultatet -1 om den inte hittar något.
    return person.name.indexOf("a") != -1;
})

function checkNames(person) {
    if ((person.name.indexOf('a') !== -1) || (person.name.indexOf('A') !== -1)) {
        return true;
    }
}
var namesIncludingA = persons.filter(checkNames);
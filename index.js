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

var x = persons.every(person => {
    if (person.age > 10) {
        console.log("True")
    } else {
        console.log("False")
    }
})
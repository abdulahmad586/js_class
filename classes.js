// class Person {
//     abled;
//     blind;
//     handicapped;
// }

// const gambo = new Person();
// gambo.blind = true;
// gambo.handicapped = 100;
// gambo.abled = 100;
// console.log(gambo);


class Animal {
    name;
    type;
    legs;

    constructor(n, t, l) {
        this.name = n;
        this.type = t;
        this.legs = l;
    }

    display() {
        console.log("DISPLAY:", this);
    }

}

const goat = new Animal("Goat", "Herbivore", 4);
const rabbit = new Animal("Rabbit", "Herbivore", 4);

rabbit.display();

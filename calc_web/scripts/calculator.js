class Calculator {

    #getPassword() {
        return "secretPassword";
    }

    add(a, b, password) {
        const calcPassword = this.#getPassword();

        if (calcPassword !== password) {
            return "Invalid password";
        }

        return a + b;
    }

    subtract(a, b, password) {
        const calcPassword = this.#getPassword();

        if (calcPassword !== password) {
            return "Invalid password";
        }

        return a - b;
    }

    multiply(a, b, password) {
        const calcPassword = this.#getPassword();

        if (calcPassword !== password) {
            return "Invalid password";
        }

        return a * b;
    }

    divide(a, b, password) {
        const calcPassword = this.#getPassword();

        if (calcPassword !== password) {
            return "Invalid password";
        }

        return a / b;
    }



}

const calc = new Calculator();
const result = calc.subtract(45, 15, "secretPassword");
console.log(result);




function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";
                break;
            default:
                result = "Please enter a valid operator (+, -, *, /).";
        }
    }

    document.getElementById('calculator-output').innerText = "Result: " + result;
}


function calculateEvenSum() {
    const input = document.getElementById('array-input').value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
    document.getElementById('array-output').innerText = "Sum of even numbers: " + sum;
}


let person;

function createPerson() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    person = {
        firstName,
        lastName,
        age,
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        },
        incrementAge: function() {
            this.age++;
        }
    };

    document.getElementById('person-output').innerText = `Person created: ${person.getFullName()}, Age: ${person.age}`;
}

function incrementAge() {
    if (person) {
        person.incrementAge();
        document.getElementById('person-output').innerText = `${person.getFullName()}, Age: ${person.age}`;
    } else {
        document.getElementById('person-output').innerText = "Please create a person first.";
    }
}

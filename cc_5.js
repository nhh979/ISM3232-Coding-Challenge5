// Hoang Nguyen
// U12840485

// Create Employee class
class Employee {
    constructor (name, salary) {
        // Create the instances of the Employee class with 'name' and 'salary' properties
        this.name = name;
        this.salary = salary;

        // Display employee's name and salary
        console.log(`Employee name: ${this.name}.`);
        console.log(`Monthly salary: $${this.salary}.`);
    }

    annualSalary () {
        // This function is used to calculate the annual salary
        return this.salary * 12     // Multiply monthly salary by 12 and return the result
    }
}

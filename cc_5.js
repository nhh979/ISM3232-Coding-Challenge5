// Hoang Nguyen
// U12840485

// Create Employee class
class Employee {
    constructor (name, salary) {
        // Create the instances of the Employee class with 'name' and 'salary' properties
        this.name = name;
        this.salary = salary;

        // Display employee's name and salary with 2 decimal places
        console.log(`Employee name: ${this.name}.`);
        console.log(`Monthly salary: $${this.salary.toFixed(2)}.`);
    }

    annualSalary () {
        // This function is used to calculate the annual salary
        return this.salary * 12     // Multiply monthly salary by 12 and return the result
    }
}

// Create a subclass Manager
class Manager extends Employee {
    constructor (name, salary, department) { 
        super(name, salary);            // Inherit "name" and "salary" properties from class Employee class
        this.department = department;   // Initiate the instance property "department"

        // Display department
        console.log(`Department: ${this.department}`);
    }

    annualSalary () {
        // This method overrides the annualSalary method in the parrent class        
        let annual = this.salary * 12 // Multiply the monthly salary by 12
        let bonus = annual * 0.15;      // Calculate 15% bonus
        
        // Display the amount of bonus and total salary with 2 decimal places
        console.log(`The amount of the bonus is $${bonus.toFixed(2)}, and the total annual salary is $${(annual + bonus).toFixed(2)}.`);
    }
}

// Manager 1: Bob Ross works in the Digital Marketing department and earns $6600.00 a month.
let bob = new Manager("Bob Ross", 6600.00, "Digital Marketing")
bob.annualSalary(); 

console.log("-------------------------------------------------");
// Manager 2: Debbie Little works in the Finance department and earns $7205.00 a month.
let debbie = new Manager("Debbie Little", 7205.00, "Finance ")
debbie.annualSalary(); 
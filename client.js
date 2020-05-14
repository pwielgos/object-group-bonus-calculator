const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function bonusCalculator(employeeToCalc) {
  let newEmployee = {};
    if (employeeToCalc.reviewRating <= 2) {
      newEmployee.name = employeeToCalc.name;
      newEmployee.bonusPercentage = 0;
      newEmployee.totalBonus = 0;
      newEmployee.totalCompensation = employeeToCalc.annualSalary;
    }
    else if (employeeToCalc.reviewRating === 3) {
      newEmployee.name = employeeToCalc.name;
      newEmployee.bonusPercentage = 0.04;
      newEmployee.totalBonus = employeeToCalc.annualSalary * newEmployee.bonusPercentage;
      newEmployee.totalCompensation = employeeToCalc.annualSalary += newEmployee.totalBonus;
    }
    else if (employeeToCalc.reviewRating === 4) {
      newEmployee.name = employeeToCalc.name;
      newEmployee.bonusPercentage = 0.06;
      newEmployee.totalBonus = employeeToCalc.annualSalary * newEmployee.bonusPercentage;
      newEmployee.totalCompensation = employeeToCalc.annualSalary += newEmployee.totalBonus;
    }
    else if (employeeToCalc.reviewRating === 5) {
      newEmployee.name = employeeToCalc.name;
      newEmployee.bonusPercentage = 0.1;
      newEmployee.totalBonus = employeeToCalc.annualSalary * newEmployee.bonusPercentage;
      newEmployee.totalCompensation = employeeToCalc.annualSalary += newEmployee.totalBonus;
    }
    if (employeeToCalc.employeeNumber.length === 4) {
      newEmployee.bonusPercentage += 0.05;
    }
    if (employeeToCalc.annualSalary > 65000) {
      newEmployee.bonusPercentage -= 0.01;
    }
    return newEmployee;    
  }

console.log(bonusCalculator((employees[0])));

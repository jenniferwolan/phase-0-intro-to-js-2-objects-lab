// Write your solution in this file!
const employee = {
    name: "name",
    streetAddress: "streetAddress"
}

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee, [key] : value}; 
return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = [key]
    employee.streetAddress = value
return employee;
  }
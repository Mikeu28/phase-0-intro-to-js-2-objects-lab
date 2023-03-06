const employee = {
    name: "Michael",
    streetAddress: "123",
};
function updateEmployeeWithKeyAndValue(employee, name, susan) {
    const newEmployee = {...employee};
    newEmployee[name] = susan;
    return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, susan) {
    employee[name] = susan;
    return employee;
};
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
};
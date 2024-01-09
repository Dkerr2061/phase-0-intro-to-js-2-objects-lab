
const employee = {
  name: 'David',
  streetAddress: '1068 E Elmwood Dr'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newObj = {...employee};
  newObj[key] = value;
  return newObj;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
  }
  
    
  function deleteFromEmployeeByKey(employee, key) {
  let newObj = {...employee }
  delete newObj[key];
  return newObj;
  }
  
    
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
  }
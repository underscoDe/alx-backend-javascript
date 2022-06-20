export default function createIteratorObject(report) {
  const employeeList = [];
  /* eslint-disable no-unused-vars */
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      employeeList.push(employee);
    }
  }
  /* eslint-enable no-unused-vars */

  return employeeList;
}

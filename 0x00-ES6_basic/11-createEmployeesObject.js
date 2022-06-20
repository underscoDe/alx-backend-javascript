export default function createEmployeesObject(departmentName, employees) {
  const employment = {
    [departmentName]: [
      ...employees,
    ],
  };
  return employment;
}

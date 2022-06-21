export default function getStudentIdsSum(students) {
  return students.reduce((studentId, student) => studentId + student.id, +0);
}

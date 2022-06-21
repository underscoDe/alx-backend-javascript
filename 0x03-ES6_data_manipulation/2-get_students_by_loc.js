export default function geStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

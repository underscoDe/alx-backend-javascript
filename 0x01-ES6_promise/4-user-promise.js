export default function signUpUser(firstName, lastName) {
  const obj = {
    firstName,
    lastName,
  };
  return Promise.resolve(obj);
}

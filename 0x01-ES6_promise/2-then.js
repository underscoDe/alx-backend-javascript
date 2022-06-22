export default function handledResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  return promise
    .then(() => res)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}

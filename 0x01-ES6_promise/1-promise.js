export default function getFullResponseFromAPI(success) {
  return new Promise((successCall, failureCall) => {
    if (success) {
      successCall({ status: 200, body: 'Success' });
    } else {
      failureCall(new Error('The fake API is not working currently'));
    }
  });
}

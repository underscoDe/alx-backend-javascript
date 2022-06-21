export default function cleanSet(set, startString) {
  const setRet = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      setRet.push(s.slice(startString.length));
    }
  });
  return setRet.join('-');
}

export default function ValidateCredentials(value, regex) {
  const myRegex = regex;
  let result = false;

  if (myRegex.test(value)) {
    result = true;
  }

  return result;
}

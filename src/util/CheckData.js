export function CheckData(data) {
  let result = "no data";

  if ([...data].length) {
    result = data;
  }

  return result;
}

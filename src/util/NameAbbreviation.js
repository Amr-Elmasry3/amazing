export default function NameAbbreviation(name) {
  const words = name.split(" ");
  let result = "";

  words.map((item) => {
    return (result += item[0]);
  });

  return result;
}

export function splitName(fullName) {
  // TODO implement to pass the test
  const nameSplit = fullName.split(' ')


  let name = {};
  name.firstName = nameSplit[0]
  name.lastName = nameSplit[1]

  return name
}
